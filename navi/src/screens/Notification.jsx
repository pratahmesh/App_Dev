import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Navs = createMaterialTopTabNavigator();
import All from './Mini/All.jsx'
import Verified from './Mini/Verified.jsx'
import Mentions from './Mini/Mentions.jsx'

const Notification = () => {
  return (
    <Navs.Navigator>
    <Navs.Screen name='All' component={All}/>
    <Navs.Screen name='Verified' component={Verified}/>
    <Navs.Screen name='Metions' component={Mentions}/>
  </Navs.Navigator>
  )
}

export default Notification

const styles = StyleSheet.create({})