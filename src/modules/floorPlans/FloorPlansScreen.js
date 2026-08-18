import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  IconButton,
  Chip,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SvgFloorPlan } from './SvgFloorPlan';
import { useApp } from '../../context/AppContext';
import { commonStyles } from '../../common/styles/common.styles';

export const FloorPlansScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { selectedProject, navigate } = useApp();

  const [activeBhk, setActiveBhk] = useState('2 BHK');

  const plans = selectedProject.floorPlans || [];
  const filteredPlans = plans.filter((p) => p.bhk === activeBhk);

  return (
    <Box sx={{ pb: 6 }}>
      {/* Header matching Screen 7 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <IconButton onClick={() => navigate('projectDetails')} sx={{ p: 0.5 }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4" sx={{ fontWeight: 900 }}>
          Floor Plans
        </Typography>
      </Box>

      {/* BHK Tabs in dark container matching Screen 7 */}
      <Tabs
        value={activeBhk}
        onChange={(e, val) => setActiveBhk(val)}
        sx={{
          ...commonStyles.tabsPillContainer(isDark),
          maxWidth: { xs: '100%', sm: '380px' },
          mb: 3,
        }}
      >
        <Tab label="2 BHK" value="2 BHK" />
        <Tab label="3 BHK" value="3 BHK" />
        <Tab label="4 BHK" value="4 BHK" />
      </Tabs>

      {/* Floor Plan Cards List matching Screen 7 */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan) => (
            <Card
              key={plan.id}
              sx={{
                p: { xs: 2.5, md: 3.5 },
                borderRadius: 4,
                backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
                border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.25)' : '#E2E8F0'}`,
                boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              {/* Header inside card */}
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 900 }}>
                    {plan.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>
                    {plan.sqft} sq.ft {plan.carpetSqft ? `(Carpet: ${plan.carpetSqft} sq.ft)` : ''}
                  </Typography>
                </Box>
                <Chip
                  label={plan.facing}
                  size="small"
                  sx={{
                    backgroundColor: isDark ? 'rgba(212,160,23,0.15)' : '#FEF8E7',
                    color: '#D4A017',
                    fontWeight: 800,
                  }}
                />
              </Box>

              {/* Architectural CAD Blueprint Layout */}
              <Box sx={{ my: 1 }}>
                <SvgFloorPlan
                  type={plan.bhk}
                  facing={plan.facing}
                  sqft={plan.sqft}
                />
              </Box>
            </Card>
          ))
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              Floor plan configurations for {activeBhk} are available on request.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FloorPlansScreen;
