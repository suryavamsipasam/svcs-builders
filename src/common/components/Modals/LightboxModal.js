import React from 'react';
import {
  Dialog,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const LightboxModal = ({
  open,
  onClose,
  images = [],
  currentIndex = 0,
  onIndexChange,
  title = '',
}) => {
  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    onIndexChange((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onIndexChange((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backgroundImage: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 2,
        },
      }}
    >
      {/* Top Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10,
        }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ color: '#FFF', fontWeight: 800 }}>
            {title}
          </Typography>
          <Typography variant="caption" sx={{ color: '#D4A017', fontWeight: 600 }}>
            {currentIndex + 1} of {images.length} Photos
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            color: '#FFFFFF',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Main Image Viewer */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          my: 'auto',
          maxHeight: '75vh',
        }}
      >
        {images.length > 1 && (
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 8,
              zIndex: 2,
              color: '#FFFFFF',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              '&:hover': { backgroundColor: '#D4A017', color: '#0B192C' },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
        )}

        <Box
          component="img"
          src={currentImage}
          alt={`Photo ${currentIndex + 1}`}
          sx={{
            maxWidth: '100%',
            maxHeight: '70vh',
            borderRadius: 2,
            objectFit: 'contain',
            boxShadow: '0 12px 40px rgba(0,0,0,0.8)',
          }}
        />

        {images.length > 1 && (
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 8,
              zIndex: 2,
              color: '#FFFFFF',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              '&:hover': { backgroundColor: '#D4A017', color: '#0B192C' },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      {/* Bottom Thumbnail Strip */}
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'center',
          overflowX: 'auto',
          py: 1,
        }}
      >
        {images.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            onClick={() => onIndexChange(i)}
            sx={{
              width: 50,
              height: 50,
              objectFit: 'cover',
              borderRadius: 1.5,
              cursor: 'pointer',
              border: currentIndex === i ? '2px solid #D4A017' : '2px solid transparent',
              opacity: currentIndex === i ? 1 : 0.6,
              transition: 'all 0.2s',
            }}
          />
        ))}
      </Box>
    </Dialog>
  );
};

export default LightboxModal;
