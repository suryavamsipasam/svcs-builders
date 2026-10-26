import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../../theme/theme';
import { SVCSLogo } from '../../components/SVCSLogo/SVCSLogo';
import { SectionHeader } from '../../components/common/SectionHeader/SectionHeader';
import { ProjectCard } from '../../components/common/ProjectCard/ProjectCard';
import { StatusFilterCard } from '../../components/common/StatusFilterCard/StatusFilterCard';
import { PartnershipBanner } from '../../components/common/PartnershipBanner/PartnershipBanner';
import { SVCS_COMPANY_INFO, PROJECTS_DATA } from '../../data/projectsData';
import { openWhatsApp, dialPhoneNumber } from '../../services/contactService';
import styles from './HomeScreen.styles';

export const HomeScreen = ({
  onNavigateToProjects,
  onSelectProject,
  onNavigateToServices,
  onNavigateToContact,
}) => {
  const ongoingProjects = PROJECTS_DATA.filter((p) => p.status === 'Ongoing');
  const completedProjects = PROJECTS_DATA.filter((p) => p.status === 'Completed');
  const futureProjects = PROJECTS_DATA.filter((p) => p.status === 'Future');
  const featuredProject = PROJECTS_DATA.find((p) => p.featured) || PROJECTS_DATA[0];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Top Header Bar */}
      <View style={styles.topHeader}>
        <SVCSLogo size={38} isDark={false} showTagline={false} />

        <View style={styles.headerActions}>
          <TouchableOpacity
            style={styles.headerIconButton}
            onPress={dialPhoneNumber}
            activeOpacity={0.7}
          >
            <Text style={styles.headerActionIcon}>📞</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.headerIconButton, styles.whatsappHeaderBtn]}
            onPress={() =>
              openWhatsApp(
                'Hello SVCS, I would like to inquire about your ongoing projects.'
              )
            }
            activeOpacity={0.7}
          >
            <Text style={styles.headerActionIcon}>💬</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* City Location & Welcome Tag */}
      <View style={styles.greetingSection}>
        <View style={styles.locationPill}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>Hyderabad • IT Corridor & Prime Hubs</Text>
        </View>
        <Text style={styles.mainGreeting}>Building Your Future, Together.</Text>
        <Text style={styles.subGreeting}>
          Explore approved gated residences, discover ongoing construction, or partner your land for mutual growth.
        </Text>
      </View>

      {/* Featured Ongoing Project Section using common ProjectCard */}
      <View style={styles.featuredSection}>
        <SectionHeader
          title="Featured Project"
          actionText="View All Ongoing →"
          onActionPress={() => onNavigateToProjects('Ongoing')}
        />

        <ProjectCard
          project={featuredProject}
          variant="featured"
          ctaText="Explore Floor Plans →"
          onPress={() => onSelectProject(featuredProject)}
        />
      </View>

      {/* 3 Quick Status Filter Shortcuts using common StatusFilterCard */}
      <View style={styles.quickShortcutsSection}>
        <SectionHeader title="Browse by Project Status" />
        <View style={styles.statusCardsRow}>
          <StatusFilterCard
            label="Ongoing"
            count={ongoingProjects.length}
            subtitle="Active Construction"
            color="#1B8755"
            linkText="View Projects →"
            onPress={() => onNavigateToProjects('Ongoing')}
          />

          <StatusFilterCard
            label="Completed"
            count={completedProjects.length}
            subtitle="Delivered Landmarks"
            color={theme.colors.primary}
            linkText="View Projects →"
            onPress={() => onNavigateToProjects('Completed')}
          />

          <StatusFilterCard
            label="Future"
            count={futureProjects.length}
            subtitle="Pre-Launch Villas"
            color={theme.colors.accent}
            linkText="View Projects →"
            onPress={() => onNavigateToProjects('Future')}
          />
        </View>
      </View>

      {/* 40 / 60 Landowner Partnership Spotlight using common PartnershipBanner */}
      <PartnershipBanner
        badgeLabel="JOINT DEVELOPMENT MODEL"
        title="Have Vacant Land? Partner with SVCS"
        description="We construct luxury apartments and villas on your land. Transparent revenue sharing: 40% to Landowner & 60% to SVCS Builders. We fund 100% of municipal approvals and construction."
        ctaText="Submit Land Details for Valuation →"
        onPressCta={onNavigateToServices}
      />

      {/* What We Do / Core Pillars */}
      <View style={styles.pillarsSection}>
        <SectionHeader title="What We Do" />
        <View style={styles.pillarsGrid}>
          <View style={styles.pillarBox}>
            <Text style={styles.pillarIcon}>🏢</Text>
            <Text style={styles.pillarTitle}>Apartment Construction</Text>
            <Text style={styles.pillarDesc}>
              Modern high-rise residential complexes with 100% Vastu and world-class amenities.
            </Text>
          </View>

          <View style={styles.pillarBox}>
            <Text style={styles.pillarIcon}>🏡</Text>
            <Text style={styles.pillarTitle}>Luxury Villa Turnkey</Text>
            <Text style={styles.pillarDesc}>
              Bespoke architect-designed villas tailored to your personal aesthetic and elevation.
            </Text>
          </View>
        </View>
      </View>

      {/* Why Choose SVCS? (Trust Badges) */}
      <View style={styles.trustSection}>
        <SectionHeader title="Why Sri Venkateswara Constructions?" />
        <View style={styles.trustList}>
          <View style={styles.trustItem}>
            <Text style={styles.trustCheck}>✓</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.trustHeading}>100% Vastu & Clear Legal Titles</Text>
              <Text style={styles.trustDetail}>
                Every property is legally vetted with zero disputes and pure Vastu compliance.
              </Text>
            </View>
          </View>

          <View style={styles.trustItem}>
            <Text style={styles.trustCheck}>✓</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.trustHeading}>High-Grade Construction Materials</Text>
              <Text style={styles.trustDetail}>
                Tata Tiscon 550D TMT steel, UltraTech cement, and premium branded sanitary fittings.
              </Text>
            </View>
          </View>

          <View style={styles.trustItem}>
            <Text style={styles.trustCheck}>✓</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.trustHeading}>On-Time Handover Guarantee</Text>
              <Text style={styles.trustDetail}>
                Transparent milestone tracking and penalty-backed delivery timelines.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Track Record Stats */}
      <View style={styles.statsBanner}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{SVCS_COMPANY_INFO.experienceYears}</Text>
          <Text style={styles.statLabel}>Years Industry Trust</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{SVCS_COMPANY_INFO.projectsCompleted}</Text>
          <Text style={styles.statLabel}>Projects Delivered</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>{SVCS_COMPANY_INFO.happyFamilies}</Text>
          <Text style={styles.statLabel}>Happy Homeowners</Text>
        </View>
      </View>

      {/* Direct Contact Banner */}
      <View style={styles.contactDeskBanner}>
        <Text style={styles.contactDeskTitle}>
          Need a Site Visit or Investment Consultation?
        </Text>
        <Text style={styles.contactDeskSub}>
          Talk directly with our Managing Partner and senior architectural team.
        </Text>
        <TouchableOpacity
          style={styles.contactDeskBtn}
          onPress={onNavigateToContact}
          activeOpacity={0.88}
        >
          <Text style={styles.contactDeskBtnText}>Contact Owner Desk →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
