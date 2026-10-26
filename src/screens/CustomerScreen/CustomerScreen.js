import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SVCS_COMPANY_INFO } from '../../data/projectsData';
import { openWhatsApp, openMapDirections } from '../../services/contactService';
import { ContactButtons } from '../../components/common/ContactButtons/ContactButtons';
import styles from './CustomerScreen.styles';

export const CustomerScreen = () => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Sri Residency (Kokapet)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    'Sri Residency (Kokapet)',
    'Skyline Heights (Gachibowli)',
    'Sri Classic Villas (Mokila)',
    '40/60 Land Partnership',
    'Luxury Villa Turnkey',
    'General Inquiry',
  ];

  const handleSubmit = () => {
    if (!customerName.trim() || !phone.trim()) {
      Alert.alert('Required Fields', 'Please enter your Name and Mobile Number.');
      return;
    }

    const leadText = `*Customer Inquiry - Sri Venkateswara Constructions*%0A------------------------------------%0A*Name:* ${customerName}%0A*Phone:* ${phone}%0A*Email:* ${email || 'Not provided'}%0A*Interested In:* ${interest}%0A*Message:* ${message || 'Please call me with project brochure and pricing.'}%0A------------------------------------`;

    openWhatsApp(leadText);
    setSubmitted(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Customer Desk & Contact</Text>
        <Text style={styles.headerSubtitle}>
          Connect directly with Sri Venkateswara Constructions leadership and sales team.
        </Text>
      </View>

      {/* Owner & Executive Office Card */}
      <View style={styles.ownerCard}>
        <View style={styles.ownerTopRow}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>SVCS</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.ownerName}>{SVCS_COMPANY_INFO.name}</Text>
            <Text style={styles.ownerDesignation}>Executive Management & Leadership</Text>
            <Text style={styles.ownerPartner}>{SVCS_COMPANY_INFO.managingPartner}</Text>
          </View>
        </View>

        <View style={styles.ownerDivider} />

        {/* Quick Connect Actions using common ContactButtons */}
        <ContactButtons />
      </View>

      {/* Customer Entry Form */}
      <View style={styles.formCard}>
        <Text style={styles.formTitle}>Enter Your Details for Instant Callback</Text>
        <Text style={styles.formSub}>
          Our project manager will respond with pricing, floor plans, and site visit options.
        </Text>

        {submitted ? (
          <View style={styles.successBox}>
            <Text style={styles.successIcon}>✓</Text>
            <Text style={styles.successHeading}>Inquiry Sent Successfully!</Text>
            <Text style={styles.successSub}>
              Thank you {customerName}. Our sales director has received your message on WhatsApp and will connect with you shortly.
            </Text>
            <TouchableOpacity
              style={styles.sendAnotherBtn}
              onPress={() => setSubmitted(false)}
            >
              <Text style={styles.sendAnotherText}>Submit Another Inquiry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <TextInput
              style={styles.input}
              placeholder="Your Full Name *"
              placeholderTextColor="#8E9A93"
              value={customerName}
              onChangeText={setCustomerName}
            />

            <TextInput
              style={styles.input}
              placeholder="Mobile Number (WhatsApp Preferred) *"
              placeholderTextColor="#8E9A93"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

            <TextInput
              style={styles.input}
              placeholder="Email Address (Optional)"
              placeholderTextColor="#8E9A93"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.inputSectionLabel}>Select Project or Service of Interest:</Text>
            <View style={styles.interestChipsGrid}>
              {interestOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={[
                    styles.interestChip,
                    interest === opt && styles.interestChipActive,
                  ]}
                  onPress={() => setInterest(opt)}
                >
                  <Text
                    style={[
                      styles.interestChipText,
                      interest === opt && styles.interestChipTextActive,
                    ]}
                  >
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Your Message, questions, or preferred visit time..."
              placeholderTextColor="#8E9A93"
              multiline
              numberOfLines={3}
              value={message}
              onChangeText={setMessage}
            />

            <TouchableOpacity
              style={styles.submitLeadButton}
              onPress={handleSubmit}
              activeOpacity={0.88}
            >
              <Text style={styles.submitLeadText}>Submit Details via WhatsApp →</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Office Address & Location Card */}
      <View style={styles.officeCard}>
        <View style={styles.officeHeaderRow}>
          <Text style={styles.officeCardTitle}>🏢 Registered Corporate Office</Text>
          <TouchableOpacity onPress={openMapDirections}>
            <Text style={styles.directionsLink}>Map Directions ↗</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.addressLine}>{SVCS_COMPANY_INFO.address}</Text>
        <Text style={styles.landmarkLine}>Landmark: {SVCS_COMPANY_INFO.landmark}</Text>

        <View style={styles.timingsRow}>
          <Text style={styles.timingLabel}>Office Hours:</Text>
          <Text style={styles.timingValue}>{SVCS_COMPANY_INFO.workingHoursWeekday}</Text>
          <Text style={styles.timingValue}>{SVCS_COMPANY_INFO.workingHoursSunday}</Text>
        </View>

        <View style={styles.contactDetailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Direct Line</Text>
            <Text style={styles.detailValue}>{SVCS_COMPANY_INFO.phoneDisplay}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Email</Text>
            <Text style={styles.detailValue}>{SVCS_COMPANY_INFO.email}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomerScreen;
