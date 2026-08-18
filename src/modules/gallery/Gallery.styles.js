export const galleryStyles = {
  container: {
    pb: 6,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },

  photosGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(2, 1fr)',
      sm: 'repeat(3, 1fr)',
      md: 'repeat(4, 1fr)',
    },
    gap: 2.5,
  },

  photoCard: (idx) => ({
    position: 'relative',
    height: { xs: 160, sm: 200, md: 240 },
    borderRadius: 3.5,
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 12px 28px rgba(0,0,0,0.3)',
    },
  }),

  videoBox: {
    position: 'relative',
    height: { xs: 260, sm: 380, md: 480 },
    borderRadius: 4,
    overflow: 'hidden',
  },

  videoOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  panoBox: (isDragging, bgImage, rotation) => ({
    height: { xs: 320, sm: 420, md: 520 },
    borderRadius: 4,
    cursor: isDragging ? 'grabbing' : 'grab',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: `${rotation * 3}px center`,
    transition: isDragging ? 'none' : 'background-position 0.2s ease',
  }),
};
