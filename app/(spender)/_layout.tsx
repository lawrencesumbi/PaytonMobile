import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, Layers } from 'lucide-react-native';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import Home from './home';
import Split from './split';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#416955',   
        tabBarInactiveTintColor: '#92bba7', 
        tabBarShowLabel: true,              
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.floatingTabBar,
      }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={Home} 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="SplitScreen" 
        component={Split} 
        options={{
          title: 'Split',
          tabBarIcon: ({ color, size }) => (
            <Layers size={size - 2} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  floatingTabBar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 16,
    left: 16,
    right: 16,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 64,
    paddingBottom: Platform.OS === 'ios' ? 0 : 8, // Adjusts spacing for Android vs iOS home bars
    paddingTop: 6,
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 4,},
    shadowOpacity: 0.10,
    shadowRadius: 15,
    elevation: 5, 
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
});