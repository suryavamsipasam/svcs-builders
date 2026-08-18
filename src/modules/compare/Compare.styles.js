export const compareStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    maxWidth: '1000px',
    mx: 'auto',
    width: '100%',
  },

  flatCardA: (isDark) => ({
    p: 2.5,
    borderRadius: 3,
    textAlign: 'center',
    backgroundColor: isDark ? 'rgba(212,160,23,0.1)' : '#FEF8E7',
    border: '2px solid #D4A017',
  }),

  flatCardB: (isDark) => ({
    p: 2.5,
    borderRadius: 3,
    textAlign: 'center',
    backgroundColor: isDark ? '#0F1B2D' : '#F1F5F9',
    border: `1.5px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#CBD5E1'}`,
  }),

  tableRowCell: (isDark) => ({
    p: 2,
    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'}`,
  }),
};
