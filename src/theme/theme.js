import { createTheme } from '@mui/material/styles';

export const getAppTheme = (mode = 'light') => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#C68A14',
        light: '#E5A93C',
        dark: '#9E6A08',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: isDark ? '#3B82F6' : '#0B192C',
        light: isDark ? '#60A5FA' : '#1E3A8A',
        dark: isDark ? '#1D4ED8' : '#070F1A',
        contrastText: '#FFFFFF',
      },
      background: {
        default: isDark ? '#080E18' : '#F8FAFC',
        paper: isDark ? '#0F1B2D' : '#FFFFFF',
        subtle: isDark ? '#16253B' : '#F1F5F9',
        card: isDark ? '#121F33' : '#FFFFFF',
        goldLight: isDark ? 'rgba(198, 138, 20, 0.12)' : '#FEF8E7',
      },
      text: {
        primary: isDark ? '#F1F5F9' : '#0F172A',
        secondary: isDark ? '#94A3B8' : '#64748B',
        muted: isDark ? '#64748B' : '#94A3B8',
        gold: '#C68A14',
      },
      divider: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
      success: {
        main: '#10B981',
      },
      warning: {
        main: '#F59E0B',
      },
      error: {
        main: '#EF4444',
      },
      info: {
        main: '#3B82F6',
      },
    },
    typography: {
      fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      h1: {
        fontWeight: 800,
        fontSize: '1.75rem',
        lineHeight: 1.25,
      },
      h2: {
        fontWeight: 700,
        fontSize: '1.4rem',
        lineHeight: 1.3,
      },
      h3: {
        fontWeight: 700,
        fontSize: '1.2rem',
        lineHeight: 1.35,
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.05rem',
        lineHeight: 1.4,
      },
      h5: {
        fontWeight: 600,
        fontSize: '0.95rem',
      },
      h6: {
        fontWeight: 600,
        fontSize: '0.875rem',
      },
      subtitle1: {
        fontSize: '0.95rem',
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: '0.85rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '0.9rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.8rem',
        lineHeight: 1.45,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
        letterSpacing: '0.02em',
      },
    },
    shape: {
      borderRadius: 14,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '10px 20px',
            fontSize: '0.9rem',
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(198, 138, 20, 0.25)',
            },
          },
          containedPrimary: {
            background: 'linear-gradient(135deg, #D4A017 0%, #B87A0E 100%)',
            color: '#FFFFFF',
            '&:hover': {
              background: 'linear-gradient(135deg, #DEAE2B 0%, #A36906 100%)',
            },
          },
          outlined: {
            borderWidth: '1.5px',
            '&:hover': {
              borderWidth: '1.5px',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundImage: 'none',
            boxShadow: isDark
              ? '0 4px 20px rgba(0, 0, 0, 0.4)'
              : '0 4px 20px rgba(0, 0, 0, 0.05)',
            border: isDark
              ? '1px solid rgba(255, 255, 255, 0.06)'
              : '1px solid rgba(0, 0, 0, 0.04)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            borderRadius: 8,
          },
        },
      },
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            backgroundColor: isDark ? '#0A1524' : '#FFFFFF',
            borderTop: isDark
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(0, 0, 0, 0.06)',
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            color: isDark ? '#94A3B8' : '#64748B',
            '&.Mui-selected': {
              color: '#C68A14',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 20,
            backgroundImage: 'none',
          },
        },
      },
    },
  });
};
