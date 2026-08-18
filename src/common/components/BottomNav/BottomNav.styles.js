export const bottomNavStyles = {
  paper: (isDark) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1100,
    backgroundColor: isDark ? 'rgba(11, 25, 44, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    boxShadow: isDark
      ? '0 -4px 20px rgba(0, 0, 0, 0.4)'
      : '0 -2px 12px rgba(0, 0, 0, 0.05)',
    display: { xs: 'flex', md: 'none' }, // Visible ONLY on mobile screens
  }),

  navPaper: (isDark) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1100,
    backgroundColor: isDark ? 'rgba(11, 25, 44, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    borderTop: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    boxShadow: isDark
      ? '0 -4px 20px rgba(0, 0, 0, 0.4)'
      : '0 -2px 12px rgba(0, 0, 0, 0.05)',
    display: { xs: 'flex', md: 'none' },
  }),

  nav: (isDark) => ({
    backgroundColor: 'transparent',
    height: 64,
    width: '100%',
    maxWidth: '500px',
    mx: 'auto',
    '& .MuiBottomNavigationAction-root': {
      minWidth: 'auto',
      padding: '6px 0',
      color: 'text.secondary',
      transition: 'all 0.2s ease',
      '&.Mui-selected': {
        color: '#D4A017',
        '& .MuiBottomNavigationAction-label': {
          fontWeight: 800,
          fontSize: '0.72rem',
        },
      },
    },
    '& .MuiBottomNavigationAction-label': {
      fontSize: '0.68rem',
      fontWeight: 600,
      marginTop: '2px',
    },
  }),

  bottomNavigation: {
    backgroundColor: 'transparent',
    height: 64,
    width: '100%',
    maxWidth: '500px',
    mx: 'auto',
    '& .MuiBottomNavigationAction-root': {
      minWidth: 'auto',
      padding: '6px 0',
      color: 'text.secondary',
      transition: 'all 0.2s ease',
      '&.Mui-selected': {
        color: '#D4A017',
        '& .MuiBottomNavigationAction-label': {
          fontWeight: 800,
          fontSize: '0.72rem',
        },
      },
    },
    '& .MuiBottomNavigationAction-label': {
      fontSize: '0.68rem',
      fontWeight: 600,
      marginTop: '2px',
    },
  },
};
