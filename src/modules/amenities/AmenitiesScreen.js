import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ParkIcon from '@mui/icons-material/Park';
import SecurityIcon from '@mui/icons-material/Security';
import BoltIcon from '@mui/icons-material/Bolt';
import ElevatorIcon from '@mui/icons-material/Elevator';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import VideocamIcon from '@mui/icons-material/Videocam';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CloseIcon from '@mui/icons-material/Close';
import { AmenityModal } from '../../common/components/Modals/AmenityModal';
import { useApp } from '../../context/AppContext';

export const AmenitiesScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { selectedProject, navigate, showToast } = useApp();

  const [selectedAmenity, setSelectedAmenity] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const amenities = selectedProject.amenities || [];

  const getAmenityIcon = (iconName) => {
    const iconStyle = { fontSize: 32, color: '#D4A017' };
    switch (iconName) {
      case 'Apartment':
        return <ApartmentIcon sx={iconStyle} />;
      case 'Pool':
        return <PoolIcon sx={iconStyle} />;
      case 'FitnessCenter':
        return <FitnessCenterIcon sx={iconStyle} />;
      case 'Park':
        return <ParkIcon sx={iconStyle} />;
      case 'Security':
        return <SecurityIcon sx={iconStyle} />;
      case 'Bolt':
        return <BoltIcon sx={iconStyle} />;
      case 'Elevator':
        return <ElevatorIcon sx={iconStyle} />;
      case 'DirectionsCar':
        return <DirectionsCarIcon sx={iconStyle} />;
      case 'Videocam':
        return <VideocamIcon sx={iconStyle} />;
      case 'WaterDrop':
        return <WaterDropIcon sx={iconStyle} />;
      case 'LocalFireDepartment':
        return <LocalFireDepartmentIcon sx={iconStyle} />;
      default:
        return <SportsEsportsIcon sx={iconStyle} />;
    }
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      showToast('Please enter your contact details', 'error');
      return;
    }
    setEnquiryOpen(false);
    showToast(`Thank you ${name}! Our representative will call you regarding amenities access.`, 'success');
  };

  return (
    <Box sx={{ pb: 10 }}>
      {/* Header matching Screen 6 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
        <IconButton onClick={() => navigate('projectDetails')} sx={{ p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Amenities
        </Typography>
      </Box>

      {/* 3-Column Responsive Grid matching Screen 6 */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(3, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' },
          gap: 2,
        }}
      >
        {amenities.map((item) => (
          <Card
            key={item.id}
            onClick={() => {
              setSelectedAmenity(item);
              setModalOpen(true);
            }}
            sx={{
              p: 2,
              borderRadius: 3.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: 120,
              cursor: 'pointer',
              backgroundColor: isDark ? '#0F1B2D' : '#FEF8E7',
              border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.2)' : '#F5E3B8'}`,
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 8px 24px rgba(212,160,23,0.2)',
                borderColor: '#D4A017',
              },
            }}
          >
            <Box sx={{ mb: 1 }}>{getAmenityIcon(item.icon)}</Box>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '0.72rem', sm: '0.8rem' },
                color: 'text.primary',
                lineHeight: 1.2,
              }}
            >
              {item.name}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* Sticky Bottom CTA: Enquire Now (Dark Navy) */}
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
          onClick={() => setEnquiryOpen(true)}
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
          Enquire Now
        </Button>
      </Box>

      {/* Amenity Detail Modal */}
      <AmenityModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        amenity={selectedAmenity}
      />

      {/* Enquiry Modal */}
      <Dialog
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: 4, p: 2 } }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 900 }}>Amenities Enquiry</Typography>
          <IconButton size="small" onClick={() => setEnquiryOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleEnquiry} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField label="Full Name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth size="small" />
            <TextField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required fullWidth size="small" />
            <Button type="submit" variant="contained" sx={{ bgcolor: '#D4A017', color: '#0B192C', py: 1.4, fontWeight: 900, borderRadius: 2.5 }}>
              Submit Enquiry
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AmenitiesScreen;
