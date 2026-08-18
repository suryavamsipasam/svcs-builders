import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import VerifiedIcon from '@mui/icons-material/Verified';
import { SVCSLogo } from '../SVCSLogo/SVCSLogo';
import { useApp } from '../../../context/AppContext';
import { webFooterStyles } from './WebFooter.styles';

export const WebFooter = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { navigate, companyInfo } = useApp();

  return (
    <Box component="footer" sx={webFooterStyles.footerWrapper(isDark)}>
      <Box sx={webFooterStyles.container}>
        <Box sx={webFooterStyles.gridContainer}>
          {/* Column 1: Company Profile & RERA */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <SVCSLogo size={36} variant="minimal" isDark={true} />
              <Typography variant="h6" sx={{ fontWeight: 900, color: '#FFF' }}>
                SVCS <Box component="span" sx={{ color: '#D4A017' }}>BUILDERS</Box>
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, mb: 2 }}>
              Pioneering high-rise luxury residential projects and gated communities across Hyderabad and Bangalore. Built with world-class engineering and on-time delivery.
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#10B981' }}>
              <VerifiedIcon sx={{ fontSize: 18 }} />
              <Typography variant="caption" sx={{ fontWeight: 700, color: '#10B981' }}>
                RERA APPROVED DEVELOPER • TS RERA REG.
              </Typography>
            </Box>
          </Box>

          {/* Column 2: Quick Links */}
          <Box>
            <Typography variant="subtitle2" sx={webFooterStyles.columnTitle}>
              Quick Links
            </Typography>
            <Typography onClick={() => navigate('home')} sx={webFooterStyles.linkText}>
              Home
            </Typography>
            <Typography onClick={() => navigate('projectsList')} sx={webFooterStyles.linkText}>
              All Projects
            </Typography>
            <Typography onClick={() => navigate('floorPlans')} sx={webFooterStyles.linkText}>
              Floor Plans & Layouts
            </Typography>
            <Typography onClick={() => navigate('amenities')} sx={webFooterStyles.linkText}>
              Luxury Amenities
            </Typography>
            <Typography onClick={() => navigate('gallery')} sx={webFooterStyles.linkText}>
              Gallery & 360° Tours
            </Typography>
            <Typography onClick={() => navigate('progress')} sx={webFooterStyles.linkText}>
              Construction Tracker
            </Typography>
          </Box>

          {/* Column 3: Corporate & Legal */}
          <Box>
            <Typography variant="subtitle2" sx={webFooterStyles.columnTitle}>
              Company
            </Typography>
            <Typography onClick={() => navigate('aboutUs')} sx={webFooterStyles.linkText}>
              About SVCS
            </Typography>
            <Typography onClick={() => navigate('contact')} sx={webFooterStyles.linkText}>
              Contact Us
            </Typography>
            <Typography onClick={() => navigate('compareFlats')} sx={webFooterStyles.linkText}>
              Compare Units
            </Typography>
            <Typography onClick={() => navigate('brochure')} sx={webFooterStyles.linkText}>
              Download Brochure
            </Typography>
            <Typography onClick={() => navigate('settings')} sx={webFooterStyles.linkText}>
              Privacy & Terms
            </Typography>
          </Box>

          {/* Column 4: Contact & Office */}
          <Box>
            <Typography variant="subtitle2" sx={webFooterStyles.columnTitle}>
              Head Office
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mb: 1.2 }}>
              <LocationOnIcon sx={{ color: '#D4A017', fontSize: 18, flexShrink: 0, mt: 0.3 }} />
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
                {companyInfo.address}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <PhoneIcon sx={{ color: '#D4A017', fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: '#FFFFFF', fontWeight: 700 }}>
                {companyInfo.phone}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <EmailIcon sx={{ color: '#D4A017', fontSize: 16 }} />
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.75)' }}>
                {companyInfo.email}
              </Typography>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton size="small" sx={{ color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.08)' }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.08)' }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.08)' }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.08)' }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: '#FFFFFF', bgcolor: 'rgba(255,255,255,0.08)' }}>
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar: Copyright */}
        <Box sx={webFooterStyles.bottomBar}>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © {new Date().getFullYear()} SVCS Builders Private Limited. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            Designed for Modern Luxury Living
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WebFooter;
