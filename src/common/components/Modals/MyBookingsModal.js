import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Card,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useApp } from '../../../context/AppContext';

export const MyBookingsModal = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { isMyBookingsOpen, setIsMyBookingsOpen, bookings, cancelBooking, navigate } = useApp();

  return (
    <Dialog
      open={isMyBookingsOpen}
      onClose={() => setIsMyBookingsOpen(false)}
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
            My Site Visits
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {bookings.length} upcoming scheduled appointments
          </Typography>
        </Box>
        <IconButton size="small" onClick={() => setIsMyBookingsOpen(false)}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 1, pb: 2 }}>
        {bookings.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 5 }}>
            <EventAvailableIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 1, opacity: 0.5 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              No Scheduled Visits
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              You haven't booked any property site visits yet.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setIsMyBookingsOpen(false);
                navigate('bookVisit');
              }}
              sx={{ borderRadius: 2.5, fontWeight: 700 }}
            >
              Book a Visit Now
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {bookings.map((booking) => (
              <Card
                key={booking.id}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.3)' : '#F5E3B8'}`,
                  backgroundColor: isDark ? 'rgba(212,160,23,0.05)' : '#FEFDF8',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                  <Chip
                    label={`ID: #${booking.id}`}
                    size="small"
                    sx={{
                      fontWeight: 800,
                      fontSize: '0.68rem',
                      backgroundColor: isDark ? '#0B192C' : '#FEF8E7',
                      color: '#D4A017',
                    }}
                  />
                  <Chip
                    label="Confirmed"
                    size="small"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.68rem',
                      backgroundColor: '#10B981',
                      color: '#FFFFFF',
                      height: 20,
                    }}
                  />
                </Box>

                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  {booking.projectTitle}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.3, mb: 1 }}>
                  <LocationOnIcon sx={{ color: '#D4A017', fontSize: 16 }} />
                  <Typography variant="caption" color="text.secondary">
                    {booking.projectLocation}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, py: 1, borderTop: '1px dashed rgba(0,0,0,0.1)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <EventAvailableIcon sx={{ color: '#3B82F6', fontSize: 16 }} />
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>
                      {booking.date}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTimeIcon sx={{ color: '#F59E0B', fontSize: 16 }} />
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>
                      {booking.timeSlot}
                    </Typography>
                  </Box>
                </Box>

                {booking.needCab && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                    <DirectionsCarIcon sx={{ color: '#10B981', fontSize: 16 }} />
                    <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                      Free VIP Cab Pick-up Requested
                    </Typography>
                  </Box>
                )}

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                  <Button
                    size="small"
                    color="error"
                    startIcon={<DeleteOutlinedIcon />}
                    onClick={() => cancelBooking(booking.id)}
                    sx={{ fontSize: '0.75rem', fontWeight: 700 }}
                  >
                    Cancel Booking
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MyBookingsModal;
