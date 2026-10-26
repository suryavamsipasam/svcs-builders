import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../../theme/theme';
import styles from './StatusFilterCard.styles';

export const StatusFilterCard = ({
  label,
  count,
  subtitle,
  isActive = false,
  color = theme.colors.primary,
  linkText,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        isActive && [styles.cardActive, { borderColor: color }],
        !isActive && { borderTopColor: color, borderTopWidth: 3 },
      ]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View
        style={[
          styles.countCircle,
          isActive ? { backgroundColor: color } : { backgroundColor: 'rgba(23, 61, 50, 0.08)' },
        ]}
      >
        <Text
          style={[
            styles.countText,
            isActive ? { color: '#FFFFFF' } : { color: color },
          ]}
        >
          {count}
        </Text>
      </View>

      <Text
        style={[styles.label, isActive && styles.labelActive]}
        numberOfLines={1}
      >
        {label}
      </Text>

      {subtitle ? (
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      ) : null}

      {linkText ? (
        <Text style={[styles.linkText, { color }]} numberOfLines={1}>
          {linkText}
        </Text>
      ) : null}

      {isActive && (
        <View style={[styles.activeIndicator, { backgroundColor: color }]} />
      )}
    </TouchableOpacity>
  );
};

export default StatusFilterCard;
