import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Chip,
  useTheme,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useApp } from '../../context/AppContext';
import { homeStyles } from './HomeScreen.styles';

export const HomeScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const {
    allProjects,
    navigate,
    toggleFavorite,
    isFavorite,
    setSelectedProjectId,
    setFilters,
  } = useApp();

  const featuredProject = allProjects.find((p) => p.featured) || allProjects[0];

  const handleOpenProject = (projectId) => {
    setSelectedProjectId(projectId);
    navigate('projectDetails', { projectId });
  };

  const handleFilterCategory = (status) => {
    if (status === 'why') {
      navigate('aboutUs');
    } else {
      setFilters((prev) => ({ ...prev, status }));
      navigate('projectsList');
    }
  };

  const quickCategories = [
    {
      title: 'Ongoing Projects',
      icon: <ApartmentIcon sx={{ color: '#D4A017', fontSize: 28 }} />,
      action: () => handleFilterCategory('Ongoing'),
    },
    {
      title: 'Completed Projects',
      icon: <CheckCircleOutlineIcon sx={{ color: '#D4A017', fontSize: 28 }} />,
      action: () => handleFilterCategory('Completed'),
    },
    {
      title: 'Upcoming Projects',
      icon: <ArchitectureIcon sx={{ color: '#D4A017', fontSize: 28 }} />,
      action: () => handleFilterCategory('Upcoming'),
    },
    {
      title: 'Why SVCS',
      icon: <WorkspacePremiumIcon sx={{ color: '#D4A017', fontSize: 28 }} />,
      action: () => handleFilterCategory('why'),
    },
  ];

  return (
    <Box sx={homeStyles.container}>
      {/* 1. Hero Banner Card matching Design Screen 3 */}
      <Box sx={homeStyles.heroBanner(isDark)}>
        <Box sx={{ zIndex: 2 }}>
          <Typography variant="h2" sx={homeStyles.heroHeading}>
            Building Homes <br />
            Building Trust
          </Typography>

          <Typography variant="body1" sx={homeStyles.heroSubtitle}>
            Crafting spaces for a better tomorrow
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate('projectsList')}
            sx={homeStyles.heroBtn}
          >
            Explore Projects
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
            alt="Modern Tower"
            sx={{
              width: '100%',
              maxWidth: '280px',
              height: '210px',
              objectFit: 'cover',
              borderRadius: 3.5,
              border: '2px solid rgba(212,160,23,0.4)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            }}
          />
        </Box>
      </Box>

      {/* 2. 4 Quick Action Category Cards matching Design Screen 3 */}
      <Box sx={homeStyles.quickCategoriesGrid}>
        {quickCategories.map((cat, idx) => (
          <Card
            key={idx}
            sx={homeStyles.categoryCard(isDark)}
            onClick={cat.action}
          >
            <Box sx={homeStyles.categoryIconBox(isDark)}>
              {cat.icon}
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '0.82rem', sm: '0.88rem' },
                color: 'text.primary',
              }}
            >
              {cat.title}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* 3. Featured Projects Section matching Design Screen 3 */}
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 900 }}>
            Featured Projects
          </Typography>
          <Button
            onClick={() => navigate('projectsList')}
            sx={{
              color: '#D4A017',
              fontWeight: 800,
              fontSize: '0.88rem',
              textTransform: 'none',
            }}
          >
            View All
          </Button>
        </Box>

        {/* Large Featured Project Card */}
        <Card
          sx={homeStyles.featuredCard(isDark)}
          onClick={() => handleOpenProject(featuredProject.id)}
        >
          <Box sx={{ position: 'relative', height: { xs: 240, md: 360 } }}>
            <CardMedia
              component="img"
              height="100%"
              image={featuredProject.heroImage}
              alt={featuredProject.title}
              sx={{ objectFit: 'cover' }}
            />
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(featuredProject.id);
              }}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: isFavorite(featuredProject.id) ? '#EF4444' : '#FFF',
                backdropFilter: 'blur(4px)',
              }}
            >
              {isFavorite(featuredProject.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>

          <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 0.5 }}>
              {featuredProject.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, mb: 1 }}>
              {featuredProject.subtitle}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnIcon sx={{ fontSize: 16, color: '#D4A017' }} />
              <Typography variant="body2" color="text.secondary">
                {featuredProject.location}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HomeScreen;
