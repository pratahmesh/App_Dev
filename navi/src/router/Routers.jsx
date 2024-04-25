import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import HomeScreen from '../screens/HomeScreen.jsx'
import Search from '../screens/Search.jsx'
import Notifications from '../screens/Notification.jsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Routers = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}
    options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (<Image source={{ uri: 'https://img.icons8.com/ios-filled/50/home.png' }}style={{ width: 30, height: 30 }}/>),
      }}
    />
    <Tab.Screen name="search" component={Search} 
    options={{
        tabBarLabel: 'Search',
        tabBarIcon: () => (<Image source={{ uri: 'https://img.icons8.com/ios-filled/50/search--v3.png' }}style={{ width: 30, height: 30 }}/>),
      }}
      />
    <Tab.Screen name="Notification" component={Notifications} 
    options={{
        tabBarLabel: 'Notification',
        tabBarIcon: () => (<Image source={{ uri: 'https://img.icons8.com/glyph-neue/64/appointment-reminders.png' }}style={{ width: 30, height: 30 }}/>),
      }}
      />
    </Tab.Navigator>
  )
}

export default Routers

const styles = StyleSheet.create({})