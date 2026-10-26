// Sri Venkateswara Constructions - Design System & Theme Tokens
// Visual Theme: Premium Ivory, Deep Green, Muted Gold & White

export const theme = {
  colors: {
    // Deep Green primary brand
    primary: '#173D32',
    primaryDark: '#0D241D',
    primaryLight: '#235345',
    primarySubtle: 'rgba(23, 61, 50, 0.08)',

    // Muted Gold luxury accent
    accent: '#B69A5A',
    accentLight: '#D4AF37',
    accentBright: '#F9D77E',
    accentSoft: '#F5EED9',
    accentSubtle: 'rgba(182, 154, 90, 0.15)',

    // Premium Ivory background
    background: '#F5F0E6',
    backgroundSubtle: '#EDE6D8',
    backgroundLight: '#FAF7F0',

    // Pure White cards and surfaces
    surface: '#FFFFFF',
    surfaceTranslucent: 'rgba(255, 255, 255, 0.94)',

    // Typography hierarchy
    textPrimary: '#141E19',   // Deep slate
    textSecondary: '#4A5A53', // Muted forest slate
    textMuted: '#829189',     // Subtle caption gray
    textLight: '#FFFFFF',
    textGold: '#B69A5A',

    // Structural borders and lines
    border: '#E3DAC9',
    borderLight: 'rgba(227, 218, 201, 0.6)',
    borderGold: 'rgba(182, 154, 90, 0.4)',

    // Utility & status
    success: '#1B8755',
    warning: '#D97706',
    error: '#DC2626',
    whatsapp: '#25D366',
    whatsappDark: '#128C7E',
  },

  typography: {
    fontSerif: "'Cinzel', Georgia, serif",
    fontSans: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    sizes: {
      hero: 28,
      title: 22,
      subtitle: 17,
      body: 14,
      bodySmall: 13,
      caption: 11,
      micro: 10,
    },
  },

  radius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 18,
    xl: 24,
    full: 9999,
  },

  shadows: {
    card: {
      shadowColor: '#173D32',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
      elevation: 3,
    },
    float: {
      shadowColor: '#173D32',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.14,
      shadowRadius: 20,
      elevation: 6,
    },
    goldGlow: {
      shadowColor: '#B69A5A',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.35,
      shadowRadius: 14,
      elevation: 4,
    },
  },
};

export default theme;
