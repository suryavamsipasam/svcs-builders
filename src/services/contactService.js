import { Linking, Alert, Platform } from 'react-native';
import { SVCS_COMPANY_INFO } from '../data/projectsData';

export const openWhatsApp = async (customMessage) => {
  const phone = SVCS_COMPANY_INFO.whatsapp;
  const message = customMessage || `Hello Sri Venkateswara Constructions, I am interested in your projects and landowner partnership.`;
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;

  try {
    const supported = await Linking.canOpenURL(whatsappUrl);
    if (supported || Platform.OS === 'web') {
      await Linking.openURL(whatsappUrl);
    } else {
      Alert.alert(
        'WhatsApp Not Available',
        `Please contact us directly by phone: ${SVCS_COMPANY_INFO.phone}`
      );
    }
  } catch (err) {
    if (Platform.OS === 'web') {
      window.open(whatsappUrl, '_blank');
    } else {
      Alert.alert('Notice', `Please call our office at ${SVCS_COMPANY_INFO.phone}`);
    }
  }
};

export const dialPhoneNumber = async () => {
  const cleanNumber = SVCS_COMPANY_INFO.phone.replace(/[^0-9+]/g, '');
  const telUrl = `tel:${cleanNumber}`;

  try {
    const supported = await Linking.canOpenURL(telUrl);
    if (supported || Platform.OS === 'web') {
      await Linking.openURL(telUrl);
    } else {
      Alert.alert('Phone Call', `Office line: ${SVCS_COMPANY_INFO.phone}`);
    }
  } catch (err) {
    Alert.alert('Phone Call', `Office line: ${SVCS_COMPANY_INFO.phone}`);
  }
};

export const openMapDirections = async () => {
  const query = encodeURIComponent(`${SVCS_COMPANY_INFO.name}, ${SVCS_COMPANY_INFO.address}`);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  try {
    await Linking.openURL(mapUrl);
  } catch (err) {
    Alert.alert('Location', SVCS_COMPANY_INFO.address);
  }
};
