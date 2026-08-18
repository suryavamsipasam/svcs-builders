export const floorPlansStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  desktopLayout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', lg: '1.4fr 1fr' },
    gap: 4,
    alignItems: 'start',
  },

  planCard: {
    p: 3,
    borderRadius: 4,
  },

  planHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mb: 2,
  },

  facingChip: (isDark) => ({
    backgroundColor: isDark ? 'rgba(212,160,23,0.15)' : '#FEF8E7',
    color: '#D4A017',
    fontWeight: 800,
    fontSize: '0.78rem',
    border: '1px solid rgba(212,160,23,0.3)',
    px: 0.5,
  }),

  tableCellKey: (isDark) => ({
    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
    fontWeight: 600,
    textTransform: 'capitalize',
    color: 'text.secondary',
    py: 1.2,
  }),

  tableCellVal: (isDark) => ({
    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
    fontWeight: 700,
    color: 'text.primary',
    py: 1.2,
  }),
};
