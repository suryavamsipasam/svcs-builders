import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  MenuItem,
  TextField,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useApp } from '../../context/AppContext';
import { compareStyles } from './Compare.styles';

export const CompareFlatsScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { selectedProject, navigate } = useApp();

  const [flatA, setFlatA] = useState('2 BHK');
  const [flatB, setFlatB] = useState('3 BHK');

  const comparisonData = {
    '2 BHK': {
      sqft: '1280 sq.ft',
      carpet: '980 sq.ft',
      price: '₹45 Lacs*',
      bedrooms: 2,
      bathrooms: 2,
      balcony: 1,
      parking: 1,
      facing: 'East Facing',
      view: 'Garden & Lake View',
      possession: 'Dec 2026',
    },
    '3 BHK': {
      sqft: '1650 sq.ft',
      carpet: '1290 sq.ft',
      price: '₹65 Lacs*',
      bedrooms: 3,
      bathrooms: 3,
      balcony: 2,
      parking: 1,
      facing: 'West Facing',
      view: 'Panoramic City View',
      possession: 'Dec 2026',
    },
    '4 BHK': {
      sqft: '2250 sq.ft',
      carpet: '1780 sq.ft',
      price: '₹95 Lacs*',
      bedrooms: 4,
      bathrooms: 4,
      balcony: 3,
      parking: 2,
      facing: 'North Facing',
      view: 'Skyline Lake View',
      possession: 'Dec 2026',
    },
  };

  const attributes = [
    { label: 'Starting Price', key: 'price', highlight: true },
    { label: 'Super Built-up Area', key: 'sqft' },
    { label: 'RERA Carpet Area', key: 'carpet' },
    { label: 'Bedrooms', key: 'bedrooms' },
    { label: 'Bathrooms', key: 'bathrooms' },
    { label: 'Balconies', key: 'balcony' },
    { label: 'Reserved Car Parking', key: 'parking' },
    { label: 'Vastu Orientation', key: 'facing' },
    { label: 'Balcony View', key: 'view' },
  ];

  const dataA = comparisonData[flatA];
  const dataB = comparisonData[flatB];

  return (
    <Box sx={compareStyles.container}>
      {/* Top Header */}
      <Box>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('projectDetails')}
          sx={{ fontWeight: 700, color: 'text.secondary', mb: 0.5, p: 0 }}
        >
          Back to {selectedProject.title}
        </Button>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Compare Unit Configurations
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Side-by-side technical comparison of carpet area, dimensions, pricing, and orientations
        </Typography>
      </Box>

      {/* Selectors Row */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
        <TextField
          select
          label="Select Unit 1"
          value={flatA}
          onChange={(e) => setFlatA(e.target.value)}
          fullWidth
          size="small"
        >
          <MenuItem value="2 BHK">2 BHK (1280 sq.ft)</MenuItem>
          <MenuItem value="3 BHK">3 BHK (1650 sq.ft)</MenuItem>
          <MenuItem value="4 BHK">4 BHK (2250 sq.ft)</MenuItem>
        </TextField>

        <TextField
          select
          label="Select Unit 2"
          value={flatB}
          onChange={(e) => setFlatB(e.target.value)}
          fullWidth
          size="small"
        >
          <MenuItem value="2 BHK">2 BHK (1280 sq.ft)</MenuItem>
          <MenuItem value="3 BHK">3 BHK (1650 sq.ft)</MenuItem>
          <MenuItem value="4 BHK">4 BHK (2250 sq.ft)</MenuItem>
        </TextField>
      </Box>

      {/* Flat Option Cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
        <Card sx={compareStyles.flatCardA(isDark)}>
          <Typography variant="h5" sx={{ fontWeight: 900, color: '#D4A017' }}>
            {flatA}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
            {dataA.sqft} Super Built-up
          </Typography>
        </Card>

        <Card sx={compareStyles.flatCardB(isDark)}>
          <Typography variant="h5" sx={{ fontWeight: 900 }}>
            {flatB}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
            {dataB.sqft} Super Built-up
          </Typography>
        </Card>
      </Box>

      {/* Comparison Specifications Table */}
      <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
        <Table>
          <TableBody>
            {attributes.map((attr) => (
              <TableRow key={attr.key}>
                <TableCell colSpan={2} sx={compareStyles.tableRowCell(isDark)}>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 800, color: 'text.secondary', display: 'block', mb: 0.8, textTransform: 'uppercase' }}
                  >
                    {attr.label}
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: attr.highlight ? 900 : 700,
                        color: attr.highlight ? '#D4A017' : 'text.primary',
                        fontSize: attr.highlight ? '1.25rem' : '0.95rem',
                      }}
                    >
                      {dataA[attr.key]}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: attr.highlight ? 900 : 700,
                        color: attr.highlight ? '#D4A017' : 'text.primary',
                        fontSize: attr.highlight ? '1.25rem' : '0.95rem',
                      }}
                    >
                      {dataB[attr.key]}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Enquire CTA */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<EventAvailableIcon />}
        onClick={() => navigate('bookVisit')}
        sx={{ py: 1.8, fontWeight: 900, borderRadius: 3, fontSize: '1rem' }}
      >
        Book Site Visit for Detailed Cost Breakdown
      </Button>
    </Box>
  );
};

export default CompareFlatsScreen;
