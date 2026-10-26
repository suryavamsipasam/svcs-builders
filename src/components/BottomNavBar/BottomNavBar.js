import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './BottomNavBar.styles';

export const BottomNavBar = ({ currentTab, onSelectTab }) => {
  const tabs = [
    { key: 'home', label: 'Home', icon: '🏛️' },
    { key: 'projects', label: 'Projects', icon: '🏢' },
    { key: 'services', label: 'Services', icon: '🤝' },
    { key: 'customer', label: 'Customer', icon: '👤' },
  ];

  return (
    <View style={styles.navContainer}>
      <View style={styles.navBar}>
        {tabs.map((tab) => {
          const isActive = currentTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tabButton, isActive && styles.tabButtonActive]}
              onPress={() => onSelectTab(tab.key)}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabIcon, isActive && styles.tabIconActive]}>
                {tab.icon}
              </Text>
              <Text
                style={[styles.tabLabel, isActive && styles.tabLabelActive]}
                numberOfLines={1}
              >
                {tab.label}
              </Text>
              {isActive && <View style={styles.activeGoldDot} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavBar;
