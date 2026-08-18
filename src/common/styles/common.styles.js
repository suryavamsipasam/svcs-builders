export const commonStyles = {
  // Container for sticky bottom action bar
  stickyBottomBar: (isDark) => ({
    position: 'sticky',
    bottom: 0,
    width: '100%',
    p: 2,
    backgroundColor: isDark ? 'rgba(10, 21, 36, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
    zIndex: 1100,
    mt: 'auto',
  }),

  // Gold gradient button style
  goldPrimaryButton: {
    py: 1.5,
    borderRadius: 3,
    fontWeight: 800,
    letterSpacing: '0.02em',
    background: 'linear-gradient(135deg, #F9D77E 0%, #D4A017 50%, #A87108 100%)',
    color: '#0B192C',
    boxShadow: '0 4px 16px rgba(212, 160, 23, 0.35)',
    '&:hover': {
      background: 'linear-gradient(135deg, #FFF1B8 0%, #E5A93C 50%, #BD8210 100%)',
      boxShadow: '0 6px 20px rgba(212, 160, 23, 0.5)',
    },
  },

  // Outlined secondary action button
  outlinedGoldButton: (isDark) => ({
    py: 1.4,
    borderRadius: 3,
    fontWeight: 700,
    borderColor: '#D4A017',
    color: '#D4A017',
    '&:hover': {
      borderColor: '#D4A017',
      backgroundColor: isDark ? 'rgba(212,160,23,0.1)' : '#FEF8E7',
    },
  }),

  // Status badge pill style
  statusBadge: (status) => {
    let bg = '#10B981';
    let text = '#FFFFFF';
    if (status === 'Upcoming') {
      bg = '#3B82F6';
    } else if (status === 'Completed') {
      bg = '#8B5CF6';
    }
    return {
      backgroundColor: bg,
      color: text,
      fontWeight: 700,
      fontSize: '0.7rem',
      height: 22,
      borderRadius: 1.5,
    };
  },

  // Gold text styling
  goldText: {
    color: '#D4A017',
    fontWeight: 800,
  },

  // Section header typography
  sectionHeader: {
    fontWeight: 800,
    fontSize: '1.05rem',
    color: 'text.primary',
  },

  // Category pill tabs
  tabsPillContainer: (isDark) => ({
    minHeight: '40px',
    backgroundColor: isDark ? '#0F1B2D' : '#EEF2F6',
    borderRadius: 3,
    p: 0.5,
    mb: 2.5,
    '& .MuiTabs-indicator': {
      display: 'none',
    },
    '& .MuiTab-root': {
      minHeight: '36px',
      borderRadius: 2.5,
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '0.85rem',
      color: 'text.secondary',
      transition: 'all 0.2s',
      '&.Mui-selected': {
        backgroundColor: '#D4A017',
        color: '#0B192C',
        boxShadow: '0 2px 8px rgba(212,160,23,0.3)',
      },
    },
  }),
};
