import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './SpecChip.styles';

export const SpecChip = ({ label, icon, isActive = false, onPress }) => {
  const Component = onPress ? TouchableOpacity : TouchableOpacity;

  return (
    <Component
      style={[styles.chip, isActive && styles.chipActive]}
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.75}
    >
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
        {label}
      </Text>
    </Component>
  );
};

export default SpecChip;
