import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardMedia,
  IconButton,
  Chip,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import { LightboxModal } from '../../common/components/Modals/LightboxModal';
import { useApp } from '../../context/AppContext';
import { commonStyles } from '../../common/styles/common.styles';

export const GalleryScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { selectedProject, navigate } = useApp();

  const [activeTab, setActiveTab] = useState('Photos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [panoRotation, setPanoRotation] = useState(0);
  const [isDraggingPano, setIsDraggingPano] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  const galleryImages = selectedProject.images || [];

  const handleOpenLightbox = (index) => {
    setSelectedImgIndex(index);
    setLightboxOpen(true);
  };

  const handlePanoMouseDown = (e) => {
    setIsDraggingPano(true);
    setDragStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
  };

  const handlePanoMouseMove = (e) => {
    if (!isDraggingPano) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const delta = currentX - dragStartX;
    setPanoRotation((prev) => (prev + delta * 0.4) % 360);
    setDragStartX(currentX);
  };

  const handlePanoMouseUp = () => {
    setIsDraggingPano(false);
  };

  return (
    <Box sx={{ pb: 6 }}>
      {/* Header matching Screen 8 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <IconButton onClick={() => navigate('projectDetails')} sx={{ p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Gallery
        </Typography>
      </Box>

      {/* Media Tabs matching Screen 8 */}
      <Tabs
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
        sx={{
          ...commonStyles.tabsPillContainer(isDark),
          maxWidth: { xs: '100%', sm: '380px' },
          mb: 3,
        }}
      >
        <Tab label="Photos" value="Photos" />
        <Tab label="Videos" value="Videos" />
        <Tab label="360° View" value="360" />
      </Tabs>

      {/* Tab 1: 2-Column Photo Grid matching Screen 8 */}
      {activeTab === 'Photos' && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 2,
          }}
        >
          {galleryImages.map((img, idx) => (
            <Card
              key={idx}
              onClick={() => handleOpenLightbox(idx)}
              sx={{
                height: { xs: 170, sm: 220, md: 260 },
                borderRadius: 3.5,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <CardMedia
                component="img"
                image={img}
                alt={`Gallery ${idx + 1}`}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Card>
          ))}
        </Box>
      )}

      {/* Tab 2: Videos */}
      {activeTab === 'Videos' && (
        <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
          <Box sx={{ position: 'relative', height: { xs: 260, sm: 380, md: 480 } }}>
            <CardMedia
              component="img"
              image={selectedProject.heroImage}
              alt="Video"
              sx={{ height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: '#D4A017',
                  color: '#0B192C',
                  p: 2.5,
                  '&:hover': { backgroundColor: '#E5A93C' },
                }}
              >
                <PlayCircleOutlinedIcon sx={{ fontSize: 56 }} />
              </IconButton>
              <Typography variant="h6" sx={{ color: '#FFF', fontWeight: 900, mt: 2 }}>
                Official Architectural Drone Walkthrough
              </Typography>
            </Box>
          </Box>
        </Card>
      )}

      {/* Tab 3: 360° Virtual Tour */}
      {activeTab === '360' && (
        <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
          <Box
            onMouseDown={handlePanoMouseDown}
            onMouseMove={handlePanoMouseMove}
            onMouseUp={handlePanoMouseUp}
            onTouchStart={handlePanoMouseDown}
            onTouchMove={handlePanoMouseMove}
            onTouchEnd={handlePanoMouseUp}
            sx={{
              height: { xs: 320, sm: 420, md: 520 },
              cursor: isDraggingPano ? 'grabbing' : 'grab',
              position: 'relative',
              backgroundImage: `url(${selectedProject.virtualTour360})`,
              backgroundSize: 'cover',
              backgroundPosition: `${panoRotation * 3}px center`,
            }}
          >
            <Chip
              icon={<ThreeSixtyIcon sx={{ color: '#0B192C !important' }} />}
              label="Click & Drag to Look 360°"
              sx={{
                position: 'absolute',
                top: 16,
                left: 16,
                backgroundColor: '#D4A017',
                color: '#0B192C',
                fontWeight: 800,
              }}
            />
          </Box>
        </Card>
      )}

      {/* Lightbox */}
      <LightboxModal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={selectedImgIndex}
        onIndexChange={setSelectedImgIndex}
        title={selectedProject.title}
      />
    </Box>
  );
};

export default GalleryScreen;
