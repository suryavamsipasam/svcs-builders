import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 0,
    flexShrink: 1,
  },
  cardActive: {
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  countCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    alignSelf: 'center',
  },
  countText: {
    fontSize: 13,
    fontWeight: '900',
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: theme.colors.textSecondary,
    textAlign: 'center',
    maxWidth: '100%',
  },
  labelActive: {
    color: theme.colors.primary,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 9,
    color: theme.colors.textMuted,
    textAlign: 'center',
    marginTop: 2,
    maxWidth: '100%',
  },
  linkText: {
    fontSize: 9,
    fontWeight: '800',
    marginTop: 5,
    textAlign: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
  },
});

export default styles;
