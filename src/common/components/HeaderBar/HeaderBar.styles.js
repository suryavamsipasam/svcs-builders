export const headerBarStyles = {
  appBar: (isDark) => ({
    backgroundColor: isDark ? 'rgba(10, 21, 36, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)'}`,
    color: 'text.primary',
    boxShadow: 'none',
    zIndex: 1100,
  }),

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '56px !important',
    px: 2,
  },

  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },

  iconBtn: (isDark) => ({
    color: 'text.primary',
    bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
    p: 0.9,
  }),

  citySelectorBtn: (isDark) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    cursor: 'pointer',
    py: 0.5,
    px: 1,
    borderRadius: 2,
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
    },
  }),

  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.8,
  },
};
