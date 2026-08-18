export const amenitiesStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(2, 1fr)',
      sm: 'repeat(3, 1fr)',
      md: 'repeat(4, 1fr)',
      lg: 'repeat(5, 1fr)',
    },
    gap: 2.5,
  },

  amenityCard: (isDark) => ({
    borderRadius: 3.5,
    p: 2.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: 140,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
    border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'}`,
    boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.03)',
    '&:hover': {
      transform: 'translateY(-5px)',
      borderColor: '#D4A017',
      boxShadow: '0 10px 28px rgba(212,160,23,0.2)',
    },
  }),

  iconWrapper: (isDark) => ({
    width: 60,
    height: 60,
    borderRadius: 3,
    backgroundColor: isDark ? 'rgba(212,160,23,0.12)' : '#FEF8E7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 1.5,
    transition: 'transform 0.2s ease',
  }),
};
