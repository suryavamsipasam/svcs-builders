import React from 'react';
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import CollectionsIcon from '@mui/icons-material/Collections';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { useApp } from '../../../context/AppContext';
import { bottomNavStyles } from './BottomNav.styles';

export const BottomNav = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { currentScreen, switchTab } = useApp();

  const getActiveTab = () => {
    switch (currentScreen) {
      case 'home':
        return 'home';
      case 'projectsList':
      case 'projectDetails':
        return 'projects';
      case 'gallery':
        return 'gallery';
      case 'bookVisit':
      case 'searchFilters':
        return 'enquiry';
      case 'contact':
      case 'aboutUs':
      case 'settings':
        return 'contact';
      default:
        return 'home';
    }
  };

  const handleTabChange = (event, newValue) => {
    switch (newValue) {
      case 'home':
        switchTab('home');
        break;
      case 'projects':
        switchTab('projectsList');
        break;
      case 'gallery':
        switchTab('gallery');
        break;
      case 'enquiry':
        switchTab('bookVisit');
        break;
      case 'contact':
        switchTab('contact');
        break;
      default:
        switchTab('home');
    }
  };

  const hideOnScreens = ['splash', 'thankYou'];
  if (hideOnScreens.includes(currentScreen)) {
    return null;
  }

  const activeTab = getActiveTab();

  return (
    <Paper elevation={8} sx={bottomNavStyles.paper(isDark)}>
      <BottomNavigation
        value={activeTab}
        onChange={handleTabChange}
        showLabels
        sx={bottomNavStyles.nav(isDark)}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={activeTab === 'home' ? <HomeIcon sx={{ fontSize: 24, color: '#D4A017' }} /> : <HomeOutlinedIcon sx={{ fontSize: 24 }} />}
        />
        <BottomNavigationAction
          label="Projects"
          value="projects"
          icon={activeTab === 'projects' ? <ApartmentIcon sx={{ fontSize: 24, color: '#D4A017' }} /> : <ApartmentOutlinedIcon sx={{ fontSize: 24 }} />}
        />
        <BottomNavigationAction
          label="Gallery"
          value="gallery"
          icon={activeTab === 'gallery' ? <CollectionsIcon sx={{ fontSize: 24, color: '#D4A017' }} /> : <CollectionsOutlinedIcon sx={{ fontSize: 24 }} />}
        />
        <BottomNavigationAction
          label="Enquiry"
          value="enquiry"
          icon={activeTab === 'enquiry' ? <ForumIcon sx={{ fontSize: 24, color: '#D4A017' }} /> : <ForumOutlinedIcon sx={{ fontSize: 24 }} />}
        />
        <BottomNavigationAction
          label="Contact"
          value="contact"
          icon={activeTab === 'contact' ? <PhoneInTalkIcon sx={{ fontSize: 24, color: '#D4A017' }} /> : <PhoneInTalkOutlinedIcon sx={{ fontSize: 24 }} />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
