import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useApp } from '../../../context/AppContext';

export const CitySelectorModal = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const {
    cities = ['Hyderabad', 'Bangalore', 'Chennai', 'Vizag', 'Vijayawada'],
    selectedCity,
    setSelectedCity,
    isCityModalOpen,
    setIsCityModalOpen,
    showToast,
  } = useApp();

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setIsCityModalOpen(false);
    showToast(`Location set to ${city}`, 'success');
  };

  const cityList = Array.isArray(cities) && cities.length > 0
    ? cities
    : ['Hyderabad', 'Bangalore', 'Chennai', 'Vizag', 'Vijayawada'];

  return (
    <Dialog
      open={isCityModalOpen}
      onClose={() => setIsCityModalOpen(false)}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: 4,
          backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
          backgroundImage: 'none',
          p: 1,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Select City
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Choose your preferred location for projects
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={() => setIsCityModalOpen(false)}
          sx={{ color: 'text.secondary' }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 1, pb: 2 }}>
        <List disablePadding>
          {cityList.map((city) => {
            const isSelected = selectedCity === city;
            return (
              <ListItemButton
                key={city}
                onClick={() => handleSelectCity(city)}
                sx={{
                  borderRadius: 2.5,
                  mb: 1,
                  py: 1.5,
                  border: isSelected
                    ? '1.5px solid #D4A017'
                    : `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                  backgroundColor: isSelected
                    ? isDark
                      ? 'rgba(212, 160, 23, 0.12)'
                      : '#FEF8E7'
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: isDark
                      ? 'rgba(255,255,255,0.05)'
                      : 'rgba(0,0,0,0.02)',
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 42 }}>
                  <LocationCityIcon sx={{ color: isSelected ? '#D4A017' : 'text.secondary' }} />
                </ListItemIcon>
                <ListItemText
                  primary={city}
                  primaryTypographyProps={{
                    fontWeight: isSelected ? 800 : 500,
                    color: isSelected ? '#D4A017' : 'text.primary',
                  }}
                  secondary={city === 'Hyderabad' ? 'Headquarters • 5 Projects' : 'Upcoming Developments'}
                />
                {isSelected && <CheckCircleIcon sx={{ color: '#D4A017', fontSize: 20 }} />}
              </ListItemButton>
            );
          })}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default CitySelectorModal;
