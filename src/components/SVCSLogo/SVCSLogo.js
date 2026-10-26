import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../../theme/theme';
import styles from './SVCSLogo.styles';

export const SVCSLogo = ({
  size = 46,
  variant = 'full',
  isDark = true,
  showTagline = true,
}) => {
  return (
    <View style={styles.container}>
      {/* Architectural Emblem Icon */}
      <View
        style={[
          styles.iconBox,
          {
            width: size,
            height: size,
            borderRadius: size * 0.28,
            backgroundColor: isDark ? 'rgba(182, 154, 90, 0.16)' : theme.colors.primary,
            borderColor: theme.colors.accent,
          },
        ]}
      >
        <View style={styles.towersWrapper}>
          <View style={[styles.tower, styles.towerLeft]} />
          <View style={[styles.tower, styles.towerCenter]}>
            <View style={styles.spireDot} />
          </View>
          <View style={[styles.tower, styles.towerRight]} />
        </View>
        <View style={styles.foundationLine} />
      </View>

      {/* Typography Branding */}
      {variant !== 'iconOnly' && (
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.primaryName,
              {
                color: isDark ? '#FFFFFF' : theme.colors.primary,
                fontSize: size * 0.36,
              },
            ]}
          >
            SRI VENKATESWARA
          </Text>

          <View style={styles.subRow}>
            <Text
              style={[
                styles.subName,
                {
                  color: theme.colors.accent,
                  fontSize: size * 0.26,
                },
              ]}
            >
              CONSTRUCTIONS
            </Text>
            <View style={styles.goldDot} />
            <Text
              style={[
                styles.buildersTag,
                {
                  color: isDark ? 'rgba(255, 255, 255, 0.7)' : theme.colors.textSecondary,
                  fontSize: size * 0.22,
                },
              ]}
            >
              BUILDERS
            </Text>
          </View>

          {showTagline && (
            <Text
              style={[
                styles.tagline,
                {
                  color: isDark ? 'rgba(255, 255, 255, 0.75)' : theme.colors.textSecondary,
                  fontSize: size * 0.22,
                },
              ]}
            >
              Building Trust. Creating Homes.
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default SVCSLogo;
