import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ContactButtons.styles';
import { openWhatsApp, dialPhoneNumber } from '../../../services/contactService';

export const ContactButtons = ({
  onWhatsApp,
  onCall,
  customWhatsAppText,
  whatsAppLabel = 'Chat on WhatsApp',
  callLabel = 'Call Office',
  style,
}) => {
  const handleWhatsApp = () => {
    if (onWhatsApp) {
      onWhatsApp();
    } else {
      openWhatsApp(customWhatsAppText);
    }
  };

  const handleCall = () => {
    if (onCall) {
      onCall();
    } else {
      dialPhoneNumber();
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.whatsappBtn}
        onPress={handleWhatsApp}
        activeOpacity={0.85}
      >
        <Text style={styles.icon}>💬</Text>
        <Text style={styles.whatsappText}>{whatsAppLabel}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.callBtn}
        onPress={handleCall}
        activeOpacity={0.85}
      >
        <Text style={styles.icon}>📞</Text>
        <Text style={styles.callText}>{callLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactButtons;
