export const constructionProgressStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  headerCard: (isDark) => ({
    p: { xs: 3, md: 4 },
    borderRadius: 4,
    background: isDark
      ? 'linear-gradient(135deg, #0F243E 0%, #162B47 100%)'
      : 'linear-gradient(135deg, #FEF8E7 0%, #FFFDF7 100%)',
    border: `1.5px solid ${isDark ? 'rgba(212,160,23,0.3)' : '#F5E3B8'}`,
    boxShadow: isDark ? '0 8px 30px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
  }),

  linearProgress: (isDark) => ({
    height: 12,
    borderRadius: 6,
    backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : '#E2E8F0',
    '& .MuiLinearProgress-bar': {
      borderRadius: 6,
      background: 'linear-gradient(90deg, #D4A017 0%, #10B981 100%)',
    },
  }),

  milestonesGrid: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
    gap: 2,
  },

  milestoneCard: (isCompleted, isInProgress, isDark) => ({
    p: 2.5,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: isCompleted
      ? '1.5px solid rgba(16,185,129,0.35)'
      : isInProgress
      ? '1.5px solid rgba(212,160,23,0.45)'
      : `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'}`,
    backgroundColor: isCompleted
      ? isDark
        ? 'rgba(16,185,129,0.05)'
        : '#F0FDF4'
      : isInProgress
      ? isDark
        ? 'rgba(212,160,23,0.08)'
        : '#FEFCE8'
      : isDark
      ? '#0F1B2D'
      : '#FFFFFF',
  }),
};
