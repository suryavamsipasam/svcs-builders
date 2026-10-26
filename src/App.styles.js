import { StyleSheet, Platform } from 'react-native';
import { theme } from './theme/theme';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: theme.colors.backgroundSubtle,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  deviceFrame: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.background,
    overflow: 'hidden',
  },
  deviceFrameDesktop: {
    maxWidth: 440,
    maxHeight: 920,
    borderRadius: Platform.OS === 'web' ? 24 : 0,
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16,
    shadowRadius: 28,
    elevation: 12,
  },
  tabsContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between',
    width: '100%',
  },
  screenBody: {
    flex: 1,
    width: '100%',
  },
});

export default styles;
