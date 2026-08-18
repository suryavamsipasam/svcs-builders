export const favoritesStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  emptyBox: {
    textAlign: 'center',
    py: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  favoritesGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: 3,
  },

  card: (isDark) => ({
    borderRadius: 3.5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0'}`,
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: isDark
        ? '0 12px 32px rgba(0,0,0,0.4)'
        : '0 8px 24px rgba(0,0,0,0.08)',
    },
  }),
};
