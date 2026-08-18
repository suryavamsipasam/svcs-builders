export const brochureStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  desktopLayout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1.2fr' },
    gap: { xs: 3, md: 5 },
    alignItems: 'center',
    maxWidth: '1000px',
    mx: 'auto',
    width: '100%',
    py: 2,
  },

  previewCard: {
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
    border: '2px solid rgba(212,160,23,0.35)',
    position: 'relative',
  },

  overlayBox: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(11,25,44,0.3) 0%, rgba(11,25,44,0.92) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    p: 3,
    color: '#FFFFFF',
  },

  specsContainer: (isDark) => ({
    display: 'flex',
    gap: 2,
    p: 2,
    borderRadius: 3,
    backgroundColor: isDark ? '#0F1B2D' : '#F1F5F9',
    width: '100%',
    justifyContent: 'space-around',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
  }),
};
