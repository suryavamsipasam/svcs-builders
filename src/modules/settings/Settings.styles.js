export const settingsStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    maxWidth: '840px',
    mx: 'auto',
    width: '100%',
  },

  profileCard: (isDark) => ({
    p: 3,
    borderRadius: 3.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: isDark
      ? 'linear-gradient(135deg, #0F243E 0%, #162B47 100%)'
      : 'linear-gradient(135deg, #FEF8E7 0%, #FFFDF7 100%)',
    border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.3)' : '#F5E3B8'}`,
    boxShadow: isDark ? '0 8px 24px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.04)',
  }),

  avatarBox: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    backgroundColor: '#D4A017',
    color: '#0B192C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 900,
    fontSize: '1.4rem',
  },

  bookingsActionCard: (isDark) => ({
    p: 2.5,
    borderRadius: 3.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    border: '1.5px solid #D4A017',
    backgroundColor: isDark ? 'rgba(212,160,23,0.08)' : '#FEF8E7',
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(212,160,23,0.15)',
    },
  }),

  listItem: (isDark, isLast = false) => ({
    py: 1.8,
    px: 3,
    borderBottom: isLast ? 'none' : `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
  }),
};
