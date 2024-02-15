import React from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity,Alert } from 'react-native';
import axios from 'axios';

const OrderHistoryScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPasworrd] = React.useState('');
  const hendelEventname = (text: string) => {
    setName(text);
  };
  const hendelEventemail = (text: string) => {
    setEmail(text);
  };
  const hendelEventpassword = (text: string) => {
    setPasworrd(text);
  };

  function submit() {
    axios
      .post('http://192.168.0.104:3000/login', {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log('Response:', response.data);
        if (response.data.status == 'ok') {
          Alert.alert('Login Success');
        }else{
          Alert.alert('User allready exist!');
        }
      })
      .catch((error) => {
        console.log('Error:', error.message);
      });
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.text}>Welcome to History Screen!</Text>
      <Text style={styles.text}>This is the Work at 02.46am</Text>
    </View>
    <View>
      <TextInput
        style={styles.inputvalue}
        placeholder="enter your name"
        onChangeText={hendelEventname}
      />
      <TextInput
        style={styles.inputvalue}
        placeholder="enter your email"
        onChangeText={hendelEventemail}
      />
      <TextInput
        style={styles.inputvalue}
        placeholder="enter your password"
        onChangeText={hendelEventpassword}
      />
      <TouchableOpacity onPress={submit} style={{backgroundColor:'#6CA6C1', width:150,alignSelf:'center',marginTop:50,height:40,alignItems:'center',borderRadius:15}}>
        <Text style={{marginTop:8}}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FFF7', // or any color you prefer
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
  inputvalue:{
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    width: 300,
    borderRadius: 20,
  }
});
export default OrderHistoryScreen;
