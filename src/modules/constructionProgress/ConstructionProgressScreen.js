import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  LinearProgress,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TuneIcon from '@mui/icons-material/Tune';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BuildIcon from '@mui/icons-material/Build';
import BoltIcon from '@mui/icons-material/Bolt';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import FoundationIcon from '@mui/icons-material/Foundation';
import CloseIcon from '@mui/icons-material/Close';
import { useApp } from '../../context/AppContext';

export const ConstructionProgressScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { selectedProject, navigate } = useApp();

  const [timelineModalOpen, setTimelineModalOpen] = useState(false);

  const progressList = [
    { id: 1, title: 'Foundation', status: 'Completed', date: '15 Feb 2024', percent: '100%', icon: <FoundationIcon sx={{ color: '#10B981', fontSize: 26 }} /> },
    { id: 2, title: 'Structure', status: 'Completed', date: '20 May 2024', percent: '100%', icon: <CheckCircleIcon sx={{ color: '#10B981', fontSize: 26 }} /> },
    { id: 3, title: 'Brick Work', status: 'Completed', date: '10 Aug 2024', percent: '100%', icon: <CheckCircleIcon sx={{ color: '#10B981', fontSize: 26 }} /> },
    { id: 4, title: 'Plumbing', status: 'In Progress', date: 'In Progress', percent: '35%', icon: <BuildIcon sx={{ color: '#D4A017', fontSize: 26 }} /> },
    { id: 5, title: 'Electrical', status: 'In Progress', date: 'In Progress', percent: '20%', icon: <BoltIcon sx={{ color: '#D4A017', fontSize: 26 }} /> },
    { id: 6, title: 'Painting', status: 'Upcoming', date: 'Upcoming', percent: '0%', icon: <FormatPaintIcon sx={{ color: '#94A3B8', fontSize: 26 }} /> },
  ];

  return (
    <Box sx={{ pb: 10 }}>
      {/* Header matching Screen 9 */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => navigate('projectDetails')} sx={{ p: 0.5 }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 900 }}>
            Construction Progress
          </Typography>
        </Box>

        <IconButton sx={{ color: 'text.primary' }}>
          <TuneIcon />
        </IconButton>
      </Box>

      {/* Project Overview Card matching Screen 9 */}
      <Card
        sx={{
          p: { xs: 2.5, md: 3.5 },
          borderRadius: 4,
          backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
          border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.25)' : '#E2E8F0'}`,
          mb: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <LocationOnIcon sx={{ color: '#10B981', fontSize: 22 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 900 }}>
              {selectedProject.title}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>
              {selectedProject.location}
            </Typography>
          </Box>
        </Box>

        <Typography variant="h2" sx={{ fontWeight: 900, color: '#0B192C', fontSize: '2.8rem', lineHeight: 1 }}>
          {selectedProject.progressPercent}%
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700, display: 'block', mb: 1.5 }}>
          Completed
        </Typography>

        <LinearProgress
          variant="determinate"
          value={selectedProject.progressPercent}
          sx={{
            height: 10,
            borderRadius: 5,
            bgcolor: isDark ? 'rgba(255,255,255,0.1)' : '#E2E8F0',
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
              backgroundColor: '#D4A017',
            },
          }}
        />
      </Card>

      {/* Milestone Timeline List matching Screen 9 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {progressList.map((item) => (
          <Card
            key={item.id}
            sx={{
              p: 2,
              borderRadius: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ minWidth: 32, display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  {item.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.status}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="body2" sx={{ fontWeight: 800, color: item.status === 'Completed' ? '#10B981' : item.status === 'In Progress' ? '#D4A017' : 'text.secondary' }}>
                {item.status === 'Completed' ? item.date : item.percent}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Sticky Bottom CTA: View Timeline (Dark Navy) */}
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
          onClick={() => setTimelineModalOpen(true)}
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
          View Timeline
        </Button>
      </Box>

      {/* Timeline Modal */}
      <Dialog
        open={timelineModalOpen}
        onClose={() => setTimelineModalOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 4, p: 2 } }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 900 }}>Full Civil Milestone Schedule</Typography>
          <IconButton size="small" onClick={() => setTimelineModalOpen(false)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Target Possession: December 2026. All structural phases audited under TS RERA quality certification standards.
          </Typography>
          {progressList.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', py: 1, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>{item.title}</Typography>
              <Typography variant="body2" sx={{ fontWeight: 800, color: item.status === 'Completed' ? '#10B981' : '#D4A017' }}>
                {item.status} ({item.date})
              </Typography>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ConstructionProgressScreen;
