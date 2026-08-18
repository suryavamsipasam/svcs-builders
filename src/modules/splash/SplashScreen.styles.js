export const splashStyles = {
  container: {
    minHeight: '100%',
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 3,
    py: 6,
    background: 'linear-gradient(180deg, #07111E 0%, #0A192F 45%, #08111F 100%)',
    color: '#FFFFFF',
    overflow: 'hidden',
  },

  bgImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '65%',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.35,
    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
  },

  ambientGlow: {
    position: 'absolute',
    top: '20%',
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(212, 160, 23, 0.25) 0%, rgba(212, 160, 23, 0) 70%)',
    filter: 'blur(30px)',
    pointerEvents: 'none',
  },

  centerCard: {
    p: 2.5,
    borderRadius: 4,
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(212, 160, 23, 0.3)',
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6)',
  },

  ctaButton: {
    py: 1.8,
    fontSize: '1rem',
    fontWeight: 800,
    letterSpacing: '0.04em',
    background: 'linear-gradient(135deg, #F9D77E 0%, #D4A017 50%, #A87108 100%)',
    color: '#0B192C',
    boxShadow: '0 8px 24px rgba(212, 160, 23, 0.45)',
    borderRadius: 3,
    '&:hover': {
      background: 'linear-gradient(135deg, #FFF1B8 0%, #E5A93C 50%, #BD8210 100%)',
      boxShadow: '0 10px 28px rgba(212, 160, 23, 0.6)',
    },
  },
};
