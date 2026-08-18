import React from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SVCSLogo } from '../../common/components/SVCSLogo/SVCSLogo';
import { useApp } from '../../context/AppContext';
import { splashStyles } from './SplashScreen.styles';

export const SplashScreen = () => {
  const { navigate } = useApp();

  return (
    <Box sx={splashStyles.container}>
      {/* Background Architectural Accent with Overlay */}
      <Box sx={splashStyles.bgImage} />

      {/* Gold Ambient Glow Behind Logo */}
      <Box sx={splashStyles.ambientGlow} />

      {/* Top SVCS Branding Block */}
      <Fade in timeout={1000}>
        <Box sx={{ zIndex: 2, textAlign: 'center', mt: 3 }}>
          <SVCSLogo size={72} variant="full" isDark={true} />
        </Box>
      </Fade>

      {/* Center Luxury Building Illustration / Graphic */}
      <Fade in timeout={1400}>
        <Box sx={{ zIndex: 2, my: 'auto', textAlign: 'center', width: '100%', maxWidth: '320px' }}>
          <Box sx={splashStyles.centerCard}>
            <Typography
              variant="overline"
              sx={{
                color: '#D4A017',
                letterSpacing: '0.25em',
                fontWeight: 800,
                fontSize: '0.75rem',
                display: 'block',
              }}
            >
              PREMIUM LIVING REDEFINED
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: '#FFFFFF',
                mt: 0.5,
                fontSize: '1.25rem',
              }}
            >
              Welcome to SVCS
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.75)',
                mt: 0.8,
                fontSize: '0.825rem',
                lineHeight: 1.5,
              }}
            >
              Discover high-rise luxury apartments, gated villas, and community living crafted with excellence.
            </Typography>
          </Box>
        </Box>
      </Fade>

      {/* Bottom CTA Button */}
      <Fade in timeout={1800}>
        <Box sx={{ width: '100%', zIndex: 2, mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={() => navigate('home')}
            endIcon={<ArrowForwardIcon />}
            sx={splashStyles.ctaButton}
          >
            Explore Projects
          </Button>

          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)',
              mt: 2,
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
            }}
          >
            RERA APPROVED • HYDERABAD • BANGALORE
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};

export default SplashScreen;
