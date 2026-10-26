import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import { theme } from '../../theme/theme';
import { PROJECTS_DATA } from '../../data/projectsData';
import { StatusFilterCard } from '../../components/common/StatusFilterCard/StatusFilterCard';
import { ProjectCard } from '../../components/common/ProjectCard/ProjectCard';
import styles from './ProjectsScreen.styles';

export const ProjectsScreen = ({ initialStatus = 'Ongoing', onSelectProject }) => {
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialStatus) {
      setSelectedStatus(initialStatus);
    }
  }, [initialStatus]);

  const ongoingCount = PROJECTS_DATA.filter((p) => p.status === 'Ongoing').length;
  const completedCount = PROJECTS_DATA.filter((p) => p.status === 'Completed').length;
  const futureCount = PROJECTS_DATA.filter((p) => p.status === 'Future').length;

  const statusCards = [
    { key: 'Ongoing', label: 'Ongoing', count: ongoingCount, subtitle: 'Under Construction', color: '#1B8755' },
    { key: 'Completed', label: 'Completed', count: completedCount, subtitle: 'Delivered Landmarks', color: theme.colors.primary },
    { key: 'Future', label: 'Future', count: futureCount, subtitle: 'Upcoming Projects', color: theme.colors.accent },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesStatus = p.status.toLowerCase() === selectedStatus.toLowerCase();
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesQuery;
  });

  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Projects</Text>
        <Text style={styles.headerSubtitle}>
          Select status to browse apartments, villas, and commercial ventures
        </Text>
      </View>

      {/* Above 3 Selectable Status Cards using common StatusFilterCard */}
      <View style={styles.statusCardsRow}>
        {statusCards.map((card) => (
          <StatusFilterCard
            key={card.key}
            label={card.label}
            count={card.count}
            subtitle={card.subtitle}
            isActive={selectedStatus === card.key}
            color={card.color}
            onPress={() => setSelectedStatus(card.key)}
          />
        ))}
      </View>

      {/* Search Input Bar */}
      <View style={styles.searchBarContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder={`Search ${selectedStatus.toLowerCase()} projects by name or location...`}
          placeholderTextColor="#8E9A93"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Text style={styles.clearSearch}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Project List using common ProjectCard */}
      <FlatList
        data={filteredProjects}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🏢</Text>
            <Text style={styles.emptyTitle}>No {selectedStatus} Projects Found</Text>
            <Text style={styles.emptySub}>
              Try clearing your search query or select another project status above.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ProjectCard
            project={item}
            variant="standard"
            ctaText="View Details →"
            onPress={() => onSelectProject(item)}
          />
        )}
      />
    </View>
  );
};

export default ProjectsScreen;
