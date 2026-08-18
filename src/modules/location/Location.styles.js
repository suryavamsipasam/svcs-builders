export const locationStyles = {
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

  locationIconBox: (isDark) => ({
    width: 44,
    height: 44,
    borderRadius: 2.5,
    backgroundColor: isDark ? 'rgba(212,160,23,0.15)' : '#FEF8E7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D4A017',
    flexShrink: 0,
  }),
};
