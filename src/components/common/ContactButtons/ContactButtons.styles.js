import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  whatsappBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25D366',
    paddingVertical: 13,
    borderRadius: theme.radius.md,
    gap: 6,
    shadowColor: '#25D366',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  whatsappText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
  },
  callBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    paddingVertical: 13,
    borderRadius: theme.radius.md,
    gap: 6,
  },
  callText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
  },
  icon: {
    fontSize: 15,
  },
});

export default styles;
