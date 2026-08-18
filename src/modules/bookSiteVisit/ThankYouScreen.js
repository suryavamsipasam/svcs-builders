import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  Fade,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';
import { bookSiteVisitStyles } from './BookSiteVisit.styles';

export const ThankYouScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { screenParams, navigate, setIsMyBookingsOpen } = useApp();

  const booking = screenParams.booking || {
    id: 'SVCS-84920',
    projectTitle: 'Green Valley Residency',
    projectLocation: 'Kokapet, Hyderabad',
    date: '2026-08-25',
    timeSlot: '11:00 AM - 1:00 PM',
  };

  useEffect(() => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#D4A017', '#F9D77E', '#10B981', '#3B82F6'],
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <Box sx={bookSiteVisitStyles.thankYouContainer}>
      <Fade in timeout={800}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '520px', mx: 'auto' }}>
          {/* Animated Gold Glowing Checkmark */}
          <Box sx={bookSiteVisitStyles.goldCheckCircle(isDark)}>
            <CheckCircleIcon sx={{ fontSize: 64, color: '#D4A017' }} />
          </Box>

          <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, color: 'text.primary' }}>
            Site Visit Scheduled!
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 700, color: '#D4A017', mb: 1 }}>
            Confirmation ID: #{booking.id}
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
            Thank you! Your site visit request has been recorded. Our property consultant will contact you shortly to coordinate your visit.
          </Typography>

          {/* Booking Summary Card */}
          <Card
            sx={{
              width: '100%',
              p: 3,
              borderRadius: 3.5,
              textAlign: 'left',
              backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
              border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.3)' : '#F5E3B8'}`,
              mb: 4,
            }}
          >
            <Typography variant="overline" sx={{ color: '#D4A017', fontWeight: 800 }}>
              APPOINTMENT DETAILS
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              {booking.projectTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {booking.projectLocation}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1.5, borderTop: '1px dashed rgba(0,0,0,0.1)' }}>
              <Typography variant="body2" color="text.secondary">
                Scheduled Slot:
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 800 }}>
                {booking.date} • {booking.timeSlot}
              </Typography>
            </Box>
          </Card>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('home')}
              sx={{ py: 1.6, fontWeight: 800, borderRadius: 2.5 }}
            >
              Return to Home
            </Button>

            <Button
              fullWidth
              variant="outlined"
              size="large"
              onClick={() => setIsMyBookingsOpen(true)}
              sx={{
                py: 1.6,
                fontWeight: 700,
                borderRadius: 2.5,
                borderColor: isDark ? 'rgba(255,255,255,0.2)' : '#CBD5E1',
                color: 'text.primary',
              }}
            >
              View My Bookings
            </Button>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default ThankYouScreen;
