import React,{useState} from 'react';
import { View, Text, StyleSheet, ScrollView,Linking, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Wishlist from "./mini/wishlist";
import Buy from "./mini/buy";
import Recents_tab from "./mini/Recent";

const CartScreen = () => {
  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const [activeTab, setActiveTab] = useState<string>(''); // Add this line to declare and initialize the activeTab state variable

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Cart Screen!</Text>
      <Text style={styles.text}>This is the Work at 02.50am</Text>
      <View style={{height:50}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
  <TouchableOpacity
          style={[ activeTab === 'Wishlist' && styles.activeTab]}
          onPress={() => handleTabPress('Wishlist')}
        >
          <Text style={styles.horzontalView}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ activeTab === 'Buy' && styles.activeTab]}
          onPress={() => handleTabPress('Buy')}>
          <Text style={styles.horzontalView}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ activeTab === 'Recents_tab' && styles.activeTab]}
          onPress={() => handleTabPress('Recents_tab')}>
          <Text style={styles.horzontalView}>Recents tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ activeTab === 'Pervious_History' && styles.activeTab]}
          onPress={() => handleTabPress('Pervious_History')}>
          <Text style={styles.horzontalView}>Pervious History</Text>
        </TouchableOpacity>
  </View>
</ScrollView>
      </View>
      <View>
        <TouchableOpacity onPress={()=>{
          Linking.openURL('https://codeforces.com/profile/prathamesh_01110')
        }}>
          <Text style={styles.linking}>CodeForces</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          Linking.openURL('https://codeforces.com/profile/prathamesh_01110')
        }}>
          <Text style={styles.linking}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          Linking.openURL('https://codeforces.com/profile/prathamesh_01110')
        }}>
          <Text style={styles.linking}>follow</Text>
        </TouchableOpacity>
        </View>
        <View>
      {activeTab === 'Wishlist' && <Wishlist />}
      {activeTab === 'Buy' && <Buy />}
      {activeTab === 'Recents_tab' && <Recents_tab />}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // or any color you prefer

  },
  linking: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
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
  horzontalView: {
    fontSize:19,
    backgroundColor:'white',
    marginHorizontal:9,
    padding:8,
    borderRadius:50
  },
  activeTab: {
    backgroundColor: '#eee',
    padding:1,
    borderRadius:49
  },

  horizontalView: {
    fontSize: 19,
    backgroundColor: 'white',
    marginHorizontal: 9,
    padding: 8,
    borderRadius: 50,
  },
});

export default CartScreen;