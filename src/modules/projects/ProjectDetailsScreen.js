import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Card,
  CardMedia,
  Collapse,
  IconButton,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PoolIcon from '@mui/icons-material/Pool';
import LayersIcon from '@mui/icons-material/Layers';
import CollectionsIcon from '@mui/icons-material/Collections';
import MapIcon from '@mui/icons-material/Map';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { LightboxModal } from '../../common/components/Modals/LightboxModal';
import { useApp } from '../../context/AppContext';
import { projectsStyles } from './Projects.styles';

export const ProjectDetailsScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const {
    selectedProject,
    navigate,
    toggleFavorite,
    isFavorite,
    showToast,
  } = useApp();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);
  const [selectedFloorIndex, setSelectedFloorIndex] = useState(0);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryPhone, setEnquiryPhone] = useState('');

  const isFav = isFavorite(selectedProject.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedProject.title,
        text: `Explore ${selectedProject.title} by SVCS Builders`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Project link copied to clipboard!', 'success');
    }
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!enquiryName || !enquiryPhone) {
      showToast('Please enter your name and phone number', 'error');
      return;
    }
    setEnquiryModalOpen(false);
    showToast(`Thank you ${enquiryName}! Our relationship manager will call you shortly with price sheets.`, 'success');
    setEnquiryName('');
    setEnquiryPhone('');
  };

  const subNavItems = [
    { label: 'Overview', icon: <ApartmentIcon fontSize="small" />, action: () => {} },
    { label: 'Amenities', icon: <PoolIcon fontSize="small" />, action: () => navigate('amenities') },
    { label: 'Floor Plans', icon: <LayersIcon fontSize="small" />, action: () => navigate('floorPlans') },
    { label: 'Gallery', icon: <CollectionsIcon fontSize="small" />, action: () => navigate('gallery') },
    { label: 'Location', icon: <MapIcon fontSize="small" />, action: () => navigate('location') },
  ];

  const floorsMatrix = selectedProject.floorsMatrix || [];
  const currentFloor = floorsMatrix[selectedFloorIndex] || floorsMatrix[0];

  return (
    <Box sx={{ pb: 10 }}>
      {/* Top Header Bar matching Screen 5 */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => navigate('projectsList')} sx={{ p: 0.5 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 900 }}>
            {selectedProject.title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            onClick={() => toggleFavorite(selectedProject.id)}
            sx={{ color: isFav ? '#EF4444' : 'text.primary' }}
          >
            {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton onClick={handleShare} sx={{ color: 'text.primary' }}>
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Hero Media Banner with photo counter */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 260, sm: 380, md: 460 },
          borderRadius: 4,
          overflow: 'hidden',
          cursor: 'pointer',
          mb: 3,
        }}
        onClick={() => setIsLightboxOpen(true)}
      >
        <CardMedia
          component="img"
          image={selectedProject.images[activeImageIndex] || selectedProject.heroImage}
          alt={selectedProject.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Chip
          icon={<PhotoCameraIcon sx={{ fontSize: 14, color: '#FFF !important' }} />}
          label={`${activeImageIndex + 1}/${selectedProject.images.length || 6}`}
          size="small"
          sx={{
            position: 'absolute',
            bottom: 14,
            right: 14,
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: '#FFFFFF',
            fontWeight: 800,
            backdropFilter: 'blur(4px)',
          }}
        />
      </Box>

      {/* Title, Location & 360 Icon */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 1.5 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 900 }}>
            {selectedProject.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
            <LocationOnIcon sx={{ color: '#D4A017', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
              {selectedProject.location}
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={() => navigate('gallery')}
          sx={{
            backgroundColor: isDark ? 'rgba(212,160,23,0.15)' : '#FEF8E7',
            color: '#D4A017',
            p: 1.2,
          }}
        >
          <ThreeSixtyIcon />
        </IconButton>
      </Box>

      {/* BHK Type Pills & RERA Green Badge */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2, flexWrap: 'wrap', mb: 3 }}>
        {selectedProject.bhkTypes.map((bhk) => (
          <Chip
            key={bhk}
            label={bhk}
            size="small"
            sx={{
              fontWeight: 800,
              backgroundColor: isDark ? 'rgba(212,160,23,0.12)' : '#FEF8E7',
              color: '#D4A017',
              border: '1px solid rgba(212,160,23,0.3)',
              borderRadius: 2,
              px: 0.5,
            }}
          />
        ))}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: { xs: 0, sm: 1 } }}>
          <VerifiedUserIcon sx={{ color: '#10B981', fontSize: 18 }} />
          <Typography variant="caption" sx={{ fontWeight: 800, color: '#10B981' }}>
            RERA No: {selectedProject.reraId}
          </Typography>
        </Box>
      </Box>

      {/* Sub-Navigation Strip (5 Icons) matching Screen 5 */}
      <Card sx={{ p: 1.5, borderRadius: 3.5, mb: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center' }}>
          {subNavItems.map((item, idx) => (
            <Box
              key={idx}
              onClick={item.action}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                p: 1,
                borderRadius: 2,
                '&:hover': { bgcolor: isDark ? 'rgba(255,255,255,0.05)' : '#F1F5F9' },
              }}
            >
              <Box sx={{ color: '#D4A017', mb: 0.5 }}>{item.icon}</Box>
              <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.75rem' }}>
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>

      {/* Interactive Floor-by-Floor Unit Matrix / Number of Plots in Each Floor */}
      {floorsMatrix.length > 0 && (
        <Card sx={{ p: 3, borderRadius: 4, mb: 3, border: '1.5px solid rgba(212,160,23,0.25)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 900 }}>
                Floor-by-Floor Unit & Plot Availability
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Select floor level to inspect unit numbers, facing, carpet area, and availability
              </Typography>
            </Box>
            <Chip
              label={`${currentFloor?.totalUnits || 4} Units on this Floor`}
              size="small"
              sx={{ backgroundColor: '#D4A017', color: '#0B192C', fontWeight: 800 }}
            />
          </Box>

          {/* Floor Tabs */}
          <Tabs
            value={selectedFloorIndex}
            onChange={(e, val) => setSelectedFloorIndex(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 2.5 }}
          >
            {floorsMatrix.map((f, idx) => (
              <Tab key={idx} label={f.floorName} sx={{ fontWeight: 800, textTransform: 'none' }} />
            ))}
          </Tabs>

          {/* Unit Cards on the Selected Floor */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
            {currentFloor?.units.map((unit) => (
              <Card
                key={unit.unitNo}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  bgcolor: isDark ? '#0A1524' : '#F8FAFC',
                  border: unit.status === 'Available' ? '1.5px solid #10B981' : '1px solid rgba(0,0,0,0.1)',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 900, color: '#D4A017' }}>
                    Flat #{unit.unitNo}
                  </Typography>
                  <Chip
                    label={unit.status}
                    size="small"
                    sx={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      backgroundColor: unit.status === 'Available' ? '#10B981' : '#64748B',
                      color: '#FFF',
                    }}
                  />
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                  {unit.bhk} • {unit.facing}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
                  Super Built-up: {unit.sqft} sq.ft
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                  Balcony View: {unit.view}
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 900, color: '#D4A017', mt: 1 }}>
                  {unit.price}
                </Typography>
              </Card>
            ))}
          </Box>
        </Card>
      )}

      {/* About Project Section matching Screen 5 */}
      <Card sx={{ p: 3, borderRadius: 4, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
          About Project
        </Typography>
        <Collapse in={isReadMoreExpanded} collapsedSize={80}>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {selectedProject.about}
          </Typography>
        </Collapse>
        <Button
          onClick={() => setIsReadMoreExpanded(!isReadMoreExpanded)}
          sx={{ p: 0, mt: 1, color: '#D4A017', fontWeight: 800, textTransform: 'none' }}
        >
          {isReadMoreExpanded ? 'Read Less ▲' : 'Read More ▼'}
        </Button>
      </Card>

      {/* Dual Sticky Action Buttons matching Screen 5 */}
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
          gap: 2,
          zIndex: 1150,
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, width: '100%', maxWidth: '600px' }}>
          {/* Left: Book Site Visit (Dark Navy) */}
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate('bookVisit')}
            sx={{
              py: 1.5,
              borderRadius: 3,
              fontWeight: 900,
              backgroundColor: '#0B192C',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.2)',
              '&:hover': { backgroundColor: '#132A4A' },
            }}
          >
            Book Site Visit
          </Button>

          {/* Right: Enquire Now (Golden) */}
          <Button
            fullWidth
            variant="contained"
            onClick={() => setEnquiryModalOpen(true)}
            sx={{
              py: 1.5,
              borderRadius: 3,
              fontWeight: 900,
              backgroundColor: '#D4A017',
              color: '#0B192C',
              '&:hover': { backgroundColor: '#E5A93C' },
            }}
          >
            Enquire Now
          </Button>
        </Box>
      </Box>

      {/* Quick Enquiry Modal */}
      <Dialog
        open={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{ sx: { borderRadius: 4, p: 2 } }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 900 }}>
            Enquire about {selectedProject.title}
          </Typography>
          <IconButton size="small" onClick={() => setEnquiryModalOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleEnquirySubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Your Full Name"
              placeholder="e.g. Rahul Sharma"
              value={enquiryName}
              onChange={(e) => setEnquiryName(e.target.value)}
              fullWidth
              size="small"
              required
            />
            <TextField
              label="Mobile Number"
              placeholder="10-digit phone number"
              value={enquiryPhone}
              onChange={(e) => setEnquiryPhone(e.target.value)}
              fullWidth
              size="small"
              required
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#D4A017',
                color: '#0B192C',
                py: 1.4,
                fontWeight: 900,
                borderRadius: 2.5,
                '&:hover': { backgroundColor: '#E5A93C' },
              }}
            >
              Submit Enquiry
            </Button>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Lightbox */}
      <LightboxModal
        open={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={selectedProject.images}
        currentIndex={activeImageIndex}
        onIndexChange={setActiveImageIndex}
        title={selectedProject.title}
      />
    </Box>
  );
};

export default ProjectDetailsScreen;
