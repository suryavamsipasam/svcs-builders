import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  useTheme,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import BedIcon from '@mui/icons-material/Bed';
import { useApp } from '../../context/AppContext';
import { favoritesStyles } from './Favorites.styles';

export const FavoritesScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { allProjects, favorites, toggleFavorite, navigate, setSelectedProjectId } = useApp();

  const favoriteProjects = allProjects.filter((p) => favorites.includes(p.id));

  const handleOpenProject = (projectId) => {
    setSelectedProjectId(projectId);
    navigate('projectDetails', { projectId });
  };

  return (
    <Box sx={favoritesStyles.container}>
      {/* Page Header */}
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          My Saved Properties
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You have {favoriteProjects.length} saved project{favoriteProjects.length === 1 ? '' : 's'} in your shortlist
        </Typography>
      </Box>

      {favoriteProjects.length === 0 ? (
        <Box sx={favoritesStyles.emptyBox}>
          <HeartBrokenIcon sx={{ fontSize: 72, color: 'text.secondary', mb: 2, opacity: 0.4 }} />
          <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>
            No Saved Properties Yet
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 400, mb: 3 }}>
            Explore our luxury residential communities and tap the heart icon on any project card to save your favorites here.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('projectsList')}
            sx={{ borderRadius: 2.5, fontWeight: 800, px: 3 }}
          >
            Explore Projects
          </Button>
        </Box>
      ) : (
        <Box sx={favoritesStyles.favoritesGrid}>
          {favoriteProjects.map((project) => (
            <Card
              key={project.id}
              sx={favoritesStyles.card(isDark)}
              onClick={() => handleOpenProject(project.id)}
            >
              {/* Image */}
              <Box sx={{ position: 'relative', height: 210 }}>
                <CardMedia
                  component="img"
                  height="210"
                  image={project.heroImage}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(project.id);
                  }}
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: '#EF4444',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <FavoriteIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Details */}
              <CardContent sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    {project.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5, mb: 1.5 }}>
                    <LocationOnIcon sx={{ fontSize: 16, color: '#D4A017' }} />
                    <Typography variant="body2" color="text.secondary">
                      {project.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <BedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                      {project.bhkTypes.join(', ')}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pt: 1.5, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#D4A017' }}>
                    {project.priceFull}
                  </Typography>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenProject(project.id);
                    }}
                    sx={{ borderRadius: 2, fontWeight: 700 }}
                  >
                    View
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FavoritesScreen;
