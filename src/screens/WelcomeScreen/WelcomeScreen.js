import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { SVCSLogo } from '../../components/SVCSLogo/SVCSLogo';
import styles from './WelcomeScreen.styles';

export const WelcomeScreen = ({ onExplore }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" translucent />
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        }}
        style={styles.heroBackground}
        imageStyle={styles.heroImageStyle}
      >
        <View style={styles.gradientOverlay} />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Top Company Branding Section */}
          <View style={styles.topHeader}>
            <View style={styles.brandGlassCard}>
              <SVCSLogo size={48} isDark={true} variant="full" showTagline={true} />
            </View>
          </View>

          {/* Middle Feature Highlights */}
          <View style={styles.middleBadgeContainer}>
            <View style={styles.tagBadge}>
              <Text style={styles.tagBadgeText}>RERA APPROVED DEVELOPER</Text>
            </View>
            <Text style={styles.heroHeading}>
              Building Trust.{'\n'}Creating Homes.
            </Text>
            <Text style={styles.heroDescription}>
              Discover luxury residential apartments, bespoke gated community villas, and high-yield 40/60 landowner joint ventures.
            </Text>
          </View>

          {/* Bottom Actions Card */}
          <View style={styles.bottomSheet}>
            <View style={styles.tickerRow}>
              <View style={styles.tickerItem}>
                <Text style={styles.tickerNum}>15+</Text>
                <Text style={styles.tickerLabel}>Years Trust</Text>
              </View>
              <View style={styles.tickerDivider} />
              <View style={styles.tickerItem}>
                <Text style={styles.tickerNum}>24+</Text>
                <Text style={styles.tickerLabel}>Delivered</Text>
              </View>
              <View style={styles.tickerDivider} />
              <View style={styles.tickerItem}>
                <Text style={styles.tickerNum}>40/60</Text>
                <Text style={styles.tickerLabel}>Land Share</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.exploreButton}
              onPress={onExplore}
              activeOpacity={0.88}
            >
              <Text style={styles.exploreButtonText}>Explore Projects</Text>
              <View style={styles.arrowCircle}>
                <Text style={styles.arrowIcon}>→</Text>
              </View>
            </TouchableOpacity>

            <Text style={styles.licenseFooter}>
              SRI VENKATESWARA CONSTRUCTIONS • HYDERABAD & AP
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
