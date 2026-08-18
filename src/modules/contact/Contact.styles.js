export const contactStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  desktopLayout: {
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
    gap: 4,
    alignItems: 'start',
  },

  channelCard: {
    p: 2,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    },
  },

  channelIconBox: (bg, color) => ({
    width: 44,
    height: 44,
    borderRadius: 2.5,
    backgroundColor: bg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: color,
  }),

  callbackForm: {
    p: { xs: 3, md: 4 },
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
};
