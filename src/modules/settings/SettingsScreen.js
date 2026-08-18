import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Rating,
  useTheme,
} from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useApp } from '../../context/AppContext';
import { settingsStyles } from './Settings.styles';

export const SettingsScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const {
    themeMode,
    toggleThemeMode,
    navigate,
    showToast,
    setIsMyBookingsOpen,
    bookings,
  } = useApp();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [legalModalTitle, setLegalModalTitle] = useState('');
  const [legalModalContent, setLegalModalContent] = useState('');
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [userRating, setUserRating] = useState(5);

  const handleOpenLegal = (title, content) => {
    setLegalModalTitle(title);
    setLegalModalContent(content);
    setIsLegalOpen(true);
  };

  const handleShareApp = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SVCS Builders Web App',
        text: 'Explore premium luxury residential homes by SVCS Builders!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('App link copied to clipboard!', 'success');
    }
  };

  return (
    <Box sx={settingsStyles.container}>
      {/* Page Header */}
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Account & App Settings
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manage your preferences, display modes, scheduled site visits, and legal policies
        </Typography>
      </Box>

      {/* User Profile Mini Banner */}
      <Card sx={settingsStyles.profileCard(isDark)}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={settingsStyles.avatarBox}>
            SK
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Surya Kumar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              +91 98765 43210 • Hyderabad, India
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* My Bookings Action Card */}
      <Card
        sx={settingsStyles.bookingsActionCard(isDark)}
        onClick={() => setIsMyBookingsOpen(true)}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <EventNoteIcon sx={{ color: '#D4A017', fontSize: 32 }} />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
              My Scheduled Site Visits ({bookings.length})
            </Typography>
            <Typography variant="body2" color="text.secondary">
              View confirmed appointments, driver details, and reschedule requests
            </Typography>
          </Box>
        </Box>
        <ArrowForwardIosIcon sx={{ fontSize: 16, color: '#D4A017' }} />
      </Card>

      {/* Settings List Card */}
      <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
        <List disablePadding>
          {/* Notifications Toggle */}
          <ListItem sx={settingsStyles.listItem(isDark)}>
            <ListItemIcon sx={{ minWidth: 44 }}>
              <NotificationsOutlinedIcon sx={{ color: '#D4A017' }} />
            </ListItemIcon>
            <ListItemText
              primary="Push Notifications"
              secondary="Get real-time updates on price drops & construction milestones"
              primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }}
              secondaryTypographyProps={{ fontSize: '0.8rem' }}
            />
            <ListItemSecondaryAction>
              <Switch
                checked={notificationsEnabled}
                onChange={(e) => {
                  setNotificationsEnabled(e.target.checked);
                  showToast(e.target.checked ? 'Notifications turned ON' : 'Notifications muted', 'info');
                }}
                color="primary"
              />
            </ListItemSecondaryAction>
          </ListItem>

          {/* Dark Mode Toggle */}
          <ListItem sx={settingsStyles.listItem(isDark)}>
            <ListItemIcon sx={{ minWidth: 44 }}>
              <DarkModeOutlinedIcon sx={{ color: '#D4A017' }} />
            </ListItemIcon>
            <ListItemText
              primary="Dark Theme Mode"
              secondary="Switch between sleek navy dark mode and bright daytime mode"
              primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }}
              secondaryTypographyProps={{ fontSize: '0.8rem' }}
            />
            <ListItemSecondaryAction>
              <Switch
                checked={themeMode === 'dark'}
                onChange={toggleThemeMode}
                color="primary"
              />
            </ListItemSecondaryAction>
          </ListItem>

          {/* Language */}
          <ListItem
            button
            onClick={() => showToast('Language set to: English (US/IN)', 'info')}
            sx={settingsStyles.listItem(isDark)}
          >
            <ListItemIcon sx={{ minWidth: 44 }}>
              <LanguageOutlinedIcon sx={{ color: '#D4A017' }} />
            </ListItemIcon>
            <ListItemText
              primary="Preferred Language"
              secondary="English (Default)"
              primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }}
              secondaryTypographyProps={{ fontSize: '0.8rem' }}
            />
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          </ListItem>

          {/* Privacy Policy */}
          <ListItem
            button
            onClick={() =>
              handleOpenLegal(
                'Privacy Policy',
                'SVCS Builders values your privacy. We strictly safeguard all customer enquiry data and will never share your personal phone number or email address with unauthorized third-party advertisers.'
              )
            }
            sx={settingsStyles.listItem(isDark)}
          >
            <ListItemIcon sx={{ minWidth: 44 }}>
              <SecurityOutlinedIcon sx={{ color: '#D4A017' }} />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }} />
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          </ListItem>

          {/* Terms & Conditions */}
          <ListItem
            button
            onClick={() =>
              handleOpenLegal(
                'Terms & Conditions',
                'All project specifications, dimensions, amenities, and floor plans displayed in the SVCS application are subject to approvals by relevant municipal and RERA authorities. Pricing is indicative and subject to change without prior notice.'
              )
            }
            sx={settingsStyles.listItem(isDark)}
          >
            <ListItemIcon sx={{ minWidth: 44 }}>
              <DescriptionOutlinedIcon sx={{ color: '#D4A017' }} />
            </ListItemIcon>
            <ListItemText primary="Terms & Conditions" primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }} />
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          </ListItem>

          {/* Rate Us */}
          <ListItem
            button
            onClick={() => setIsRatingOpen(true)}
            sx={settingsStyles.listItem(isDark)}
          >
            <ListItemIcon sx={{ minWidth: 44 }}>
              <StarBorderOutlinedIcon sx={{ color: '#D4A017' }} />
            </ListItemIcon>
            <ListItemText primary="Rate Your App Experience" primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }} />
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          </ListItem>

          {/* Share App */}
          <ListItem
            button
            onClick={handleShareApp}
            sx={settingsStyles.listItem(isDark)}
          >
            <ListItemIcon sx={{ minWidth: 44 }}>
              <ShareOutlinedIcon sx={{ color: '#D4A017' }} />
            </ListItemIcon>
            <ListItemText primary="Share Web App with Friends" primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }} />
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          </ListItem>

          {/* About App */}
          <ListItem
            button
            onClick={() => navigate('aboutUs')}
            sx={settingsStyles.listItem(isDark, true)}
          >
            <ListItemIcon sx={{ minWidth: 44 }}>
              <InfoOutlinedIcon sx={{ color: '#D4A017' }} />
            </ListItemIcon>
            <ListItemText
              primary="About SVCS Builders"
              secondary="Release Version 2.0.0 (Web Edition)"
              primaryTypographyProps={{ fontWeight: 700, fontSize: '0.95rem' }}
              secondaryTypographyProps={{ fontSize: '0.8rem' }}
            />
            <ArrowForwardIosIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          </ListItem>
        </List>
      </Card>

      {/* Logout */}
      <Button
        variant="outlined"
        color="error"
        size="large"
        startIcon={<LogoutIcon />}
        onClick={() => showToast('Session logged out', 'info')}
        sx={{ py: 1.5, borderRadius: 2.5, fontWeight: 800 }}
      >
        Logout
      </Button>

      {/* Legal Dialog */}
      <Dialog
        open={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3.5, p: 2 } }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ fontWeight: 900 }}>
            {legalModalTitle}
          </Typography>
          <IconButton size="small" onClick={() => setIsLegalOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {legalModalContent}
          </Typography>
        </DialogContent>
      </Dialog>

      {/* Rating Dialog */}
      <Dialog
        open={isRatingOpen}
        onClose={() => setIsRatingOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3.5, p: 3, textAlign: 'center' } }}
      >
        <DialogTitle sx={{ fontWeight: 900, fontSize: '1.4rem' }}>Rate SVCS Builders App</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2.5 }}>
          <Typography variant="body1" color="text.secondary">
            How was your experience finding your luxury home?
          </Typography>
          <Rating
            value={userRating}
            onChange={(e, val) => setUserRating(val)}
            size="large"
            sx={{ color: '#D4A017', fontSize: '2.5rem' }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={() => {
              setIsRatingOpen(false);
              showToast(`Thank you for giving us ${userRating} stars!`, 'success');
            }}
            sx={{ fontWeight: 900, borderRadius: 2.5, mt: 1, py: 1.4 }}
          >
            Submit Feedback
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SettingsScreen;
