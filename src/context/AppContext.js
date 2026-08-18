import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROJECTS_DATA, SVCS_COMPANY_INFO } from '../data/projectsData';

const AppContext = createContext(null);

const SUPPORTED_CITIES = ['Hyderabad', 'Bangalore', 'Chennai', 'Vizag', 'Vijayawada'];

export const AppProvider = ({ children }) => {
  // Navigation stack
  const [currentScreen, setCurrentScreen] = useState('home');
  const [screenParams, setScreenParams] = useState({});
  const [navHistory, setNavHistory] = useState([]);

  // Selected project context
  const [selectedProjectId, setSelectedProjectId] = useState('green-valley-residency');
  const [selectedCity, setSelectedCity] = useState('Hyderabad');

  // Theme mode ('light' or 'dark')
  const [themeMode, setThemeMode] = useState(() => {
    try {
      return localStorage.getItem('svcs_theme_mode') || 'light';
    } catch {
      return 'light';
    }
  });

  // Favorites (Array of project IDs)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('svcs_favorites');
      return saved ? JSON.parse(saved) : ['green-valley-residency', 'skyline-heights', 'elite-lake-view'];
    } catch {
      return ['green-valley-residency', 'skyline-heights', 'elite-lake-view'];
    }
  });

  // Booked Site Visits
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('svcs_bookings');
      return saved
        ? JSON.parse(saved)
        : [
            {
              id: 'SVCS-84920',
              projectId: 'green-valley-residency',
              projectTitle: 'Green Valley Residency',
              projectLocation: 'Kokapet, Hyderabad',
              fullName: 'Surya Kumar',
              phone: '+91 98765 43210',
              email: 'surya@example.com',
              date: '2026-08-25',
              timeSlot: '11:00 AM - 12:30 PM',
              cabRequired: true,
              status: 'Confirmed',
              createdAt: '2026-08-18',
            },
          ];
    } catch {
      return [];
    }
  });

  // Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    status: 'All', // 'All' | 'Ongoing' | 'Completed' | 'Upcoming'
    bhk: 'All', // 'All' | '2 BHK' | '3 BHK' | '4 BHK'
    priceRange: [30, 150], // in Lacs
    location: 'All',
    amenity: 'All',
  });

  // Global Toast
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  // Modals state
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('svcs_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('svcs_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error(e);
    }
  }, [bookings]);

  useEffect(() => {
    try {
      localStorage.setItem('svcs_theme_mode', themeMode);
    } catch (e) {
      console.error(e);
    }
  }, [themeMode]);

  // Navigation helpers
  const navigate = (screen, params = {}) => {
    setNavHistory((prev) => [...prev, { screen: currentScreen, params: screenParams }]);
    setCurrentScreen(screen);
    setScreenParams(params);
    if (params.projectId) {
      setSelectedProjectId(params.projectId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (navHistory.length > 0) {
      const prev = navHistory[navHistory.length - 1];
      setNavHistory((h) => h.slice(0, h.length - 1));
      setCurrentScreen(prev.screen);
      setScreenParams(prev.params || {});
    } else {
      setCurrentScreen('home');
    }
  };

  const switchTab = (screen) => {
    setNavHistory([]);
    setCurrentScreen(screen);
    setScreenParams({});
  };

  const toggleFavorite = (projectId) => {
    setFavorites((prev) => {
      const exists = prev.includes(projectId);
      if (exists) {
        showToast('Removed from favorites', 'info');
        return prev.filter((id) => id !== projectId);
      } else {
        showToast('Added to favorites!', 'success');
        return [...prev, projectId];
      }
    });
  };

  const isFavorite = (projectId) => favorites.includes(projectId);

  const addBooking = (bookingData) => {
    const newBooking = {
      id: `SVCS-${Math.floor(10000 + Math.random() * 90000)}`,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Confirmed',
      ...bookingData,
    };
    setBookings((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  const cancelBooking = (bookingId) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast('Booking cancelled successfully', 'info');
  };

  const showToast = (message, severity = 'success') => {
    setToast({ open: true, message, severity });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, open: false }));
  };

  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const selectedProject =
    PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        screenParams,
        navigate,
        goBack,
        switchTab,
        selectedProject,
        selectedProjectId,
        setSelectedProjectId,
        cities: SUPPORTED_CITIES,
        selectedCity,
        setSelectedCity,
        favorites,
        toggleFavorite,
        isFavorite,
        bookings,
        addBooking,
        cancelBooking,
        themeMode,
        setThemeMode,
        toggleThemeMode,
        searchQuery,
        setSearchQuery,
        filters,
        setFilters,
        toast,
        showToast,
        closeToast,
        isCityModalOpen,
        setIsCityModalOpen,
        isMyBookingsOpen,
        setIsMyBookingsOpen,
        companyInfo: SVCS_COMPANY_INFO,
        allProjects: PROJECTS_DATA,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
