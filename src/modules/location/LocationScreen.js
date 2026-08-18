import React from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigationIcon from '@mui/icons-material/Navigation';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BusinessIcon from '@mui/icons-material/Business';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { SvgMap } from './SvgMap';
import { useApp } from '../../context/AppContext';
import { locationStyles } from './Location.styles';

export const LocationScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { selectedProject, navigate } = useApp();

  const nearbyPlaces = selectedProject.nearbyPlaces || [];

  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'Education':
        return <SchoolIcon sx={{ color: '#3B82F6', fontSize: 22 }} />;
      case 'Healthcare':
        return <LocalHospitalIcon sx={{ color: '#EF4444', fontSize: 22 }} />;
      case 'Shopping':
        return <ShoppingBagIcon sx={{ color: '#F59E0B', fontSize: 22 }} />;
      case 'Workplace':
        return <BusinessIcon sx={{ color: '#8B5CF6', fontSize: 22 }} />;
      case 'Transit':
        return <DirectionsCarIcon sx={{ color: '#10B981', fontSize: 22 }} />;
      default:
        return <LocationOnIcon sx={{ color: '#D4A017', fontSize: 22 }} />;
    }
  };

  const handleGetDirections = () => {
    const query = encodeURIComponent(`${selectedProject.title} ${selectedProject.location}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <Box sx={locationStyles.container}>
      {/* Top Header */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 2 }}>
        <Box>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('projectDetails')}
            sx={{ fontWeight: 700, color: 'text.secondary', mb: 0.5, p: 0 }}
          >
            Back to {selectedProject.title}
          </Button>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Prime Location & Infrastructure
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Strategic connectivity along the Outer Ring Road (ORR) corridor, financial district, and top schools
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          startIcon={<NavigationIcon />}
          onClick={handleGetDirections}
          sx={{ py: 1.2, px: 3, fontWeight: 800, borderRadius: 2.5, whiteSpace: 'nowrap' }}
        >
          Open in Google Maps
        </Button>
      </Box>

      {/* 2-Column Desktop Grid Layout */}
      <Box sx={locationStyles.desktopLayout}>
        {/* Left Column: Interactive Vector Map Visualizer */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <SvgMap projectTitle={selectedProject.title} />

          <Card sx={{ p: 2.5, borderRadius: 3.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Box sx={locationStyles.locationIconBox(isDark)}>
                <LocationOnIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  {selectedProject.title} Site Address
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.6 }}>
                  Plot No. 42-45, Golden Mile Road, Kokapet SEZ, Outer Ring Road Junction, Hyderabad, Telangana 500075
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>

        {/* Right Column: Key Landmarks & Distances */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Proximity & Connectivity
          </Typography>

          <Card sx={{ borderRadius: 3.5, overflow: 'hidden' }}>
            <List disablePadding>
              {nearbyPlaces.map((place, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    py: 2,
                    px: 2.5,
                    borderBottom:
                      idx < nearbyPlaces.length - 1
                        ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`
                        : 'none',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 44 }}>
                    {getCategoryIcon(place.category)}
                  </ListItemIcon>
                  <ListItemText
                    primary={place.name}
                    primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }}
                    secondary={place.category}
                    secondaryTypographyProps={{ fontSize: '0.78rem' }}
                  />
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#D4A017' }}>
                      {place.distance}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                      {place.time} drive
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Card>

          <Card sx={{ p: 2.5, borderRadius: 3.5, bgcolor: isDark ? 'rgba(212,160,23,0.08)' : '#FEF8E7', border: '1.5px solid rgba(212,160,23,0.3)' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#D4A017', mb: 0.5 }}>
              AIRPORT CONNECTIVITY
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Direct access to Rajiv Gandhi International Airport via the 8-lane Outer Ring Road expressway in under 30 minutes.
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationScreen;
