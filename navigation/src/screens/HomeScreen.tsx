import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Home Screen!</Text>
      <Text style={styles.text}>This is the Work at 02.44am</Text>
      <LottieView
        source={require('../../assets/Home.json')}
        autoPlay
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF', // or any color you prefer
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

export default HomeScreen;
