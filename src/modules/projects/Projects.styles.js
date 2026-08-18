export const projectsStyles = {
  listContainer: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
    },
    gap: 3,
  },

  projectCard: (isDark) => ({
    borderRadius: 3.5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0'}`,
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: '#D4A017',
      boxShadow: isDark
        ? '0 12px 32px rgba(0,0,0,0.4)'
        : '0 8px 24px rgba(0,0,0,0.08)',
    },
  }),

  detailsSplitLayout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' },
    gap: 4,
    alignItems: 'start',
  },

  stickySidebarCard: (isDark) => ({
    p: 3,
    borderRadius: 4,
    backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
    border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.3)' : '#F5E3B8'}`,
    boxShadow: isDark
      ? '0 12px 36px rgba(0,0,0,0.35)'
      : '0 8px 28px rgba(0,0,0,0.06)',
    position: { md: 'sticky' },
    top: { md: 90 },
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5,
  }),

  heroBanner: {
    position: 'relative',
    height: { xs: 260, sm: 360, md: 440 },
    borderRadius: 4,
    overflow: 'hidden',
    cursor: 'pointer',
    mb: 3,
  },

  highlightGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
    gap: 2,
    mb: 3,
  },

  bhkChip: (isDark) => ({
    fontWeight: 700,
    fontSize: '0.8rem',
    backgroundColor: isDark ? 'rgba(212,160,23,0.15)' : '#FEF8E7',
    color: '#D4A017',
    border: '1px solid rgba(212,160,23,0.3)',
    px: 0.5,
  }),
};
