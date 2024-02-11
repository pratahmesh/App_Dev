import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  
 return (
  <SafeAreaProvider>
<NavigationContainer>
  <stack.Navigator screenOptions={{ headerShown: false }}>
    <stack.Screen name="Tab" component={TabNavigator} />
    <stack.Screen name="Details" component={DetailsScreen} />
    <stack.Screen name="Payment" component={PaymentScreen} />
  </stack.Navigator>
</NavigationContainer>
</SafeAreaProvider>
);
}
export default App;
