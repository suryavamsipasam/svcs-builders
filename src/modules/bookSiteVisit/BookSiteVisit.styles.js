export const bookSiteVisitStyles = {
  formCard: {
    p: { xs: 3, md: 5 },
    borderRadius: 4,
    maxWidth: '800px',
    mx: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5,
    boxShadow: '0 12px 36px rgba(0,0,0,0.08)',
  },

  formGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
    gap: 2,
  },

  cabPickupCard: (needCab, isDark) => ({
    p: 2,
    borderRadius: 3,
    backgroundColor: needCab
      ? isDark
        ? 'rgba(16,185,129,0.12)'
        : '#ECFDF5'
      : isDark
      ? 'rgba(255,255,255,0.03)'
      : '#F8FAFC',
    border: `1.5px solid ${needCab ? '#10B981' : isDark ? 'rgba(255,255,255,0.08)' : '#E2E8F0'}`,
  }),

  thankYouContainer: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    py: 6,
  },

  goldCheckCircle: (isDark) => ({
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundColor: isDark ? 'rgba(212,160,23,0.15)' : '#FEF8E7',
    border: '3px solid #D4A017',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 30px rgba(212,160,23,0.35)',
    mb: 3,
  }),
};
