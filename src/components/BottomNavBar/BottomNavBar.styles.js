import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingBottom: Platform.OS === 'ios' ? 24 : 10,
    paddingTop: 8,
    paddingHorizontal: 12,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    minWidth: 0,
    flexShrink: 1,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: theme.radius.md,
  },
  tabButtonActive: {
    backgroundColor: 'rgba(23, 61, 50, 0.06)',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 2,
    opacity: 0.65,
  },
  tabIconActive: {
    opacity: 1,
    transform: [{ scale: 1.1 }],
  },
  tabLabel: {
    fontSize: 10.5,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    letterSpacing: 0.2,
    maxWidth: '100%',
  },
  tabLabelActive: {
    color: theme.colors.primary,
    fontWeight: '800',
  },
  activeGoldDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.accent,
    marginTop: 3,
  },
});

export default styles;
