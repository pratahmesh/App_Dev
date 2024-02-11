import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Favourites Screen!</Text>
      <Text style={styles.text}>This is the Work at 02.48am</Text>
      <LottieView
        source={require('../../assets/Cart.json')}
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
    backgroundColor: '#DAA520', // or any color you prefer
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



export default Favourites;