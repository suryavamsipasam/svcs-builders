export const webFooterStyles = {
  footerWrapper: (isDark) => ({
    backgroundColor: isDark ? '#060E1A' : '#0B192C',
    color: '#FFFFFF',
    pt: { xs: 5, md: 7 },
    pb: { xs: 10, md: 4 }, // Extra padding for mobile bottom bar
    borderTop: '1px solid rgba(212, 160, 23, 0.25)',
    mt: 'auto',
  }),

  container: {
    maxWidth: '1360px',
    mx: 'auto',
    px: { xs: 2.5, sm: 3, md: 4 },
  },

  gridContainer: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: '2fr 1fr 1fr 1.5fr',
    },
    gap: { xs: 4, md: 5 },
    mb: 5,
  },

  columnTitle: {
    fontWeight: 800,
    fontSize: '0.95rem',
    color: '#D4A017',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    mb: 2,
  },

  linkText: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: '0.86rem',
    display: 'block',
    py: 0.5,
    cursor: 'pointer',
    transition: 'color 0.2s',
    '&:hover': {
      color: '#D4A017',
    },
  },

  bottomBar: {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    pt: 3,
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1.5,
    textAlign: { xs: 'center', sm: 'left' },
  },
};
