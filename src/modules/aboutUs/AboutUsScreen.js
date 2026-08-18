import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  useTheme,
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import VerifiedIcon from '@mui/icons-material/Verified';
import { SVCSLogo } from '../../common/components/SVCSLogo/SVCSLogo';
import { useApp } from '../../context/AppContext';
import { aboutUsStyles } from './AboutUs.styles';

export const AboutUsScreen = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const { companyInfo } = useApp();

  const stats = [
    { label: 'Years of Experience', value: companyInfo.experienceYears, icon: <WorkspacePremiumIcon sx={{ color: '#D4A017', fontSize: 32 }} /> },
    { label: 'Projects Completed', value: companyInfo.projectsCompleted, icon: <ApartmentIcon sx={{ color: '#D4A017', fontSize: 32 }} /> },
    { label: 'Happy Families', value: companyInfo.happyFamilies, icon: <PeopleAltIcon sx={{ color: '#D4A017', fontSize: 32 }} /> },
    { label: 'Delivered Space', value: companyInfo.deliveredSqft, icon: <ArchitectureIcon sx={{ color: '#D4A017', fontSize: 32 }} /> },
  ];

  return (
    <Box sx={aboutUsStyles.container}>
      {/* Hero Banner */}
      <Box sx={aboutUsStyles.heroBanner}>
        <CardMedia
          component="img"
          image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80"
          alt="SVCS Landmark Tower"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box sx={aboutUsStyles.heroOverlay}>
          <Box>
            <Typography variant="overline" sx={{ color: '#D4A017', fontWeight: 800, letterSpacing: '0.15em' }}>
              OUR LEGACY & VALUES
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#FFF', fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
              Building Timeless Living Spaces
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 4 Stats Grid */}
      <Box sx={aboutUsStyles.statsGrid}>
        {stats.map((stat, idx) => (
          <Card
            key={idx}
            sx={aboutUsStyles.statCard(isDark)}
          >
            <Box sx={{ mb: 1 }}>{stat.icon}</Box>
            <Typography variant="h3" sx={{ fontWeight: 900, color: '#D4A017', fontSize: '2rem' }}>
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700, mt: 0.5 }}>
              {stat.label}
            </Typography>
          </Card>
        ))}
      </Box>

      {/* 2-Column Story and Pillars Split */}
      <Box sx={aboutUsStyles.desktopSplit}>
        {/* Left Column: Story Card */}
        <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 4 }}>
          <Box sx={{ mb: 2 }}>
            <SVCSLogo size={42} variant="minimal" isDark={isDark} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5 }}>
            About SVCS Builders
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
            SVCS Builders is a premier name in residential development, renowned for creating iconic architectural landmarks and thriving gated communities across Hyderabad and Bangalore.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
            Every SVCS residence is thoughtfully engineered with seismic-compliant structures, expansive balconies with natural cross-ventilation, lush green open spaces, and resort-grade amenities.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            With a steadfast commitment to 100% legal transparency, RERA compliance, and on-time delivery, we transform the aspirations of modern families into reality.
          </Typography>
        </Card>

        {/* Right Column: Core Pillars */}
        <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 900, mb: 2.5 }}>
            Our Foundational Pillars
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <VerifiedIcon sx={{ color: '#10B981', fontSize: 26, mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  Uncompromising Quality
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.3, lineHeight: 1.6 }}>
                  German MIVAN formwork engineering, international branded sanitary fittings, and Grade-A certified materials.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <VerifiedIcon sx={{ color: '#10B981', fontSize: 26, mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  Guaranteed On-Time Delivery
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.3, lineHeight: 1.6 }}>
                  Transparent phase-wise construction milestone logging with monthly civil inspection audits.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <VerifiedIcon sx={{ color: '#10B981', fontSize: 26, mt: 0.3 }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                  Customer-First Transparency
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.3, lineHeight: 1.6 }}>
                  Dedicated property relationship manager, complete RERA documentation clarity, and hassle-free home loan assistance.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AboutUsScreen;
