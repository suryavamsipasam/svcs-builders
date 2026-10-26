import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { theme } from './theme/theme';
import { WelcomeScreen } from './screens/WelcomeScreen/WelcomeScreen';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import { ProjectsScreen } from './screens/ProjectsScreen/ProjectsScreen';
import { ProjectDetailsModal } from './screens/ProjectsScreen/ProjectDetailsModal';
import { ServicesScreen } from './screens/ServicesScreen/ServicesScreen';
import { CustomerScreen } from './screens/CustomerScreen/CustomerScreen';
import { BottomNavBar } from './components/BottomNavBar/BottomNavBar';
import styles from './App.styles';

export default function App() {
  const { width: windowWidth } = useWindowDimensions();
  const isDesktop = Platform.OS === 'web' && windowWidth > 520;

  const [currentScreen, setCurrentScreen] = useState('welcome'); // 'welcome' | 'tabs'
  const [currentTab, setCurrentTab] = useState('home'); // 'home' | 'projects' | 'services' | 'customer'
  const [projectsFilterStatus, setProjectsFilterStatus] = useState('Ongoing');
  const [selectedProject, setSelectedProject] = useState(null);

  // Navigate to main tabs after clicking Explore on Welcome screen
  const handleExplore = () => {
    setCurrentScreen('tabs');
    setCurrentTab('home');
  };

  // Switch to projects tab with a pre-selected filter (Ongoing, Completed, Future)
  const handleNavigateToProjects = (status = 'Ongoing') => {
    setProjectsFilterStatus(status);
    setCurrentTab('projects');
  };

  // Open modal for a specific project
  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  // Render active tab content
  const renderTabContent = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomeScreen
            onNavigateToProjects={handleNavigateToProjects}
            onSelectProject={handleSelectProject}
            onNavigateToServices={() => setCurrentTab('services')}
            onNavigateToContact={() => setCurrentTab('customer')}
          />
        );
      case 'projects':
        return (
          <ProjectsScreen
            initialStatus={projectsFilterStatus}
            onSelectProject={handleSelectProject}
          />
        );
      case 'services':
        return <ServicesScreen />;
      case 'customer':
        return <CustomerScreen />;
      default:
        return (
          <HomeScreen
            onNavigateToProjects={handleNavigateToProjects}
            onSelectProject={handleSelectProject}
            onNavigateToServices={() => setCurrentTab('services')}
            onNavigateToContact={() => setCurrentTab('customer')}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar
        barStyle={currentScreen === 'welcome' ? 'light-content' : 'dark-content'}
        backgroundColor={currentScreen === 'welcome' ? theme.colors.primaryDark : '#FFFFFF'}
      />

      {/* Main Responsive Mobile Viewport Frame */}
      <View style={[styles.deviceFrame, isDesktop && styles.deviceFrameDesktop]}>
        {currentScreen === 'welcome' ? (
          <WelcomeScreen onExplore={handleExplore} />
        ) : (
          <View style={styles.tabsContainer}>
            {/* Active Screen Body */}
            <View style={styles.screenBody}>{renderTabContent()}</View>

            {/* Bottom Navigation Bar */}
            <BottomNavBar
              currentTab={currentTab}
              onSelectTab={(tab) => setCurrentTab(tab)}
            />
          </View>
        )}

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectDetailsModal
            project={selectedProject}
            visible={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
