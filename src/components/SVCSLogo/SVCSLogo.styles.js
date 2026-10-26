import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexShrink: 1,
    maxWidth: '100%',
  },
  iconBox: {
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    shadowColor: theme.colors.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
    flexShrink: 0,
  },
  towersWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '65%',
    gap: 3,
  },
  tower: {
    backgroundColor: theme.colors.accent,
    borderRadius: 1.5,
  },
  towerLeft: {
    width: 6,
    height: '65%',
    opacity: 0.85,
  },
  towerCenter: {
    width: 8,
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#D4AF37',
  },
  spireDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: '#FFFFFF',
    marginTop: -4,
  },
  towerRight: {
    width: 6,
    height: '65%',
    opacity: 0.85,
  },
  foundationLine: {
    width: '65%',
    height: 2,
    backgroundColor: theme.colors.accent,
    marginTop: 3,
    borderRadius: 1,
  },
  textContainer: {
    justifyContent: 'center',
    flexShrink: 1,
  },
  primaryName: {
    fontFamily: theme.typography.fontSerif,
    fontWeight: '800',
    letterSpacing: 1.2,
    lineHeight: 18,
  },
  subRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  subName: {
    fontFamily: theme.typography.fontSans,
    fontWeight: '900',
    letterSpacing: 2.2,
  },
  goldDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: theme.colors.accent,
  },
  buildersTag: {
    fontFamily: theme.typography.fontSans,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  tagline: {
    fontStyle: 'italic',
    marginTop: 2,
    letterSpacing: 0.3,
  },
});

export default styles;
