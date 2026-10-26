import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './SectionHeader.styles';

export const SectionHeader = ({
  title,
  subtitle,
  actionText,
  onActionPress,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      {actionText && onActionPress && (
        <TouchableOpacity onPress={onActionPress} activeOpacity={0.75}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
