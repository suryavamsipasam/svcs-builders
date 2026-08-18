import React from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useApp } from '../../context/AppContext';

export const ContactScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { companyInfo, navigate } = useApp();

  const handleCall = () => {
    window.location.href = `tel:${companyInfo.phone.replace(/\s+/g, '')}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919876543210?text=Hi%20SVCS%20Builders,%20I%20am%20interested%20in%20your%20luxury%20projects.`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${companyInfo.email}?subject=Property%20Enquiry`;
  };

  const handleGetDirections = () => {
    const query = encodeURIComponent(`${companyInfo.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const contactRows = [
    {
      title: 'Call Us',
      detail: companyInfo.phone,
      icon: <PhoneIcon sx={{ color: '#D4A017', fontSize: 24 }} />,
      action: handleCall,
    },
    {
      title: 'WhatsApp',
      detail: companyInfo.whatsapp,
      icon: <WhatsAppIcon sx={{ color: '#10B981', fontSize: 24 }} />,
      action: handleWhatsApp,
    },
    {
      title: 'Email',
      detail: companyInfo.email,
      icon: <EmailIcon sx={{ color: '#3B82F6', fontSize: 24 }} />,
      action: handleEmail,
    },
    {
      title: 'Address',
      detail: companyInfo.address,
      icon: <LocationOnIcon sx={{ color: '#D4A017', fontSize: 24 }} />,
      action: handleGetDirections,
    },
    {
      title: 'Working Hours',
      detail: `${companyInfo.workingHoursWeekday}\n${companyInfo.workingHoursWeekend}`,
      icon: <AccessTimeIcon sx={{ color: '#D4A017', fontSize: 24 }} />,
      action: null,
    },
  ];

  return (
    <Box sx={{ pb: 10 }}>
      {/* Header matching Screen 11 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <IconButton onClick={() => navigate('home')} sx={{ p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>

      <Box sx={{ maxWidth: '600px', mx: 'auto', width: '100%' }}>
        {/* Title matching Screen 11 */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are here to help you
          </Typography>
        </Box>

        {/* Contact Information List matching Screen 11 */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
          {contactRows.map((row, idx) => (
            <Card
              key={idx}
              onClick={row.action || undefined}
              sx={{
                p: 2.5,
                borderRadius: 3.5,
                display: 'flex',
                alignItems: 'flex-start',
                gap: 2,
                cursor: row.action ? 'pointer' : 'default',
                backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#E2E8F0'}`,
                transition: row.action ? 'all 0.2s' : 'none',
                '&:hover': row.action
                  ? {
                      borderColor: '#D4A017',
                      transform: 'translateY(-2px)',
                      boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.05)',
                    }
                  : {},
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2.5,
                  backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : '#F8FAFC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {row.icon}
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                  {row.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    whiteSpace: 'pre-line',
                    mt: 0.3,
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {row.detail}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Sticky Bottom CTA: Get Directions matching Screen 11 */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
          backgroundColor: isDark ? 'rgba(11,25,44,0.95)' : 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(212,160,23,0.3)',
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1150,
        }}
      >
        <Button
          variant="contained"
          onClick={handleGetDirections}
          startIcon={<NavigationIcon />}
          sx={{
            maxWidth: '500px',
            width: '100%',
            py: 1.6,
            borderRadius: 3,
            fontWeight: 900,
            backgroundColor: '#0B192C',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#132A4A' },
          }}
        >
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default ContactScreen;
