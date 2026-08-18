import React, { useState } from 'react';
import { Box, useTheme } from '@mui/material';

export const SvgFloorPlan = ({ type = '2 BHK', facing = 'East Facing', sqft = '1280 sq.ft' }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [activeRoom, setActiveRoom] = useState(null);

  const planBg = isDark ? '#0B192C' : '#F8FAFC';
  const wallStroke = isDark ? '#3B82F6' : '#1E293B';
  const roomFill = isDark ? '#0F243E' : '#FFFFFF';
  const roomHighlight = isDark ? 'rgba(212, 160, 23, 0.25)' : '#FEF8E7';
  const textFill = isDark ? '#FFFFFF' : '#0F172A';
  const subTextFill = isDark ? '#94A3B8' : '#64748B';
  const goldColor = '#D4A017';

  if (type === '3 BHK') {
    return (
      <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        <svg
          viewBox="0 0 500 420"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '12px',
            backgroundColor: planBg,
            border: `1.5px solid ${isDark ? '#1E3A8A' : '#CBD5E1'}`,
          }}
        >
          <defs>
            <pattern id="grid3" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="500" height="420" fill="url(#grid3)" />

          {/* Outer Boundary Walls */}
          <rect
            x="20"
            y="20"
            width="460"
            height="380"
            fill="none"
            stroke={wallStroke}
            strokeWidth="6"
            rx="4"
          />

          {/* Living & Dining Hall */}
          <g
            onMouseEnter={() => setActiveRoom('Living & Dining')}
            onMouseLeave={() => setActiveRoom(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x="25"
              y="130"
              width="230"
              height="180"
              fill={activeRoom === 'Living & Dining' ? roomHighlight : roomFill}
              stroke={wallStroke}
              strokeWidth="2.5"
            />
            <text x="140" y="210" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="13">
              LIVING & DINING
            </text>
            <text x="140" y="230" textAnchor="middle" fill={subTextFill} fontSize="10">
              22'0" x 13'6"
            </text>
            {/* Sofa Vector */}
            <rect x="35" y="145" width="45" height="18" rx="3" fill="#94A3B8" fillOpacity="0.4" />
            <rect x="35" y="163" width="18" height="40" rx="3" fill="#94A3B8" fillOpacity="0.4" />
            {/* Dining Table Vector */}
            <circle cx="210" cy="220" r="18" fill="#94A3B8" fillOpacity="0.3" />
            <rect x="200" y="200" width="20" height="40" rx="2" fill="#94A3B8" fillOpacity="0.4" />
          </g>

          {/* Foyer Entry */}
          <g>
            <rect
              x="25"
              y="25"
              width="90"
              height="105"
              fill={roomFill}
              stroke={wallStroke}
              strokeWidth="2.5"
            />
            <text x="70" y="70" textAnchor="middle" fill={textFill} fontWeight="600" fontSize="11">
              FOYER
            </text>
            <text x="70" y="88" textAnchor="middle" fill={goldColor} fontWeight="700" fontSize="9">
              ENTRY ◄
            </text>
          </g>

          {/* Modular Kitchen & Utility */}
          <g
            onMouseEnter={() => setActiveRoom('Kitchen')}
            onMouseLeave={() => setActiveRoom(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x="115"
              y="25"
              width="140"
              height="105"
              fill={activeRoom === 'Kitchen' ? roomHighlight : roomFill}
              stroke={wallStroke}
              strokeWidth="2.5"
            />
            <text x="185" y="70" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="12">
              KITCHEN & UTILITY
            </text>
            <text x="185" y="88" textAnchor="middle" fill={subTextFill} fontSize="10">
              11'6" x 8'6"
            </text>
            {/* Counter */}
            <path d="M 120 30 L 250 30 L 250 50 L 140 50 L 140 125 L 120 125 Z" fill="#94A3B8" fillOpacity="0.25" />
          </g>

          {/* Grand Deck Balcony */}
          <g
            onMouseEnter={() => setActiveRoom('Deck Balcony')}
            onMouseLeave={() => setActiveRoom(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x="25"
              y="310"
              width="230"
              height="85"
              fill={activeRoom === 'Deck Balcony' ? roomHighlight : (isDark ? '#14283F' : '#E2E8F0')}
              stroke={wallStroke}
              strokeWidth="2.5"
            />
            {/* Glass Railing */}
            <line x1="30" y1="390" x2="250" y2="390" stroke={goldColor} strokeWidth="3" strokeDasharray="4,4" />
            <text x="140" y="350" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="12">
              GRAND DECK BALCONY
            </text>
            <text x="140" y="368" textAnchor="middle" fill={subTextFill} fontSize="10">
              12'0" x 5'6" (East Lake View)
            </text>
          </g>

          {/* Master Bedroom Suite */}
          <g
            onMouseEnter={() => setActiveRoom('Master Bedroom')}
            onMouseLeave={() => setActiveRoom(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x="255"
              y="25"
              width="220"
              height="160"
              fill={activeRoom === 'Master Bedroom' ? roomHighlight : roomFill}
              stroke={wallStroke}
              strokeWidth="2.5"
            />
            <text x="365" y="95" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="13">
              MASTER BEDROOM
            </text>
            <text x="365" y="115" textAnchor="middle" fill={subTextFill} fontSize="10">
              15'0" x 13'0" + Walk-in Dresser
            </text>
            {/* King Bed */}
            <rect x="330" y="32" width="70" height="50" rx="3" fill="#94A3B8" fillOpacity="0.4" />
          </g>

          {/* Master Toilet */}
          <g>
            <rect
              x="400"
              y="110"
              width="75"
              height="75"
              fill={isDark ? '#112233' : '#E2E8F0'}
              stroke={wallStroke}
              strokeWidth="2"
            />
            <text x="437" y="150" textAnchor="middle" fill={textFill} fontWeight="600" fontSize="9">
              M.TOILET
            </text>
          </g>

          {/* Bedroom 2 (Children's Room) */}
          <g
            onMouseEnter={() => setActiveRoom('Bedroom 2')}
            onMouseLeave={() => setActiveRoom(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x="255"
              y="185"
              width="145"
              height="125"
              fill={activeRoom === 'Bedroom 2' ? roomHighlight : roomFill}
              stroke={wallStroke}
              strokeWidth="2.5"
            />
            <text x="327" y="240" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="12">
              BEDROOM 2
            </text>
            <text x="327" y="258" textAnchor="middle" fill={subTextFill} fontSize="10">
              12'0" x 11'0"
            </text>
          </g>

          {/* Bedroom 3 (Guest Bedroom) */}
          <g
            onMouseEnter={() => setActiveRoom('Bedroom 3')}
            onMouseLeave={() => setActiveRoom(null)}
            style={{ cursor: 'pointer' }}
          >
            <rect
              x="255"
              y="310"
              width="145"
              height="85"
              fill={activeRoom === 'Bedroom 3' ? roomHighlight : roomFill}
              stroke={wallStroke}
              strokeWidth="2.5"
            />
            <text x="327" y="350" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="12">
              GUEST BEDROOM
            </text>
            <text x="327" y="368" textAnchor="middle" fill={subTextFill} fontSize="10">
              11'0" x 10'6"
            </text>
          </g>

          {/* Common Toilets */}
          <g>
            <rect
              x="400"
              y="185"
              width="75"
              height="210"
              fill={isDark ? '#112233' : '#E2E8F0'}
              stroke={wallStroke}
              strokeWidth="2.5"
            />
            <text x="437" y="260" textAnchor="middle" fill={textFill} fontWeight="600" fontSize="10">
              TOILET 2
            </text>
            <line x1="400" y1="290" x2="475" y2="290" stroke={wallStroke} strokeWidth="2" />
            <text x="437" y="350" textAnchor="middle" fill={textFill} fontWeight="600" fontSize="10">
              C.TOILET
            </text>
          </g>

          {/* Compass / Vastu Marker */}
          <g transform="translate(445, 45)">
            <circle cx="0" cy="0" r="16" fill={isDark ? '#0B192C' : '#FFFFFF'} stroke={goldColor} strokeWidth="1.5" />
            <polygon points="0,-12 4,0 -4,0" fill="#EF4444" />
            <polygon points="0,12 4,0 -4,0" fill="#94A3B8" />
            <text x="0" y="-14" textAnchor="middle" fill="#EF4444" fontSize="9" fontWeight="800">N</text>
          </g>
        </svg>

        {activeRoom && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: 'rgba(0,0,0,0.75)',
              color: '#D4A017',
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              backdropFilter: 'blur(4px)',
            }}
          >
            Selected: {activeRoom}
          </Box>
        )}
      </Box>
    );
  }

  // 2 BHK Default
  return (
    <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 460 380"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          backgroundColor: planBg,
          border: `1.5px solid ${isDark ? '#1E3A8A' : '#CBD5E1'}`,
        }}
      >
        <defs>
          <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="460" height="380" fill="url(#grid2)" />

        {/* Boundary */}
        <rect
          x="20"
          y="20"
          width="420"
          height="340"
          fill="none"
          stroke={wallStroke}
          strokeWidth="5"
          rx="4"
        />

        {/* Living Room */}
        <g
          onMouseEnter={() => setActiveRoom('Living Room')}
          onMouseLeave={() => setActiveRoom(null)}
          style={{ cursor: 'pointer' }}
        >
          <rect
            x="25"
            y="120"
            width="210"
            height="150"
            fill={activeRoom === 'Living Room' ? roomHighlight : roomFill}
            stroke={wallStroke}
            strokeWidth="2.5"
          />
          <text x="130" y="190" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="13">
            LIVING ROOM
          </text>
          <text x="130" y="210" textAnchor="middle" fill={subTextFill} fontSize="10">
            16'0" x 12'0"
          </text>
          {/* Furniture */}
          <rect x="35" y="135" width="40" height="15" rx="3" fill="#94A3B8" fillOpacity="0.4" />
          <rect x="35" y="150" width="15" height="35" rx="3" fill="#94A3B8" fillOpacity="0.4" />
        </g>

        {/* Kitchen */}
        <g
          onMouseEnter={() => setActiveRoom('Kitchen')}
          onMouseLeave={() => setActiveRoom(null)}
          style={{ cursor: 'pointer' }}
        >
          <rect
            x="25"
            y="25"
            width="130"
            height="95"
            fill={activeRoom === 'Kitchen' ? roomHighlight : roomFill}
            stroke={wallStroke}
            strokeWidth="2.5"
          />
          <text x="90" y="70" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="12">
            KITCHEN
          </text>
          <text x="90" y="88" textAnchor="middle" fill={subTextFill} fontSize="10">
            10'0" x 8'6"
          </text>
        </g>

        {/* Dining / Foyer */}
        <g>
          <rect
            x="155"
            y="25"
            width="80"
            height="95"
            fill={roomFill}
            stroke={wallStroke}
            strokeWidth="2.5"
          />
          <text x="195" y="65" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="11">
            DINING
          </text>
          <text x="195" y="82" textAnchor="middle" fill={goldColor} fontWeight="700" fontSize="9">
            ENTRY ◄
          </text>
        </g>

        {/* Balcony */}
        <g
          onMouseEnter={() => setActiveRoom('Balcony')}
          onMouseLeave={() => setActiveRoom(null)}
          style={{ cursor: 'pointer' }}
        >
          <rect
            x="25"
            y="270"
            width="210"
            height="85"
            fill={activeRoom === 'Balcony' ? roomHighlight : (isDark ? '#14283F' : '#E2E8F0')}
            stroke={wallStroke}
            strokeWidth="2.5"
          />
          <line x1="30" y1="350" x2="230" y2="350" stroke={goldColor} strokeWidth="3" strokeDasharray="4,4" />
          <text x="130" y="310" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="12">
            BALCONY
          </text>
          <text x="130" y="328" textAnchor="middle" fill={subTextFill} fontSize="10">
            10'0" x 4'6" (East Facing)
          </text>
        </g>

        {/* Master Bedroom */}
        <g
          onMouseEnter={() => setActiveRoom('Master Bedroom')}
          onMouseLeave={() => setActiveRoom(null)}
          style={{ cursor: 'pointer' }}
        >
          <rect
            x="235"
            y="25"
            width="200"
            height="170"
            fill={activeRoom === 'Master Bedroom' ? roomHighlight : roomFill}
            stroke={wallStroke}
            strokeWidth="2.5"
          />
          <text x="335" y="105" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="13">
            MASTER BEDROOM
          </text>
          <text x="335" y="125" textAnchor="middle" fill={subTextFill} fontSize="10">
            14'0" x 12'0"
          </text>
          {/* Bed */}
          <rect x="300" y="32" width="70" height="50" rx="3" fill="#94A3B8" fillOpacity="0.4" />
        </g>

        {/* Bedroom 2 */}
        <g
          onMouseEnter={() => setActiveRoom('Bedroom 2')}
          onMouseLeave={() => setActiveRoom(null)}
          style={{ cursor: 'pointer' }}
        >
          <rect
            x="235"
            y="195"
            width="130"
            height="160"
            fill={activeRoom === 'Bedroom 2' ? roomHighlight : roomFill}
            stroke={wallStroke}
            strokeWidth="2.5"
          />
          <text x="300" y="270" textAnchor="middle" fill={textFill} fontWeight="700" fontSize="12">
            BEDROOM 2
          </text>
          <text x="300" y="290" textAnchor="middle" fill={subTextFill} fontSize="10">
            12'0" x 11'0"
          </text>
        </g>

        {/* Toilets */}
        <g>
          <rect
            x="365"
            y="195"
            width="70"
            height="160"
            fill={isDark ? '#112233' : '#E2E8F0'}
            stroke={wallStroke}
            strokeWidth="2.5"
          />
          <text x="400" y="245" textAnchor="middle" fill={textFill} fontWeight="600" fontSize="10">
            M.TOILET
          </text>
          <line x1="365" y1="270" x2="435" y2="270" stroke={wallStroke} strokeWidth="2" />
          <text x="400" y="320" textAnchor="middle" fill={textFill} fontWeight="600" fontSize="10">
            C.TOILET
          </text>
        </g>

        {/* Compass */}
        <g transform="translate(410, 45)">
          <circle cx="0" cy="0" r="14" fill={isDark ? '#0B192C' : '#FFFFFF'} stroke={goldColor} strokeWidth="1.5" />
          <polygon points="0,-10 3,0 -3,0" fill="#EF4444" />
          <polygon points="0,10 3,0 -3,0" fill="#94A3B8" />
          <text x="0" y="-12" textAnchor="middle" fill="#EF4444" fontSize="8" fontWeight="800">N</text>
        </g>
      </svg>
    </Box>
  );
};

export default SvgFloorPlan;
