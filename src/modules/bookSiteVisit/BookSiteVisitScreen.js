import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Switch,
  Card,
  InputAdornment,
  useTheme,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useApp } from '../../context/AppContext';
import { bookSiteVisitStyles } from './BookSiteVisit.styles';

export const BookSiteVisitScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { allProjects, selectedProjectId, addBooking, navigate, showToast } = useApp();

  const [projectId, setProjectId] = useState(selectedProjectId || allProjects[0]?.id);
  const [date, setDate] = useState('2026-08-25');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 1:00 PM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [needCab, setNeedCab] = useState(false);
  const [pickupAddress, setPickupAddress] = useState('');

  const selectedProj = allProjects.find((p) => p.id === projectId) || allProjects[0];

  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim()) {
      showToast('Please enter your full name', 'error');
      return;
    }
    if (!phone.trim() || phone.length < 10) {
      showToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }

    const newBooking = {
      id: `SVCS-${Math.floor(10000 + Math.random() * 90000)}`,
      projectId: selectedProj.id,
      projectTitle: selectedProj.title,
      projectLocation: selectedProj.location,
      date,
      timeSlot,
      fullName,
      phone,
      email,
      needCab,
      pickupAddress,
      createdAt: new Date().toISOString(),
    };

    addBooking(newBooking);
    navigate('thankYou', { booking: newBooking });
  };

  return (
    <Box sx={{ pb: 6 }}>
      {/* Top Header */}
      <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('projectsList')}
          sx={{ fontWeight: 700, color: 'text.secondary', mb: 0.5, p: 0 }}
        >
          Back
        </Button>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Schedule a Free Site Visit
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Experience the model apartment, amenities, and location firsthand with our senior relationship manager.
        </Typography>
      </Box>

      {/* Form Card */}
      <Card
        component="form"
        onSubmit={handleSubmit}
        sx={bookSiteVisitStyles.formCard}
      >
        <Box sx={bookSiteVisitStyles.formGrid}>
          {/* Project Selector */}
          <TextField
            select
            label="Selected Project"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              startAdornment: <ApartmentIcon sx={{ color: '#D4A017', mr: 1, fontSize: 20 }} />,
            }}
          >
            {allProjects.map((proj) => (
              <MenuItem key={proj.id} value={proj.id}>
                {proj.title} ({proj.location})
              </MenuItem>
            ))}
          </TextField>

          {/* Date Picker */}
          <TextField
            label="Visit Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            size="small"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: <CalendarMonthIcon sx={{ color: '#D4A017', mr: 1, fontSize: 20 }} />,
            }}
          />

          {/* Time Slot Picker */}
          <TextField
            select
            label="Preferred Time Slot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              startAdornment: <AccessTimeIcon sx={{ color: '#D4A017', mr: 1, fontSize: 20 }} />,
            }}
          >
            {timeSlots.map((slot) => (
              <MenuItem key={slot} value={slot}>
                {slot}
              </MenuItem>
            ))}
          </TextField>

          {/* Full Name */}
          <TextField
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            fullWidth
            size="small"
            InputProps={{
              startAdornment: <PersonOutlinedIcon sx={{ color: '#D4A017', mr: 1, fontSize: 20 }} />,
            }}
          />

          {/* Phone Number */}
          <TextField
            label="Phone Number"
            placeholder="10-digit mobile number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#D4A017', fontSize: 20, mr: 0.5 }} />
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>+91</Typography>
                </InputAdornment>
              ),
            }}
          />

          {/* Email (Optional) */}
          <TextField
            label="Email Address (Optional)"
            placeholder="e.g. yourname@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              startAdornment: <EmailIcon sx={{ color: '#D4A017', mr: 1, fontSize: 20 }} />,
            }}
          />
        </Box>

        {/* Need Free VIP Cab Pick-up Toggle */}
        <Box sx={bookSiteVisitStyles.cabPickupCard(needCab, isDark)}>
          <FormControlLabel
            control={
              <Switch
                checked={needCab}
                onChange={(e) => setNeedCab(e.target.checked)}
                color="primary"
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <DirectionsCarIcon sx={{ color: needCab ? '#10B981' : 'text.secondary', fontSize: 24 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                    Complimentary VIP Cab Pick-up & Drop
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Chauffeur driven luxury cab will pick you up directly from your doorstep
                  </Typography>
                </Box>
              </Box>
            }
            sx={{ m: 0 }}
          />

          {needCab && (
            <TextField
              label="Pick-up Address / Landmark"
              placeholder="Enter complete residential address with landmark"
              multiline
              rows={2}
              value={pickupAddress}
              onChange={(e) => setPickupAddress(e.target.value)}
              fullWidth
              size="small"
              sx={{ mt: 2 }}
            />
          )}
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          sx={{
            py: 1.8,
            borderRadius: 3,
            fontWeight: 900,
            fontSize: '1rem',
          }}
        >
          Confirm Site Visit Appointment
        </Button>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            *No charges or booking fees. Free rescheduling available anytime.
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default BookSiteVisitScreen;
