import React, { useState } from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BusinessIcon from '@mui/icons-material/Business';

export const SvgMap = ({ projectTitle = 'Green Valley Residency' }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [selectedPin, setSelectedPin] = useState('project');

  const mapBg = isDark ? '#081322' : '#F1F5F9';
  const roadColor = isDark ? '#1E293B' : '#E2E8F0';
  const roadBorder = isDark ? '#334155' : '#CBD5E1';
  const greenSpace = isDark ? '#064E3B' : '#DCFCE7';
  const waterColor = isDark ? '#0C4A6E' : '#E0F2FE';
  const highwayColor = isDark ? '#C2410C' : '#FDBA74';

  const landmarks = [
    { id: 'oakridge', name: 'Oakridge School', category: 'Education', x: 90, y: 110, dist: '1.2 km', time: '4 mins', icon: <SchoolIcon fontSize="small" /> },
    { id: 'care', name: 'CARE Hospital', category: 'Healthcare', x: 380, y: 120, dist: '2.5 km', time: '8 mins', icon: <LocalHospitalIcon fontSize="small" /> },
    { id: 'inorbit', name: 'Inorbit Mall', category: 'Shopping', x: 130, y: 310, dist: '4.8 km', time: '12 mins', icon: <ShoppingBagIcon fontSize="small" /> },
    { id: 'wipro', name: 'Financial District', category: 'Workplace', x: 390, y: 290, dist: '3.0 km', time: '7 mins', icon: <BusinessIcon fontSize="small" /> },
  ];

  return (
    <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 500 380"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          backgroundColor: mapBg,
          boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.06)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        }}
      >
        {/* Lake / Water Body Graphic */}
        <path
          d="M 280 20 C 350 40 420 20 480 50 C 490 100 450 140 400 130 C 350 120 320 80 280 20 Z"
          fill={waterColor}
          opacity={isDark ? '0.4' : '0.7'}
        />
        <text x="390" y="75" fill={isDark ? '#38BDF8' : '#0284C7'} fontSize="10" fontWeight="600" fontStyle="italic">
          Kokapet Lake
        </text>

        {/* Botanical Garden / Green Park */}
        <rect x="30" y="160" width="100" height="90" rx="8" fill={greenSpace} opacity={isDark ? '0.35' : '0.6'} />
        <text x="80" y="210" textAnchor="middle" fill={isDark ? '#34D399' : '#059669'} fontSize="10" fontWeight="700">
          Green Reserve
        </text>

        {/* Arterial Roads & Expressways */}
        {/* Outer Ring Road (ORR) Expressway */}
        <path
          d="M 10 70 Q 250 160 490 90"
          fill="none"
          stroke={highwayColor}
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 10 70 Q 250 160 490 90"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeDasharray="8,6"
        />
        <text x="250" y="105" textAnchor="middle" fill="#EA580C" fontSize="10" fontWeight="800" letterSpacing="0.05em">
          NEHRU OUTER RING ROAD (ORR)
        </text>

        {/* Secondary Roads */}
        <path d="M 250 20 L 250 360" fill="none" stroke={roadBorder} strokeWidth="12" />
        <path d="M 250 20 L 250 360" fill="none" stroke={roadColor} strokeWidth="8" />

        <path d="M 30 240 L 470 240" fill="none" stroke={roadBorder} strokeWidth="10" />
        <path d="M 30 240 L 470 240" fill="none" stroke={roadColor} strokeWidth="6" />

        {/* Connecting Sector roads */}
        <path d="M 90 70 L 90 240" fill="none" stroke={roadColor} strokeWidth="5" />
        <path d="M 380 90 L 380 340" fill="none" stroke={roadColor} strokeWidth="5" />

        {/* Landmark Pins */}
        {landmarks.map((lm) => (
          <g
            key={lm.id}
            transform={`translate(${lm.x}, ${lm.y})`}
            onClick={() => setSelectedPin(lm.id)}
            style={{ cursor: 'pointer' }}
          >
            <circle
              cx="0"
              cy="0"
              r={selectedPin === lm.id ? 20 : 16}
              fill={selectedPin === lm.id ? '#D4A017' : (isDark ? '#1E293B' : '#FFFFFF')}
              stroke={selectedPin === lm.id ? '#FFFFFF' : '#94A3B8'}
              strokeWidth="2"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
            />
            <circle cx="0" cy="0" r="4" fill={selectedPin === lm.id ? '#0B192C' : '#3B82F6'} />
            <text
              x="0"
              y="28"
              textAnchor="middle"
              fill={isDark ? '#E2E8F0' : '#1E293B'}
              fontSize="9"
              fontWeight="700"
            >
              {lm.name}
            </text>
            <text
              x="0"
              y="39"
              textAnchor="middle"
              fill="#D4A017"
              fontSize="8"
              fontWeight="600"
            >
              {lm.dist}
            </text>
          </g>
        ))}

        {/* Main Project Location Pin (Golden Star) */}
        <g
          transform="translate(250, 190)"
          onClick={() => setSelectedPin('project')}
          style={{ cursor: 'pointer' }}
        >
          {/* Pulsing ring */}
          <circle cx="0" cy="0" r="24" fill="rgba(212, 160, 23, 0.25)">
            <animate attributeName="r" values="18;28;18" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* Main Pin */}
          <path
            d="M 0 -22 C -12 -22 -18 -12 -18 0 C -18 10 0 26 0 26 C 0 26 18 10 18 0 C 18 -12 12 -22 0 -22 Z"
            fill="url(#goldMapGrad2)"
            filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))"
          />
          <circle cx="0" cy="-6" r="6" fill="#0B192C" />
          <circle cx="0" cy="-6" r="3" fill="#FFE082" />

          <defs>
            <linearGradient id="goldMapGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9D77E" />
              <stop offset="100%" stopColor="#C68A14" />
            </linearGradient>
          </defs>
        </g>
      </svg>

      {/* Floating Info Overlay */}
      <Paper
        elevation={3}
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 12,
          right: 12,
          p: 1.2,
          borderRadius: 2,
          background: isDark ? 'rgba(15, 27, 45, 0.92)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOnIcon sx={{ color: '#D4A017', fontSize: 22 }} />
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
              {selectedPin === 'project'
                ? projectTitle
                : landmarks.find((l) => l.id === selectedPin)?.name || projectTitle}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {selectedPin === 'project'
                ? 'Kokapet, Hyderabad • Prime Hub'
                : `${landmarks.find((l) => l.id === selectedPin)?.dist} away (${landmarks.find((l) => l.id === selectedPin)?.time})`}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="caption"
          sx={{
            background: '#D4A017',
            color: '#FFF',
            px: 1,
            py: 0.3,
            borderRadius: 1,
            fontWeight: 700,
          }}
        >
          LIVE GPS
        </Typography>
      </Paper>
    </Box>
  );
};

export default SvgMap;
