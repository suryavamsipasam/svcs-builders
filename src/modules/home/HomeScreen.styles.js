export const homeStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3.5,
  },

  heroBanner: (isDark) => ({
    position: 'relative',
    borderRadius: { xs: 3.5, md: 5 },
    overflow: 'hidden',
    minHeight: { xs: '200px', md: '280px' },
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: '1.4fr 1fr' },
    alignItems: 'center',
    backgroundColor: '#0B192C',
    color: '#FFFFFF',
    p: { xs: 3, md: 4.5 },
    boxShadow: isDark
      ? '0 12px 36px rgba(0,0,0,0.5)'
      : '0 8px 30px rgba(11,25,44,0.12)',
    border: '1.5px solid rgba(212, 160, 23, 0.3)',
  }),

  heroHeading: {
    fontWeight: 900,
    fontSize: { xs: '1.5rem', sm: '1.9rem', md: '2.4rem' },
    color: '#FFFFFF',
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    mb: 1,
  },

  heroSubtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: { xs: '0.85rem', md: '0.98rem' },
    lineHeight: 1.5,
    mb: 2.5,
  },

  heroBtn: {
    backgroundColor: '#D4A017',
    color: '#0B192C',
    borderRadius: 3,
    fontWeight: 800,
    fontSize: '0.88rem',
    px: 2.8,
    py: 1.1,
    textTransform: 'none',
    boxShadow: '0 4px 16px rgba(212,160,23,0.4)',
    '&:hover': {
      backgroundColor: '#E5A93C',
    },
  },

  quickCategoriesGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(2, 1fr)',
      sm: 'repeat(4, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gap: 2,
  },

  categoryCard: (isDark) => ({
    p: 2.5,
    borderRadius: 3.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
    border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.2)' : '#F5E3B8'}`,
    boxShadow: isDark ? '0 4px 16px rgba(0,0,0,0.2)' : '0 2px 10px rgba(0,0,0,0.03)',
    transition: 'all 0.22s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      borderColor: '#D4A017',
      boxShadow: '0 8px 24px rgba(212,160,23,0.18)',
    },
  }),

  categoryIconBox: (isDark) => ({
    width: 52,
    height: 52,
    borderRadius: 3,
    backgroundColor: isDark ? 'rgba(212,160,23,0.12)' : '#FEF8E7',
    border: '1px solid rgba(212,160,23,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 1.2,
  }),

  featuredCard: (isDark) => ({
    borderRadius: 4,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: isDark ? '#0F1B2D' : '#FFFFFF',
    border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.3)' : '#F5E3B8'}`,
    boxShadow: isDark ? '0 12px 36px rgba(0,0,0,0.3)' : '0 6px 24px rgba(0,0,0,0.06)',
    cursor: 'pointer',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 16px 40px rgba(212,160,23,0.18)',
    },
  }),

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
};
