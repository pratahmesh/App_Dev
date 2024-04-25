import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Navs = createMaterialTopTabNavigator();
import Foryou from './Mini/Foryou.jsx'
import Tranding from './Mini/Tranding.jsx'
import News from './Mini/News.jsx'
import Entertainment from './Mini/Entertainment.jsx'
import Sport from './Mini/Sports.jsx'

const Search = () => {
  return (
    <Navs.Navigator>
      <Navs.Screen name='Foryou' component={Foryou}/>
      <Navs.Screen name='Tranding' component={Tranding}/>
      <Navs.Screen name='News' component={News}/>
      <Navs.Screen name='Sports' component={Sport}/>
      <Navs.Screen name='Entertainment' component={Entertainment}/>
    </Navs.Navigator>
  )
}

export default Search

const styles = StyleSheet.create({})