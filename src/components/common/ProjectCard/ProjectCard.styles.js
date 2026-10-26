import { StyleSheet } from 'react-native';
import { theme } from '../../../theme/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 16,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  cardFeatured: {
    borderColor: 'rgba(182, 154, 90, 0.45)',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 185,
  },
  imageFeatured: {
    height: 200,
  },
  badgeRow: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.accent,
  },
  statusOngoing: {
    backgroundColor: '#173D32',
  },
  statusCompleted: {
    backgroundColor: '#1B8755',
  },
  statusFuture: {
    backgroundColor: '#8A5A00',
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  secondaryBadge: {
    backgroundColor: 'rgba(245, 240, 230, 0.95)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  secondaryBadgeText: {
    color: theme.colors.primary,
    fontSize: 10,
    fontWeight: '800',
  },
  cardBody: {
    padding: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: theme.colors.primary,
    flex: 1,
    minWidth: 140,
    marginRight: 6,
    fontFamily: theme.typography.fontSerif,
  },
  priceTag: {
    fontSize: 14,
    fontWeight: '900',
    color: theme.colors.accent,
  },
  location: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginTop: 4,
  },
  specRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginVertical: 10,
  },
  snippet: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineHeight: 18,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    paddingTop: 12,
    marginTop: 4,
    gap: 8,
  },
  previewTextRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    flex: 1,
  },
  previewText: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    fontWeight: '600',
  },
  priceBlock: {
    justifyContent: 'center',
  },
  priceLabel: {
    fontSize: 10,
    color: theme.colors.textMuted,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  priceMain: {
    fontSize: 16,
    fontWeight: '900',
    color: theme.colors.primary,
  },
  detailsBtn: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: theme.radius.sm,
  },
  detailsBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});

export default styles;
