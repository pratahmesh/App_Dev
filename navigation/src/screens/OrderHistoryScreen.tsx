import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const OrderHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to History Screen!</Text>
      <Text style={styles.text}>This is the Work at 02.46am</Text>
      <LottieView
        source={require('../../assets/history.json')}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CD5C5C', // or any color you prefer
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  animation: {
    width: 200,
    height: 200,
  },
});
export default OrderHistoryScreen;
