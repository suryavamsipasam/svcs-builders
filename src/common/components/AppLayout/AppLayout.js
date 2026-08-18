import React from 'react';
import { Box, useTheme } from '@mui/material';
import { WebNavbar } from '../Navbar/WebNavbar';
import { WebFooter } from '../Footer/WebFooter';
import { useApp } from '../../../context/AppContext';
import { appLayoutStyles } from './AppLayout.styles';

export const AppLayout = ({ children }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { currentScreen } = useApp();

  const isSplash = currentScreen === 'splash';

  if (isSplash) {
    return (
      <Box sx={appLayoutStyles.rootWrapper(isDark)}>
        {children}
      </Box>
    );
  }

  return (
    <Box sx={appLayoutStyles.rootWrapper(isDark)}>
      {/* Universal Desktop & Tablet Top Web Navigation Bar */}
      <WebNavbar />

      {/* Main Responsive Web Container */}
      <Box sx={appLayoutStyles.container}>
        <Box component="main" sx={appLayoutStyles.contentArea}>
          {children}
        </Box>
      </Box>

      {/* Universal Web Footer */}
      <WebFooter />
    </Box>
  );
};

export default AppLayout;
