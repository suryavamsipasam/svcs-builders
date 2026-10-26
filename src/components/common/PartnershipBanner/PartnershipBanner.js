import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './PartnershipBanner.styles';

export const PartnershipBanner = ({
  badgeLabel = 'JOINT DEVELOPMENT MODEL',
  title = 'Have Vacant Land? Partner with SVCS',
  description = 'We construct luxury apartments and villas on your land. Transparent revenue sharing: 40% to Landowner & 60% to SVCS Builders.',
  ctaText = 'Submit Land Details for Valuation →',
  showSplitGraphic = false,
  onPressCta,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badgeLabel}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>{description}</Text>

      {showSplitGraphic && (
        <View style={styles.splitRow}>
          <View style={styles.splitBox}>
            <Text style={styles.splitNumber}>40%</Text>
            <Text style={styles.splitLabel}>LANDOWNER</Text>
            <Text style={styles.splitDesc}>Revenue / Units</Text>
          </View>

          <View style={styles.splitDivider} />

          <View style={styles.splitBox}>
            <Text style={styles.splitNumber}>60%</Text>
            <Text style={styles.splitLabel}>SVCS BUILDER</Text>
            <Text style={styles.splitDesc}>100% Investment</Text>
          </View>
        </View>
      )}

      {ctaText && onPressCta && (
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={onPressCta}
          activeOpacity={0.88}
        >
          <Text style={styles.ctaText}>{ctaText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PartnershipBanner;
