import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './Mini/Profile.jsx'
import Following from './Mini/Following.jsx'
import More from './Mini/More.jsx'
const Navs = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Navs.Navigator>
    <Navs.Screen name='Profile' component={Profile}/>
    <Navs.Screen name='Following' component={Following}/>
    <Navs.Screen name='More' component={More}/>
  </Navs.Navigator>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})