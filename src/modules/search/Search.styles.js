export const searchStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    maxWidth: '900px',
    mx: 'auto',
    width: '100%',
  },

  contentCard: {
    p: { xs: 3, md: 4 },
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  filterChip: (selected, isDark) => ({
    fontWeight: 700,
    fontSize: '0.85rem',
    py: 2.2,
    px: 1.5,
    borderRadius: 2.5,
    backgroundColor: selected
      ? '#D4A017'
      : isDark
      ? 'rgba(255,255,255,0.06)'
      : '#F1F5F9',
    color: selected ? '#0B192C' : 'text.primary',
    border: selected ? '1.5px solid #D4A017' : 'none',
    transition: 'all 0.2s',
  }),

  slider: {
    color: '#D4A017',
    '& .MuiSlider-thumb': {
      backgroundColor: '#FFFFFF',
      border: '2px solid #D4A017',
    },
  },
};
