import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.colors.primary,
    fontFamily: theme.typography.fontSerif,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '800',
    color: theme.colors.accent,
    paddingLeft: 8,
  },
});

export default styles;
