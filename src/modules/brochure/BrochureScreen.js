import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import { SVCSLogo } from '../../common/components/SVCSLogo/SVCSLogo';
import { useApp } from '../../context/AppContext';

export const BrochureScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { selectedProject, navigate, showToast } = useApp();

  const [downloading, setDownloading] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    showToast('Downloading official brochure PDF...', 'info');

    setTimeout(() => {
      const dummyContent = `SVCS BUILDERS - OFFICIAL E-BROCHURE\n\nProject: ${selectedProject.title}\nLocation: ${selectedProject.location}\nStarting Price: ${selectedProject.priceFull}\nRERA ID: ${selectedProject.reraId}\nPossession: ${selectedProject.possession}\n\nAbout:\n${selectedProject.about}\n\nContact: +91 98765 43210 | info@svcsbuilders.com`;
      const blob = new Blob([dummyContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedProject.title.replace(/\s+/g, '_')}_Brochure.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloading(false);
      showToast('Brochure downloaded successfully!', 'success');
    }, 1200);
  };

  return (
    <Box sx={{ pb: 6 }}>
      {/* Header matching Screen 10 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <IconButton onClick={() => navigate('projectDetails')} sx={{ p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
      </Box>

      {/* Brochure Preview Card matching Screen 10 */}
      <Box sx={{ maxWidth: '420px', mx: 'auto', width: '100%', display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Card
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            backgroundColor: isDark ? '#0F1B2D' : '#F8FAFC',
            border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.3)' : '#E2E8F0'}`,
            boxShadow: '0 16px 36px rgba(0,0,0,0.15)',
            p: 3,
            textAlign: 'center',
          }}
        >
          {/* Logo at top */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <SVCSLogo size={42} variant="minimal" isDark={isDark} />
          </Box>

          {/* Title & Subtitle */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 900,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'text.primary',
            }}
          >
            {selectedProject.title}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              color: '#D4A017',
              fontWeight: 800,
              letterSpacing: '0.1em',
              display: 'block',
              mb: 2.5,
            }}
          >
            PREMIUM LIVING REDEFINED
          </Typography>

          {/* 3D Render Image in center */}
          <Box sx={{ borderRadius: 3, overflow: 'hidden', height: 260, mb: 1 }}>
            <CardMedia
              component="img"
              height="100%"
              image={selectedProject.heroImage}
              alt="Brochure Cover"
              sx={{ objectFit: 'cover' }}
            />
          </Box>
        </Card>

        {/* Action Buttons matching Screen 10 */}
        <Button
          fullWidth
          variant="contained"
          onClick={() => setViewModalOpen(true)}
          sx={{
            py: 1.6,
            borderRadius: 3,
            fontWeight: 900,
            backgroundColor: '#0B192C',
            color: '#FFFFFF',
            '&:hover': { backgroundColor: '#132A4A' },
          }}
        >
          View Brochure
        </Button>

        <Button
          fullWidth
          variant="outlined"
          disabled={downloading}
          onClick={handleDownload}
          startIcon={<DownloadIcon />}
          sx={{
            py: 1.5,
            borderRadius: 3,
            fontWeight: 800,
            borderColor: isDark ? 'rgba(255,255,255,0.2)' : '#CBD5E1',
            color: 'text.primary',
          }}
        >
          {downloading ? 'Downloading...' : 'Download PDF'}
        </Button>
      </Box>

      {/* View Brochure Modal */}
      <Dialog
        open={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 4, p: 2 } }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 900 }}>{selectedProject.title} E-Brochure</Typography>
          <IconButton size="small" onClick={() => setViewModalOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#D4A017', mb: 1 }}>
            Project Specifications Summary
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
            {selectedProject.about}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
            • Total Towers: {selectedProject.totalTowers || 4} Towers ({selectedProject.totalFloors})
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
            • Total Units: {selectedProject.totalUnits || 360} Luxury Residences
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>
            • RERA Registration No: {selectedProject.reraId}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 2 }}>
            • Possession: {selectedProject.possession}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            onClick={handleDownload}
            startIcon={<DownloadIcon />}
            sx={{ bgcolor: '#D4A017', color: '#0B192C', py: 1.4, fontWeight: 900, borderRadius: 2.5 }}
          >
            Download Complete PDF File
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default BrochureScreen;
