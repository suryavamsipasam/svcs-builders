import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Badge,
  useTheme,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import { useApp } from '../../../context/AppContext';
import { headerBarStyles } from './HeaderBar.styles';

export const HeaderBar = ({
  title,
  subtitle,
  showBack = false,
  showCity = false,
  showNotifications = false,
  showFavorite = false,
  showShare = false,
  showSearch = false,
  showFilter = false,
  showThemeToggle = false,
  onBackClick,
  onFilterClick,
  onSearchClick,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const {
    selectedCity,
    setIsCityModalOpen,
    goBack,
    navigate,
    themeMode,
    toggleThemeMode,
    isFavorite,
    toggleFavorite,
    selectedProjectId,
    showToast,
  } = useApp();

  const isFav = isFavorite(selectedProjectId);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title || 'SVCS Builders',
        text: 'Explore premium luxury residential projects by SVCS Builders.',
        url: window.location.href,
      });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Project link copied to clipboard!', 'success');
    }
  };

  return (
    <AppBar position="sticky" sx={headerBarStyles.appBar(isDark)}>
      <Toolbar sx={headerBarStyles.toolbar}>
        {/* Left Section */}
        <Box sx={headerBarStyles.leftSection}>
          {showBack && (
            <IconButton
              size="small"
              edge="start"
              onClick={onBackClick || goBack}
              sx={headerBarStyles.iconBtn(isDark)}
              aria-label="back"
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
            </IconButton>
          )}

          {showCity ? (
            <Box
              sx={headerBarStyles.citySelectorBtn(isDark)}
              onClick={() => setIsCityModalOpen(true)}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  color: 'text.primary',
                  letterSpacing: '-0.01em',
                }}
              >
                {selectedCity}
              </Typography>
              <KeyboardArrowDownIcon sx={{ color: '#D4A017', fontSize: 20 }} />
            </Box>
          ) : (
            title && (
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    color: 'text.primary',
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </Typography>
                {subtitle && (
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontWeight: 500, fontSize: '0.72rem' }}
                  >
                    {subtitle}
                  </Typography>
                )}
              </Box>
            )
          )}
        </Box>

        {/* Right Section Icons */}
        <Box sx={headerBarStyles.rightSection}>
          {showSearch && (
            <IconButton
              size="small"
              onClick={onSearchClick || (() => navigate('searchFilters'))}
              sx={headerBarStyles.iconBtn(isDark)}
            >
              <SearchIcon sx={{ fontSize: 20 }} />
            </IconButton>
          )}

          {showFilter && (
            <IconButton
              size="small"
              onClick={onFilterClick || (() => navigate('searchFilters'))}
              sx={headerBarStyles.iconBtn(isDark)}
            >
              <TuneIcon sx={{ fontSize: 20 }} />
            </IconButton>
          )}

          {showNotifications && (
            <IconButton
              size="small"
              onClick={() => showToast('You have 2 new updates on Green Valley Residency!', 'info')}
              sx={headerBarStyles.iconBtn(isDark)}
            >
              <Badge
                badgeContent={2}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#D4A017',
                    color: '#000',
                    fontWeight: 700,
                  },
                }}
              >
                <NotificationsNoneIcon sx={{ fontSize: 20 }} />
              </Badge>
            </IconButton>
          )}

          {showFavorite && (
            <IconButton
              size="small"
              onClick={() => toggleFavorite(selectedProjectId)}
              sx={{
                color: isFav ? '#EF4444' : 'text.primary',
                bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                p: 0.9,
              }}
            >
              {isFav ? <FavoriteIcon sx={{ fontSize: 20 }} /> : <FavoriteBorderIcon sx={{ fontSize: 20 }} />}
            </IconButton>
          )}

          {showShare && (
            <IconButton
              size="small"
              onClick={handleShare}
              sx={headerBarStyles.iconBtn(isDark)}
            >
              <ShareOutlinedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          )}

          {showThemeToggle && (
            <IconButton
              size="small"
              onClick={toggleThemeMode}
              sx={{
                color: '#D4A017',
                bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                p: 0.9,
              }}
            >
              {themeMode === 'dark' ? <LightModeOutlinedIcon sx={{ fontSize: 20 }} /> : <DarkModeOutlinedIcon sx={{ fontSize: 20 }} />}
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
