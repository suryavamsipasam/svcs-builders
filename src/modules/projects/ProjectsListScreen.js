import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Tabs,
  Tab,
  IconButton,
  InputBase,
  Paper,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useApp } from '../../context/AppContext';
import { projectsStyles } from './Projects.styles';
import { commonStyles } from '../../common/styles/common.styles';

export const ProjectsListScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { allProjects, navigate, setSelectedProjectId, filters, setFilters } = useApp();

  const [activeTab, setActiveTab] = useState(filters.status || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredProjects = allProjects.filter((p) => {
    const matchStatus = activeTab === 'All' || p.status === activeTab;
    const matchQuery =
      !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchQuery;
  });

  const handleOpenProject = (projectId) => {
    setSelectedProjectId(projectId);
    navigate('projectDetails', { projectId });
  };

  const handleTabChange = (e, val) => {
    setActiveTab(val);
    setFilters((prev) => ({ ...prev, status: val }));
  };

  return (
    <Box sx={projectsStyles.listContainer}>
      {/* Header matching Screen 4 */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => navigate('home')} sx={{ p: 0.5 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Projects
          </Typography>
        </Box>

        <IconButton onClick={() => setIsSearchOpen(!isSearchOpen)} sx={{ color: 'text.primary' }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Optional Search Bar toggle */}
      {isSearchOpen && (
        <Paper
          elevation={0}
          sx={{
            p: '4px 12px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 3,
            border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.4)' : '#CBD5E1'}`,
            bgcolor: isDark ? '#0F1B2D' : '#FFFFFF',
          }}
        >
          <SearchIcon sx={{ color: '#D4A017', mr: 1 }} />
          <InputBase
            placeholder="Search projects by title or area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            autoFocus
          />
        </Paper>
      )}

      {/* Status Filter Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          ...commonStyles.tabsPillContainer(isDark),
          maxWidth: { xs: '100%', sm: '420px' },
        }}
      >
        <Tab label="All" value="All" />
        <Tab label="Ongoing" value="Ongoing" />
        <Tab label="Completed" value="Completed" />
        <Tab label="Upcoming" value="Upcoming" />
      </Tabs>

      {/* Horizontal Project Cards matching Screen 4 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            onClick={() => handleOpenProject(project.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              borderRadius: 3.5,
              cursor: 'pointer',
              backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0'}`,
              transition: 'all 0.2s ease',
              '&:hover': {
                borderColor: '#D4A017',
                transform: 'translateY(-2px)',
                boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.05)',
              },
            }}
          >
            {/* Left Thumbnail + Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
              <CardMedia
                component="img"
                image={project.heroImage}
                alt={project.title}
                sx={{
                  width: { xs: 90, sm: 120 },
                  height: { xs: 80, sm: 95 },
                  borderRadius: 3,
                  objectFit: 'cover',
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, fontSize: { xs: '1rem', sm: '1.15rem' }, lineHeight: 1.2 }}>
                  {project.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, display: 'block', mt: 0.3 }}>
                  {project.subtitle} • {project.location}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    display: 'block',
                    mt: 0.8,
                    color: project.status === 'Ongoing' ? '#D4A017' : project.status === 'Completed' ? '#10B981' : '#3B82F6',
                  }}
                >
                  {project.status === 'Ongoing'
                    ? `Under Construction • ${project.progressPercent}% Complete`
                    : project.status === 'Completed'
                    ? 'Ready for Possession • 100% Complete'
                    : 'Upcoming Project'}
                </Typography>
              </Box>
            </Box>

            {/* Right Chevron */}
            <ChevronRightIcon sx={{ color: 'text.secondary', fontSize: 26 }} />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectsListScreen;
