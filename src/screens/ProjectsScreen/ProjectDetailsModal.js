import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Share,
} from 'react-native';
import { openWhatsApp, dialPhoneNumber } from '../../services/contactService';
import styles from './ProjectDetailsModal.styles';

export const ProjectDetailsModal = ({ project, visible, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlanIdx, setSelectedPlanIdx] = useState(0);

  if (!project) return null;

  const handleShare = async () => {
    try {
      await Share.share({
        title: project.title,
        message: `Check out ${project.title} by Sri Venkateswara Constructions in ${project.location}. Price: ${project.priceFull}. Inquire here!`,
      });
    } catch (err) {
      // ignore
    }
  };

  const handleBookVisit = () => {
    const text = `Hello Sri Venkateswara Constructions, I would like to schedule a site visit for *${project.title}* at *${project.location}*.`;
    openWhatsApp(text);
  };

  const currentPlan = project.floorPlans && project.floorPlans[selectedPlanIdx];

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.safeArea}>
        {/* Sticky Header with Back & Share */}
        <View style={styles.modalHeader}>
          <TouchableOpacity style={styles.headerBtn} onPress={onClose} activeOpacity={0.7}>
            <Text style={styles.headerBtnText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.modalHeaderTitle} numberOfLines={1}>
            {project.title}
          </Text>
          <TouchableOpacity style={styles.headerBtn} onPress={handleShare} activeOpacity={0.7}>
            <Text style={styles.headerBtnText}>Share ↗</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {/* Main Hero Gallery */}
          <View style={styles.heroWrapper}>
            <Image source={{ uri: project.heroImage }} style={styles.heroImage} />
            <View style={styles.heroStatusBadge}>
              <Text style={styles.heroStatusText}>
                {project.status.toUpperCase()} • {project.category}
              </Text>
            </View>
            <View style={styles.heroReraBadge}>
              <Text style={styles.heroReraText}>RERA: {project.reraId}</Text>
            </View>
          </View>

          {/* Title & Key Highlights Card */}
          <View style={styles.mainInfoCard}>
            <Text style={styles.projectMainTitle}>{project.title}</Text>
            <Text style={styles.projectSubtitle}>{project.subtitle}</Text>
            <Text style={styles.locationDetail}>📍 {project.location}</Text>

            <View style={styles.priceRow}>
              <View>
                <Text style={styles.priceLabel}>Price Guide</Text>
                <Text style={styles.priceValue}>{project.priceFull}</Text>
              </View>
              <View style={styles.possessionBadge}>
                <Text style={styles.possessionLabel}>Target Handover</Text>
                <Text style={styles.possessionValue}>{project.possession}</Text>
              </View>
            </View>
          </View>

          {/* Sub Navigation Tabs */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.subTabsContainer}>
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'floorPlans', label: 'Floor Plans' },
              { key: 'drawings', label: 'Drawings & Approvals' },
              { key: 'amenities', label: 'Amenities' },
              { key: 'progress', label: 'Site Progress' },
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <TouchableOpacity
                  key={tab.key}
                  style={[styles.subTabItem, isActive && styles.subTabItemActive]}
                  onPress={() => setActiveTab(tab.key)}
                >
                  <Text style={[styles.subTabLabel, isActive && styles.subTabLabelActive]}>
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <View style={styles.tabContentCard}>
              <Text style={styles.cardSectionHeading}>About the Project</Text>
              <Text style={styles.paragraphText}>{project.about}</Text>

              <Text style={[styles.cardSectionHeading, { marginTop: 18 }]}>Structural Specifications</Text>
              <View style={styles.specsList}>
                {project.specifications &&
                  project.specifications.map((spec, i) => (
                    <View key={i} style={styles.specItem}>
                      <Text style={styles.specLabel}>{spec.label}:</Text>
                      <Text style={styles.specVal}>{spec.val}</Text>
                    </View>
                  ))}
              </View>

              <View style={styles.quickMetricsGrid}>
                <View style={styles.metricCard}>
                  <Text style={styles.metricVal}>{project.totalFloors}</Text>
                  <Text style={styles.metricTitle}>Structure</Text>
                </View>
                <View style={styles.metricCard}>
                  <Text style={styles.metricVal}>{project.totalUnits}</Text>
                  <Text style={styles.metricTitle}>Total Units</Text>
                </View>
                <View style={styles.metricCard}>
                  <Text style={styles.metricVal}>{project.openSpace || '70%'}</Text>
                  <Text style={styles.metricTitle}>Open Space</Text>
                </View>
              </View>
            </View>
          )}

          {/* Tab 2: Floor Plans */}
          {activeTab === 'floorPlans' && (
            <View style={styles.tabContentCard}>
              <Text style={styles.cardSectionHeading}>Vastu Compliant Floor Plans</Text>
              <Text style={styles.paragraphText}>
                Architectural layouts designed with zero dead space and natural cross-ventilation.
              </Text>

              {project.floorPlans && project.floorPlans.length > 0 ? (
                <>
                  <View style={styles.planChipsRow}>
                    {project.floorPlans.map((plan, idx) => (
                      <TouchableOpacity
                        key={plan.id}
                        style={[
                          styles.planSelectorChip,
                          selectedPlanIdx === idx && styles.planSelectorChipActive,
                        ]}
                        onPress={() => setSelectedPlanIdx(idx)}
                      >
                        <Text
                          style={[
                            styles.planSelectorText,
                            selectedPlanIdx === idx && styles.planSelectorTextActive,
                          ]}
                        >
                          {plan.bhk}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>

                  {currentPlan && (
                    <View style={styles.activePlanBox}>
                      <View style={styles.planHeader}>
                        <Text style={styles.planTitle}>{currentPlan.name}</Text>
                        <Text style={styles.planFacing}>{currentPlan.facing}</Text>
                      </View>

                      <View style={styles.diagramCanvas}>
                        <View style={styles.diagramGrid}>
                          <View style={styles.diagramRoomBig}>
                            <Text style={styles.roomText}>Living & Dining</Text>
                            <Text style={styles.roomDimText}>{currentPlan.dimensions?.livingRoom || "22' x 13'"}</Text>
                          </View>
                          <View style={styles.diagramRoomSide}>
                            <View style={styles.roomSmall}>
                              <Text style={styles.roomText}>Kitchen</Text>
                              <Text style={styles.roomDimText}>{currentPlan.dimensions?.kitchen || "10' x 8'"}</Text>
                            </View>
                            <View style={styles.roomSmall}>
                              <Text style={styles.roomText}>Balcony</Text>
                              <Text style={styles.roomDimText}>{currentPlan.dimensions?.balcony || "10' x 4'"}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.diagramBedroomsRow}>
                          <View style={styles.diagramBedMaster}>
                            <Text style={styles.roomText}>Master Bedroom</Text>
                            <Text style={styles.roomDimText}>{currentPlan.dimensions?.masterBedroom || "14' x 12'"}</Text>
                          </View>
                          <View style={styles.diagramBedSec}>
                            <Text style={styles.roomText}>Bedroom 2</Text>
                            <Text style={styles.roomDimText}>{currentPlan.dimensions?.bedroom2 || "12' x 11'"}</Text>
                          </View>
                        </View>
                      </View>

                      <View style={styles.areaRow}>
                        <View style={styles.areaItem}>
                          <Text style={styles.areaNum}>{currentPlan.sqft} Sft</Text>
                          <Text style={styles.areaLabel}>Super Built-up Area</Text>
                        </View>
                        <View style={styles.areaDivider} />
                        <View style={styles.areaItem}>
                          <Text style={styles.areaNum}>{currentPlan.carpetSqft} Sft</Text>
                          <Text style={styles.areaLabel}>Usable Carpet Area</Text>
                        </View>
                      </View>
                    </View>
                  )}
                </>
              ) : (
                <View style={styles.emptyTabBox}>
                  <Text style={styles.emptyTabText}>Custom villa floor plans available upon request.</Text>
                </View>
              )}
            </View>
          )}

          {/* Tab 3: Drawings & Approvals */}
          {activeTab === 'drawings' && (
            <View style={styles.tabContentCard}>
              <Text style={styles.cardSectionHeading}>Sanctioned Drawings & Certifications</Text>
              <Text style={styles.paragraphText}>
                All projects are verified and sanctioned with complete municipal and fire approvals.
              </Text>

              <View style={styles.drawingsList}>
                {project.drawings && project.drawings.length > 0 ? (
                  project.drawings.map((doc, idx) => (
                    <View key={idx} style={styles.drawingItem}>
                      <View style={styles.docIconBox}>
                        <Text style={styles.docIcon}>📄</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.docTitle}>{doc.title}</Text>
                        <Text style={styles.docType}>{doc.type} • {doc.pages}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.docActionBtn}
                        onPress={() => {
                          const msg = `Hello SVCS, please send me the drawing copy for: ${doc.title} (${project.title}).`;
                          openWhatsApp(msg);
                        }}
                      >
                        <Text style={styles.docActionText}>Request PDF</Text>
                      </TouchableOpacity>
                    </View>
                  ))
                ) : (
                  <View style={styles.emptyTabBox}>
                    <Text style={styles.emptyTabText}>Approvals and sanctioned layout available on request.</Text>
                  </View>
                )}
              </View>

              {/* Download Full Brochure Banner */}
              <TouchableOpacity
                style={styles.brochureBanner}
                onPress={() => {
                  const msg = `Hello Sri Venkateswara Constructions, please send me the full brochure PDF for *${project.title}*.`;
                  openWhatsApp(msg);
                }}
              >
                <Text style={styles.brochureIcon}>📥</Text>
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.brochureTitle}>Download Official Brochure (PDF)</Text>
                  <Text style={styles.brochureSub}>Includes floor plans, payment schedules & RERA certificate</Text>
                </View>
                <Text style={styles.brochureArrow}>→</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Tab 4: Amenities */}
          {activeTab === 'amenities' && (
            <View style={styles.tabContentCard}>
              <Text style={styles.cardSectionHeading}>World-Class Amenities</Text>
              <Text style={styles.paragraphText}>
                Carefully planned facilities designed for community wellness, safety, and modern convenience.
              </Text>

              <View style={styles.amenitiesGrid}>
                {project.amenities &&
                  project.amenities.map((amenity, i) => (
                    <View key={i} style={styles.amenityCard}>
                      <Text style={styles.amenityStar}>✦</Text>
                      <Text style={styles.amenityName}>{amenity.name}</Text>
                      <Text style={styles.amenityDesc}>{amenity.desc}</Text>
                    </View>
                  ))}
              </View>
            </View>
          )}

          {/* Tab 5: Construction Progress */}
          {activeTab === 'progress' && (
            <View style={styles.tabContentCard}>
              <Text style={styles.cardSectionHeading}>Live Construction Milestone Tracker</Text>
              <Text style={styles.paragraphText}>
                Track live work progress updated by our project engineers on-site.
              </Text>

              <View style={styles.progressTimeline}>
                {project.constructionProgress &&
                  project.constructionProgress.map((item, idx) => (
                    <View key={idx} style={styles.timelineItem}>
                      <View style={styles.timelinePoint}>
                        <View
                          style={[
                            styles.timelineDot,
                            item.percent === 100
                              ? { backgroundColor: '#1B8755' }
                              : item.percent > 0
                              ? { backgroundColor: '#B69A5A' }
                              : { backgroundColor: '#E3DAC9' },
                          ]}
                        />
                        {idx !== project.constructionProgress.length - 1 && (
                          <View style={styles.timelineLine} />
                        )}
                      </View>

                      <View style={styles.timelineContent}>
                        <View style={styles.timelineTitleRow}>
                          <Text style={styles.timelineStageTitle}>{item.title}</Text>
                          <Text
                            style={[
                              styles.timelinePercent,
                              item.percent === 100 && { color: '#1B8755' },
                            ]}
                          >
                            {item.percent}%
                          </Text>
                        </View>
                        <Text style={styles.timelineDate}>
                          Status: {item.status} ({item.date})
                        </Text>
                        <View style={styles.progressBarBg}>
                          <View
                            style={[
                              styles.progressBarFill,
                              {
                                width: `${item.percent}%`,
                                backgroundColor:
                                  item.percent === 100 ? '#1B8755' : '#B69A5A',
                              },
                            ]}
                          />
                        </View>
                      </View>
                    </View>
                  ))}
              </View>
            </View>
          )}

          <View style={{ height: 90 }} />
        </ScrollView>

        {/* Sticky Bottom Actions Bar */}
        <View style={styles.stickyBottomBar}>
          <TouchableOpacity
            style={styles.actionWhatsappBtn}
            onPress={() => {
              const msg = `Hello SVCS, I am interested in *${project.title}* at *${project.location}*. Please send pricing and floor plans.`;
              openWhatsApp(msg);
            }}
            activeOpacity={0.88}
          >
            <Text style={styles.actionIcon}>💬</Text>
            <Text style={styles.actionWhatsappText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionCallBtn}
            onPress={dialPhoneNumber}
            activeOpacity={0.88}
          >
            <Text style={styles.actionIcon}>📞</Text>
            <Text style={styles.actionCallText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionVisitBtn}
            onPress={handleBookVisit}
            activeOpacity={0.88}
          >
            <Text style={styles.actionVisitText}>Book Site Visit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ProjectDetailsModal;
