import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 18,
    borderRadius: theme.radius.lg,
    borderWidth: 1.5,
    borderColor: theme.colors.accent,
    marginBottom: 20,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.accent,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    marginBottom: 8,
  },
  badgeText: {
    color: theme.colors.primaryDark,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    fontFamily: theme.typography.fontSerif,
  },
  description: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.88)',
    lineHeight: 19,
    marginVertical: 10,
  },
  boldGold: {
    color: theme.colors.accentBright,
    fontWeight: '800',
  },
  splitRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    borderRadius: theme.radius.md,
    padding: 14,
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'rgba(182, 154, 90, 0.3)',
  },
  splitBox: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
  },
  splitNumber: {
    fontSize: 26,
    fontWeight: '900',
    color: theme.colors.accentBright,
  },
  splitLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 2,
    letterSpacing: 0.8,
  },
  splitDesc: {
    fontSize: 9,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: 2,
  },
  splitDivider: {
    width: 1,
    height: 46,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 8,
  },
  ctaButton: {
    backgroundColor: theme.colors.accent,
    paddingVertical: 13,
    borderRadius: theme.radius.sm,
    alignItems: 'center',
    marginTop: 4,
  },
  ctaText: {
    color: theme.colors.primaryDark,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
});

export default styles;
