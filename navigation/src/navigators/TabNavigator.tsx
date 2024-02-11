import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import Favourites from '../screens/Favourites'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen}
options={{
    tabBarLabel: 'Home',
    tabBarIcon: () => (<Image source={{ uri: 'https://img.icons8.com/ios-filled/50/home.png' }}style={{ width: 30, height: 30 }}/>),
  }}
/>
<Tab.Screen name="Cart" component={CartScreen} 
options={{
    tabBarLabel: 'Cart',
    tabBarIcon: () => (<Image source={{ uri: 'https://img.icons8.com/ios-filled/50/add-shopping-cart.png' }}style={{ width: 30, height: 30 }}/>),
  }}
  />
<Tab.Screen name="Favourites" component={Favourites} 
options={{
    tabBarLabel: 'Favourites',
    tabBarIcon: () => (<Image source={{ uri: 'https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-favourites-shopping-and-commerce-smashingstocks-glyph-smashing-stocks.png' }}style={{ width: 30, height: 30 }}/>),
  }}
  />
<Tab.Screen name="History" component={OrderHistoryScreen} 
options={{
    tabBarLabel: 'History',
    tabBarIcon: () => (<Image source={{ uri: 'https://img.icons8.com/ios-filled/50/activity-history.png' }}style={{ width: 30, height: 30 ,paddingBottom: 5}}/>),
  }}
  />
</Tab.Navigator>
  )
}
const styles = StyleSheet.create({})

export default TabNavigator
