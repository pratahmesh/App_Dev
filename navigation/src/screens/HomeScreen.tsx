import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// import LottieView from 'lottie-react-native';

const HomeScreen = () => {

  const [data, setData] = useState<any[]>([]); // Assuming data is an array

  const getApiData = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const result = await fetch(url);
      const jsonResult = await result.json();
      setData(jsonResult);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{height:45,marginTop:15}}>
      <Text style={{fontSize:21,color:'#ffffff'}}>Data Facting HomeScreem</Text>
      </View>
                {
                data.length ? 
                <FlatList
                data={data} // Provide the data prop
                renderItem={({ item }) => (
                  <View key={item.id} style={{ padding: 20}}>
                    <Text style={{fontSize:23,backgroundColor:'#a2d2ff',textAlign:'center',borderRadius:9}}>{item.title}</Text>
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',marginTop:8}}>
                    <Text style={{backgroundColor:"#bde0fe",width:50,textAlign:'center',borderRadius:15,margin:5}}>ID: {item.id}</Text>
                    <Text style={{backgroundColor:'#009BFF',width:100,textAlign:'center',borderRadius:25,margin:5}}>username {item.userId}</Text>
                    </View>
                    <Text style={{backgroundColor:'#508db4',color:'#bde5ff',fontSize:18,marginTop:8}}>body: {item.body}</Text>
                  </View>
                )}
                keyExtractor={(item) => item.id.toString()}
              />
                 : (
                  <Text>Loading...</Text>
                )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#457b9d', // or any color you prefer
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
