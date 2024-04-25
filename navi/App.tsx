import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routers from './src/router/Routers';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
    <stack.Navigator screenOptions={{ headerShown: false }}>
    <stack.Screen name="Tab" component={Routers} />
    </stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
