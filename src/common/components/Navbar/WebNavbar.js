import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LayersIcon from '@mui/icons-material/Layers';
import PoolIcon from '@mui/icons-material/Pool';
import CollectionsIcon from '@mui/icons-material/Collections';
import MapIcon from '@mui/icons-material/Map';
import TimelineIcon from '@mui/icons-material/Timeline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { SVCSLogo } from '../SVCSLogo/SVCSLogo';
import { useApp } from '../../../context/AppContext';
import { webNavbarStyles } from './WebNavbar.styles';

export const WebNavbar = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const {
    currentScreen,
    navigate,
    selectedCity,
    setIsCityModalOpen,
    themeMode,
    toggleThemeMode,
    favorites,
    bookings,
    setIsMyBookingsOpen,
  } = useApp();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navLinks = [
    { label: 'Home', screen: 'home', icon: <HomeIcon fontSize="small" /> },
    { label: 'Projects', screen: 'projectsList', icon: <ApartmentIcon fontSize="small" /> },
    { label: 'Floor Plans', screen: 'floorPlans', icon: <LayersIcon fontSize="small" /> },
    { label: 'Amenities', screen: 'amenities', icon: <PoolIcon fontSize="small" /> },
    { label: 'Gallery', screen: 'gallery', icon: <CollectionsIcon fontSize="small" /> },
    { label: 'Location', screen: 'location', icon: <MapIcon fontSize="small" /> },
    { label: 'Progress', screen: 'progress', icon: <TimelineIcon fontSize="small" /> },
    { label: 'About Us', screen: 'aboutUs', icon: <InfoOutlinedIcon fontSize="small" /> },
    { label: 'Contact', screen: 'contact', icon: <PhoneInTalkIcon fontSize="small" /> },
  ];

  const handleNavClick = (screen) => {
    navigate(screen);
    setMobileDrawerOpen(false);
  };

  return (
    <AppBar position="sticky" sx={webNavbarStyles.appBar(isDark)}>
      <Toolbar sx={webNavbarStyles.toolbar}>
        {/* Left: Brand Logo & Title */}
        <Box
          sx={webNavbarStyles.brandContainer}
          onClick={() => navigate('home')}
        >
          <SVCSLogo size={36} variant="minimal" isDark={isDark} />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                color: isDark ? '#FFFFFF' : '#0B192C',
              }}
            >
              SVCS <Box component="span" sx={{ color: '#D4A017' }}>BUILDERS</Box>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: '#D4A017',
                fontWeight: 700,
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              PREMIUM LIVING REDEFINED
            </Typography>
          </Box>
        </Box>

        {/* Center: Desktop Navigation Links */}
        <Box sx={webNavbarStyles.navLinksContainer}>
          {navLinks.map((link) => {
            const isActive = currentScreen === link.screen;
            return (
              <Button
                key={link.screen}
                onClick={() => handleNavClick(link.screen)}
                sx={webNavbarStyles.navLinkBtn(isActive, isDark)}
              >
                {link.label}
              </Button>
            );
          })}
        </Box>

        {/* Right: City Selector, Theme Toggle, Bookings, CTA & Mobile Hamburger */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 1.5 } }}>
          {/* City Selector */}
          <Box
            sx={webNavbarStyles.cityBtn(isDark)}
            onClick={() => setIsCityModalOpen(true)}
          >
            <Typography variant="body2" sx={{ fontWeight: 800, fontSize: '0.82rem' }}>
              {selectedCity}
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: '#D4A017', fontSize: 18 }} />
          </Box>

          {/* Favorites Shortcut (Desktop) */}
          <IconButton
            size="small"
            onClick={() => navigate('favorites')}
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              color: favorites.length > 0 ? '#EF4444' : 'text.secondary',
              p: 1,
            }}
          >
            <Badge badgeContent={favorites.length} color="error">
              <FavoriteIcon fontSize="small" />
            </Badge>
          </IconButton>

          {/* My Bookings Button (Desktop) */}
          <Button
            variant="outlined"
            size="small"
            onClick={() => setIsMyBookingsOpen(true)}
            startIcon={<EventAvailableIcon sx={{ color: '#D4A017' }} />}
            sx={{
              display: { xs: 'none', lg: 'inline-flex' },
              borderRadius: 2.5,
              borderColor: isDark ? 'rgba(255,255,255,0.15)' : '#E2E8F0',
              color: 'text.primary',
              fontWeight: 700,
              fontSize: '0.8rem',
              py: 0.7,
              px: 1.5,
            }}
          >
            My Visits ({bookings.length})
          </Button>

          {/* Theme Mode Toggle */}
          <IconButton
            size="small"
            onClick={toggleThemeMode}
            sx={{
              color: '#D4A017',
              backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : '#F1F5F9',
              p: 0.9,
              borderRadius: 2,
            }}
          >
            {themeMode === 'dark' ? (
              <LightModeOutlinedIcon fontSize="small" />
            ) : (
              <DarkModeOutlinedIcon fontSize="small" />
            )}
          </IconButton>

          {/* Primary CTA: Book Site Visit */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('bookVisit')}
            sx={{
              ...webNavbarStyles.ctaButton,
              display: { xs: 'none', sm: 'inline-flex' },
            }}
          >
            Book Site Visit
          </Button>

          {/* Mobile Hamburger Menu Button */}
          <IconButton
            edge="end"
            onClick={() => setMobileDrawerOpen(true)}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              color: 'text.primary',
              p: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Responsive Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 290,
            backgroundColor: isDark ? '#0A1524' : '#FFFFFF',
            backgroundImage: 'none',
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 2, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SVCSLogo size={28} variant="minimal" isDark={isDark} />
            <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
              SVCS BUILDERS
            </Typography>
          </Box>
          <IconButton size="small" onClick={() => setMobileDrawerOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <List sx={{ pt: 2 }}>
          {navLinks.map((link) => {
            const isActive = currentScreen === link.screen;
            return (
              <ListItemButton
                key={link.screen}
                onClick={() => handleNavClick(link.screen)}
                sx={{
                  borderRadius: 2,
                  mb: 0.5,
                  backgroundColor: isActive
                    ? isDark
                      ? 'rgba(212, 160, 23, 0.15)'
                      : '#FEF8E7'
                    : 'transparent',
                  color: isActive ? '#D4A017' : 'text.primary',
                }}
              >
                <ListItemIcon sx={{ minWidth: 38, color: isActive ? '#D4A017' : 'text.secondary' }}>
                  {link.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontWeight: isActive ? 800 : 600, fontSize: '0.92rem' }}
                />
              </ListItemButton>
            );
          })}

          <ListItemButton
            onClick={() => {
              setMobileDrawerOpen(false);
              navigate('settings');
            }}
            sx={{ borderRadius: 2, mt: 1 }}
          >
            <ListItemIcon sx={{ minWidth: 38, color: 'text.secondary' }}>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Settings & Profile" primaryTypographyProps={{ fontWeight: 600, fontSize: '0.92rem' }} />
          </ListItemButton>
        </List>

        <Box sx={{ mt: 'auto', pt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              setMobileDrawerOpen(false);
              navigate('bookVisit');
            }}
            sx={{ py: 1.4, fontWeight: 800, borderRadius: 2.5 }}
          >
            Book Site Visit
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default WebNavbar;
