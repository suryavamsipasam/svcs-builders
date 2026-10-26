import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ProjectCard.styles';
import { SpecChip } from '../SpecChip/SpecChip';

export const ProjectCard = ({
  project,
  onPress,
  variant = 'standard', // 'standard' | 'featured'
  ctaText = 'View Details →',
}) => {
  if (!project) return null;

  const isFeatured = variant === 'featured';

  const getStatusStyle = () => {
    switch (project.status) {
      case 'Ongoing':
        return styles.statusOngoing;
      case 'Completed':
        return styles.statusCompleted;
      case 'Future':
        return styles.statusFuture;
      default:
        return styles.statusOngoing;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, isFeatured && styles.cardFeatured]}
      onPress={() => onPress && onPress(project)}
      activeOpacity={0.92}
    >
      <Image
        source={{ uri: project.heroImage }}
        style={[styles.image, isFeatured && styles.imageFeatured]}
      />

      <View style={styles.badgeRow}>
        <View style={[styles.statusBadge, getStatusStyle()]}>
          <Text style={styles.statusText}>
            {project.status.toUpperCase()}
            {project.status === 'Ongoing' ? ` • ${project.progressPercent}% DONE` : ''}
          </Text>
        </View>

        <View style={styles.secondaryBadge}>
          <Text style={styles.secondaryBadgeText}>
            {isFeatured ? 'RERA APPROVED' : project.category}
          </Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{project.title}</Text>
          {!isFeatured && <Text style={styles.priceTag}>{project.priceFull}</Text>}
        </View>

        <View style={styles.locationRow}>
          <Text style={styles.location} numberOfLines={1}>
            📍 {project.location}
          </Text>
          <Text style={styles.mapHintText}>Map ↗</Text>
        </View>

        <View style={styles.specRow}>
          {project.bhkTypes && project.bhkTypes.length > 0 && (
            <SpecChip label={project.bhkTypes.join(', ')} />
          )}
          {project.totalFloors && <SpecChip label={project.totalFloors} />}
          {project.totalUnits && <SpecChip label={`${project.totalUnits} Units`} />}
        </View>

        {!isFeatured && project.about && (
          <Text style={styles.snippet} numberOfLines={2}>
            {project.about}
          </Text>
        )}

        <View style={styles.footer}>
          {isFeatured ? (
            <View style={styles.priceBlock}>
              <Text style={styles.priceLabel}>Starting from</Text>
              <Text style={styles.priceMain}>{project.priceFull}</Text>
            </View>
          ) : (
            <View style={styles.previewTextRow}>
              {project.amenities && (
                <Text style={styles.previewText}>
                  ✨ {project.amenities.length} Amenities
                </Text>
              )}
              {project.floorPlans && project.floorPlans.length > 0 && (
                <Text style={styles.previewText}>
                  📐 {project.floorPlans.length} Plans
                </Text>
              )}
            </View>
          )}

          <View style={styles.detailsBtn}>
            <Text style={styles.detailsBtnText}>{ctaText}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectCard;
