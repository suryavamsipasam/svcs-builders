import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { openWhatsApp } from '../../services/contactService';
import styles from './ServicesScreen.styles';

export const ServicesScreen = () => {
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [landLocation, setLandLocation] = useState('');
  const [landExtent, setLandExtent] = useState('');
  const [roadWidth, setRoadWidth] = useState('40 Ft Road');
  const [landFacing, setLandFacing] = useState('East Facing');
  const [estFlats, setEstFlats] = useState('20');

  const handleLandSubmit = () => {
    if (!ownerName.trim() || !ownerPhone.trim() || !landLocation.trim()) {
      Alert.alert(
        'Missing Information',
        'Please enter your name, contact phone number, and land location so our leadership team can contact you.'
      );
      return;
    }

    const message = `*40/60 Landowner Partnership Inquiry*%0A------------------------------------%0A*Landowner Name:* ${ownerName}%0A*Phone Number:* ${ownerPhone}%0A*Land Location:* ${landLocation}%0A*Plot Area / Extent:* ${landExtent || 'Not specified'}%0A*Road Width:* ${roadWidth}%0A*Facing:* ${landFacing}%0A------------------------------------%0APlease evaluate feasibility for joint development.`;

    openWhatsApp(message);
  };

  const parsedFlats = parseInt(estFlats, 10) || 0;
  const landownerUnits = Math.round(parsedFlats * 0.4);
  const svcsUnits = parsedFlats - landownerUnits;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services & Partnerships</Text>
        <Text style={styles.headerSubtitle}>
          Direct land purchase, 40/60 joint development, and luxury villa turnkey projects.
        </Text>
      </View>

      {/* Core Business Model Banner */}
      <View style={styles.coreModelBanner}>
        <View style={styles.modelTag}>
          <Text style={styles.modelTagText}>OUR CORE BUSINESS</Text>
        </View>
        <Text style={styles.coreModelTitle}>Direct Land Purchase & Apartment Construction</Text>
        <Text style={styles.coreModelDesc}>
          At Sri Venkateswara Constructions, we purchase prime land outright and execute high-rise residential apartment communities through our self-funded construction excellence.
        </Text>
      </View>

      {/* 40 / 60 Landowner Partnership Model */}
      <View style={styles.partnershipCard}>
        <View style={styles.flagshipTag}>
          <Text style={styles.flagshipTagText}>PARTNERSHIP OPPORTUNITY</Text>
        </View>
        <Text style={styles.partnershipTitle}>40 / 60 Landowner Joint Development</Text>
        <Text style={styles.partnershipSubtitle}>
          Maximize your land's true worth without investing a single rupee in construction.
        </Text>

        <View style={styles.ratioSplitContainer}>
          <View style={styles.ratioBox}>
            <Text style={styles.ratioPercent}>40%</Text>
            <Text style={styles.ratioRole}>LANDOWNER SHARE</Text>
            <Text style={styles.ratioDetails}>
              40% of the total revenue or approved built-up flats handed over with clear occupancy certificate.
            </Text>
          </View>

          <View style={styles.ratioDivider} />

          <View style={styles.ratioBox}>
            <Text style={styles.ratioPercent}>60%</Text>
            <Text style={styles.ratioRole}>SVCS BUILDER SHARE</Text>
            <Text style={styles.ratioDetails}>
              We fund 100% of municipal approvals, architectural plans, materials, labor, marketing, and sales.
            </Text>
          </View>
        </View>

        {/* Step-by-Step Partnership Process */}
        <Text style={styles.processHeader}>How the 40/60 Partnership Works:</Text>
        <View style={styles.stepList}>
          <View style={styles.stepRow}>
            <View style={styles.stepNumberBadge}><Text style={styles.stepNumberText}>1</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepTitle}>Site Inspection & Legal Title Due Diligence</Text>
              <Text style={styles.stepSub}>We verify revenue records, survey numbers, and municipal master zoning.</Text>
            </View>
          </View>

          <View style={styles.stepRow}>
            <View style={styles.stepNumberBadge}><Text style={styles.stepNumberText}>2</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepTitle}>Architectural Planning & Municipal Sanction</Text>
              <Text style={styles.stepSub}>SVCS bears 100% of the cost to design floor plans and obtain RERA & municipal approvals.</Text>
            </View>
          </View>

          <View style={styles.stepRow}>
            <View style={styles.stepNumberBadge}><Text style={styles.stepNumberText}>3</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepTitle}>Turnkey Construction & Quality Execution</Text>
              <Text style={styles.stepSub}>Earthquake-resistant RCC shear-wall construction with weekly photographic progress updates.</Text>
            </View>
          </View>

          <View style={styles.stepRow}>
            <View style={styles.stepNumberBadge}><Text style={styles.stepNumberText}>4</Text></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.stepTitle}>Revenue or Flat Allocation Handover</Text>
              <Text style={styles.stepSub}>40% of all apartments or proceeds distributed directly to the landowner as per registered agreement.</Text>
            </View>
          </View>
        </View>

        {/* Interactive 40/60 Estimator */}
        <View style={styles.calcContainer}>
          <Text style={styles.calcTitle}>Interactive 40/60 Yield Calculator</Text>
          <Text style={styles.calcSub}>Estimate flat sharing for your proposed project:</Text>
          <View style={styles.calcInputRow}>
            <Text style={styles.calcInputLabel}>Total Proposed Flats:</Text>
            <TextInput
              style={styles.calcInput}
              keyboardType="number-pad"
              value={estFlats}
              onChangeText={setEstFlats}
            />
          </View>
          <View style={styles.calcResultRow}>
            <View style={styles.calcResultBox}>
              <Text style={styles.calcResultNum}>{landownerUnits} Flats</Text>
              <Text style={styles.calcResultLabel}>Your Share (40%)</Text>
            </View>
            <View style={styles.calcResultBox}>
              <Text style={styles.calcResultNum}>{svcsUnits} Flats</Text>
              <Text style={styles.calcResultLabel}>SVCS Share (60%)</Text>
            </View>
          </View>
        </View>

        {/* Submit Land Form */}
        <View style={styles.landFormCard}>
          <Text style={styles.formCardTitle}>Submit Land for Free Valuation</Text>
          <Text style={styles.formCardSub}>
            Direct review by Managing Partner Mr. Venkat Rao Pasam.
          </Text>

          <TextInput
            style={styles.formInput}
            placeholder="Landowner / Representative Name *"
            placeholderTextColor="#8E9A93"
            value={ownerName}
            onChangeText={setOwnerName}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Mobile Number (WhatsApp Preferred) *"
            placeholderTextColor="#8E9A93"
            keyboardType="phone-pad"
            value={ownerPhone}
            onChangeText={setOwnerPhone}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Land Location / Landmark (e.g. Kokapet, Mokila) *"
            placeholderTextColor="#8E9A93"
            value={landLocation}
            onChangeText={setLandLocation}
          />
          <TextInput
            style={styles.formInput}
            placeholder="Plot Size (e.g. 500 Sq. Yards or 2 Acres)"
            placeholderTextColor="#8E9A93"
            value={landExtent}
            onChangeText={setLandExtent}
          />

          <View style={styles.optionsRow}>
            {['30 Ft Road', '40 Ft Road', '60+ Ft Road'].map((rd) => (
              <TouchableOpacity
                key={rd}
                style={[styles.pillOption, roadWidth === rd && styles.pillOptionActive]}
                onPress={() => setRoadWidth(rd)}
              >
                <Text style={[styles.pillOptionText, roadWidth === rd && styles.pillOptionTextActive]}>
                  {rd}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.optionsRow}>
            {['East Facing', 'West Facing', 'North Facing'].map((face) => (
              <TouchableOpacity
                key={face}
                style={[styles.pillOption, landFacing === face && styles.pillOptionActive]}
                onPress={() => setLandFacing(face)}
              >
                <Text style={[styles.pillOptionText, landFacing === face && styles.pillOptionTextActive]}>
                  {face}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.submitProposalBtn}
            onPress={handleLandSubmit}
            activeOpacity={0.88}
          >
            <Text style={styles.submitProposalBtnText}>
              Submit Land Proposal on WhatsApp →
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Service 2: Luxury Villa Construction */}
      <View style={styles.otherServiceCard}>
        <View style={styles.serviceIconPill}>
          <Text style={styles.serviceIconText}>🏡</Text>
        </View>
        <Text style={styles.otherServiceTitle}>Luxury Villa Construction</Text>
        <Text style={styles.otherServiceDesc}>
          Have your own plot in a gated layout or private parcel? We construct bespoke luxury triplex villas from soil testing to interior turnkey finishes.
        </Text>
        <View style={styles.featurePoints}>
          <Text style={styles.featurePoint}>• Architectural 3D Elevation & Vastu Floor Plans</Text>
          <Text style={styles.featurePoint}>• Premium Italian Marble & Teak Wood Finishes</Text>
          <Text style={styles.featurePoint}>• Private Swimming Pool & Landscaped Terrace Decks</Text>
        </View>
        <TouchableOpacity
          style={styles.serviceActionButton}
          onPress={() =>
            openWhatsApp(
              'Hello Sri Venkateswara Constructions, I have a plot and would like to consult on Luxury Villa Construction.'
            )
          }
          activeOpacity={0.85}
        >
          <Text style={styles.serviceActionText}>Request Villa Consultation →</Text>
        </TouchableOpacity>
      </View>

      {/* Service 3: Commercial & Custom Projects */}
      <View style={styles.otherServiceCard}>
        <View style={styles.serviceIconPill}>
          <Text style={styles.serviceIconText}>🏢</Text>
        </View>
        <Text style={styles.otherServiceTitle}>Commercial Complexes & Joint Ventures</Text>
        <Text style={styles.otherServiceDesc}>
          Develop high-yield shopping complexes, corporate office spaces, and mixed-use retail centers on prime main-road commercial plots.
        </Text>
        <TouchableOpacity
          style={styles.serviceActionButton}
          onPress={() =>
            openWhatsApp(
              'Hello Sri Venkateswara Constructions, I would like to discuss a Commercial Joint Venture / Project tie-up.'
            )
          }
          activeOpacity={0.85}
        >
          <Text style={styles.serviceActionText}>Discuss Commercial Venture →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ServicesScreen;
