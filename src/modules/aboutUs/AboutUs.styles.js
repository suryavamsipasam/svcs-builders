export const aboutUsStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  heroBanner: {
    position: 'relative',
    height: { xs: 220, md: 320 },
    borderRadius: 4,
    overflow: 'hidden',
  },

  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(8,17,31,0.2) 0%, rgba(8,17,31,0.85) 100%)',
    display: 'flex',
    alignItems: 'flex-end',
    p: { xs: 3, md: 4 },
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gap: 2.5,
  },

  statCard: (isDark) => ({
    p: 3,
    borderRadius: 3.5,
    textAlign: 'center',
    backgroundColor: isDark ? '#0F1B2D' : '#FEF8E7',
    border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.25)' : '#F5E3B8'}`,
    boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.03)',
  }),

  desktopSplit: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
    gap: 4,
    alignItems: 'start',
  },
};
