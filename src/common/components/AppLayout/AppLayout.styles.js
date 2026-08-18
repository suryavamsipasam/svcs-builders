export const appLayoutStyles = {
  rootWrapper: (isDark) => ({
    minHeight: '100vh',
    width: '100%',
    backgroundColor: isDark ? '#08111F' : '#F8FAFC',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background-color 0.3s ease',
  }),

  container: {
    width: '100%',
    maxWidth: '1360px',
    mx: 'auto',
    px: { xs: 2, sm: 3, md: 4 },
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  contentArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    py: { xs: 2, md: 3 },
  },
};
