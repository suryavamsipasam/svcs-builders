export const webNavbarStyles = {
  appBar: (isDark) => ({
    backgroundColor: isDark ? 'rgba(11, 25, 44, 0.92)' : 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(16px)',
    borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 2px 16px rgba(0, 0, 0, 0.04)',
    color: 'text.primary',
    zIndex: 1200,
  }),

  toolbar: {
    maxWidth: '1360px',
    width: '100%',
    mx: 'auto',
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 1, md: 1.2 },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    cursor: 'pointer',
  },

  navLinksContainer: {
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: 0.5,
  },

  navLinkBtn: (isActive, isDark) => ({
    px: 1.6,
    py: 0.8,
    borderRadius: 2,
    fontWeight: isActive ? 800 : 600,
    fontSize: '0.88rem',
    color: isActive ? '#D4A017' : 'text.primary',
    backgroundColor: isActive
      ? isDark
        ? 'rgba(212, 160, 23, 0.12)'
        : '#FEF8E7'
      : 'transparent',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#D4A017',
      backgroundColor: isDark ? 'rgba(212, 160, 23, 0.08)' : '#FEF8E7',
    },
  }),

  cityBtn: (isDark) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 0.6,
    px: 1.4,
    py: 0.6,
    borderRadius: 2.5,
    cursor: 'pointer',
    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.06)' : '#F1F5F9',
    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : '#E2E8F0'}`,
    transition: 'all 0.2s',
    '&:hover': {
      borderColor: '#D4A017',
      backgroundColor: isDark ? 'rgba(212, 160, 23, 0.1)' : '#FEF8E7',
    },
  }),

  ctaButton: {
    px: 2.4,
    py: 1,
    borderRadius: 2.5,
    fontWeight: 800,
    fontSize: '0.88rem',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
  },
};
