import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProvider, useApp } from './context/AppContext';
import { getAppTheme } from './theme/theme';

// Common Components & Modals
import { AppLayout } from './common/components/AppLayout/AppLayout';
import { BottomNav } from './common/components/BottomNav/BottomNav';
import { ToastAlert } from './common/components/ToastAlert/ToastAlert';
import { CitySelectorModal } from './common/components/Modals/CitySelectorModal';
import { MyBookingsModal } from './common/components/Modals/MyBookingsModal';

// Feature Module Screens
import { SplashScreen } from './modules/splash/SplashScreen';
import { HomeScreen } from './modules/home/HomeScreen';
import { ProjectsListScreen } from './modules/projects/ProjectsListScreen';
import { ProjectDetailsScreen } from './modules/projects/ProjectDetailsScreen';
import { FloorPlansScreen } from './modules/floorPlans/FloorPlansScreen';
import { GalleryScreen } from './modules/gallery/GalleryScreen';
import { AmenitiesScreen } from './modules/amenities/AmenitiesScreen';
import { ConstructionProgressScreen } from './modules/constructionProgress/ConstructionProgressScreen';
import { BookSiteVisitScreen } from './modules/bookSiteVisit/BookSiteVisitScreen';
import { ThankYouScreen } from './modules/bookSiteVisit/ThankYouScreen';
import { LocationScreen } from './modules/location/LocationScreen';
import { BrochureScreen } from './modules/brochure/BrochureScreen';
import { SearchFiltersModal } from './modules/search/SearchFiltersModal';
import { FavoritesScreen } from './modules/favorites/FavoritesScreen';
import { CompareFlatsScreen } from './modules/compare/CompareFlatsScreen';
import { ContactScreen } from './modules/contact/ContactScreen';
import { AboutUsScreen } from './modules/aboutUs/AboutUsScreen';
import { SettingsScreen } from './modules/settings/SettingsScreen';

const MainNavigator = () => {
  const { currentScreen, themeMode } = useApp();
  const theme = getAppTheme(themeMode);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'home':
        return <HomeScreen />;
      case 'projectsList':
        return <ProjectsListScreen />;
      case 'projectDetails':
        return <ProjectDetailsScreen />;
      case 'floorPlans':
        return <FloorPlansScreen />;
      case 'gallery':
        return <GalleryScreen />;
      case 'amenities':
        return <AmenitiesScreen />;
      case 'progress':
        return <ConstructionProgressScreen />;
      case 'bookVisit':
        return <BookSiteVisitScreen />;
      case 'thankYou':
        return <ThankYouScreen />;
      case 'location':
        return <LocationScreen />;
      case 'brochure':
        return <BrochureScreen />;
      case 'searchFilters':
        return <SearchFiltersModal />;
      case 'favorites':
        return <FavoritesScreen />;
      case 'compareFlats':
        return <CompareFlatsScreen />;
      case 'contact':
        return <ContactScreen />;
      case 'aboutUs':
        return <AboutUsScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout>
        {renderScreen()}
        <BottomNav />
      </AppLayout>
      <CitySelectorModal />
      <MyBookingsModal />
      <ToastAlert />
    </ThemeProvider>
  );
};

function App() {
  return (
    <AppProvider>
      <MainNavigator />
    </AppProvider>
  );
}

export default App;
