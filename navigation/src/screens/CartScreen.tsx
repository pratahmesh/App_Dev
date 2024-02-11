import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Cart Screen!</Text>
      <Text style={styles.text}>This is the Work at 02.50am</Text>
      <LottieView
        source={require('../../assets/Home.json')}
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
    backgroundColor: '#D3D3D3', // or any color you prefer
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

export default CartScreen;