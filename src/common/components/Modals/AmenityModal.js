import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Button,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useApp } from '../../../context/AppContext';

export const AmenityModal = ({ open, onClose, amenity }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { navigate } = useApp();

  if (!amenity) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <VerifiedIcon sx={{ color: '#D4A017', fontSize: 22 }} />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {amenity.name}
          </Typography>
        </Box>
        <IconButton size="small" onClick={onClose} sx={{ color: 'text.secondary' }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 1, pb: 2 }}>
        {/* Amenity Image */}
        {amenity.image && (
          <Box
            component="img"
            src={amenity.image}
            alt={amenity.name}
            sx={{
              width: '100%',
              height: 180,
              objectFit: 'cover',
              borderRadius: 3,
              mb: 2,
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
            }}
          />
        )}

        <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
          {amenity.desc}
        </Typography>

        <Box
          sx={{
            p: 1.5,
            borderRadius: 2.5,
            backgroundColor: isDark ? 'rgba(212,160,23,0.08)' : '#FEF8E7',
            border: '1px solid rgba(212,160,23,0.25)',
            mb: 2.5,
          }}
        >
          <Typography variant="caption" sx={{ color: '#D4A017', fontWeight: 700, display: 'block', mb: 0.5 }}>
            AMENITY HIGHLIGHT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Built with premium international grade materials, 24/7 dedicated maintenance staff, and child-safe certifications.
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            onClose();
            navigate('bookVisit');
          }}
          sx={{ py: 1.3, fontWeight: 700 }}
        >
          Book Site Visit To Experience
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AmenityModal;
