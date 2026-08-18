import React from 'react';
import { Box, Typography } from '@mui/material';

export const SVCSLogoIcon = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9D77E" />
        <stop offset="40%" stopColor="#D4A017" />
        <stop offset="70%" stopColor="#B37D14" />
        <stop offset="100%" stopColor="#8A5A00" />
      </linearGradient>
      <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Modern architectural high-rise towers monogram */}
    <path
      d="M50 5 L85 25 L85 85 L50 95 L15 85 L15 25 Z"
      fill="url(#goldGrad)"
      opacity="0.12"
    />
    <path
      d="M50 8 L82 26 L82 82 L50 92 L18 82 L18 26 Z"
      stroke="url(#goldGrad)"
      strokeWidth="2.5"
      fill="none"
    />

    {/* Tower 1 (Left Ascent) */}
    <path
      d="M26 78 L26 42 L42 32 L42 78 Z"
      fill="url(#goldGrad)"
      opacity="0.85"
    />
    {/* Tower 2 (Center Pinnacle) */}
    <path
      d="M44 78 L44 18 L56 18 L56 78 Z"
      fill="url(#goldGrad)"
    />
    {/* Tower 3 (Right Ascent) */}
    <path
      d="M58 78 L58 32 L74 42 L74 78 Z"
      fill="url(#goldGrad)"
      opacity="0.85"
    />

    {/* Pinnacle spire antenna */}
    <line x1="50" y1="18" x2="50" y2="10" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="9" r="2.5" fill="#FFE082" />

    {/* Geometric Roof angles */}
    <polygon points="44,18 50,11 56,18" fill="#FFEAA7" />
    <polygon points="26,42 34,35 42,32" fill="#FFEAA7" />
    <polygon points="74,42 66,35 58,32" fill="#FFEAA7" />

    {/* Floor window slits */}
    <line x1="47" y1="28" x2="53" y2="28" stroke="#0B192C" strokeWidth="1.5" />
    <line x1="47" y1="36" x2="53" y2="36" stroke="#0B192C" strokeWidth="1.5" />
    <line x1="47" y1="44" x2="53" y2="44" stroke="#0B192C" strokeWidth="1.5" />
    <line x1="47" y1="52" x2="53" y2="52" stroke="#0B192C" strokeWidth="1.5" />
    <line x1="47" y1="60" x2="53" y2="60" stroke="#0B192C" strokeWidth="1.5" />
    <line x1="47" y1="68" x2="53" y2="68" stroke="#0B192C" strokeWidth="1.5" />

    {/* Base foundation line */}
    <rect x="22" y="78" width="56" height="4" rx="1.5" fill="#FFE082" />
  </svg>
);

export const SVCSLogo = ({
  size = 48,
  variant = 'full',
  isDark = true,
  showTagline = true,
}) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        userSelect: 'none',
      }}
    >
      <SVCSLogoIcon size={size} />

      {variant !== 'iconOnly' && (
        <Box sx={{ textAlign: 'left' }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Cinzel', 'Plus Jakarta Sans', serif",
              fontWeight: 900,
              fontSize: size * 0.45,
              letterSpacing: '0.12em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, #F9D77E 0%, #D4A017 50%, #C68A14 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textTransform: 'uppercase',
            }}
          >
            SVCS
          </Typography>

          <Typography
            variant="caption"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: size * 0.22,
              letterSpacing: '0.35em',
              lineHeight: 1.2,
              color: isDark ? 'rgba(255, 255, 255, 0.9)' : '#0F172A',
              display: 'block',
              textTransform: 'uppercase',
              mt: 0.2,
            }}
          >
            BUILDERS
          </Typography>

          {showTagline && variant === 'full' && (
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mt: 1,
                fontSize: size * 0.18,
                color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#64748B',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              Building Dreams, Creating Reality.
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default SVCSLogo;
