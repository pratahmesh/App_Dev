import React,{useState} from 'react';
import { View, Text, StyleSheet,TextInput,Button, ScrollView } from 'react-native';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { authentication } from '../../firebase/firebase-config';
const Favourites = () => {

  const [uemail, setuemail] = useState('');
  const [email, setemail] = useState('');
  const [upassword, setuPassword] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const RegisterUser = () => {
    try {
      createUserWithEmailAndPassword(authentication, uemail, upassword);
      setIsRegistered(true);
    } catch (error) {
      console.log(error);
    }
  }

  // const SignIn = () => {
  //   try {
  //     signInWithEmailAndPassword(authentication, email, password);
      
  //     setIsSignedIn(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const SignIn = () => {
    signInWithEmailAndPassword(authentication, email, password)
     .then(() => {
        setIsSignedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const SignOut = () => {
    try {
      signOut(authentication);
    }
     catch (error) {
      console.log(error);
    }
  }
  return (
    <ScrollView>
    <View>
        <Text style={{marginTop:50,textAlign:'center',backgroundColor:'white',fontSize:35}}>SignUP</Text>
     <TextInput placeholder="Username" value={uemail} onChangeText={text=>setuemail(text)}/>
     <TextInput placeholder="Password" value={upassword} secureTextEntry={true} onChangeText={text=>setuPassword(text)}/>
     <Button title="Register" onPress={RegisterUser} />
      <Text>{isRegistered ? "User is Registered  " : "User is not Registered"}</Text>



      <Text style={{marginTop:50,textAlign:'center',backgroundColor:'white',fontSize:35}}>SignIN</Text>
     <TextInput placeholder="Username" value={email} onChangeText={text=>setemail(text)}/>
     <TextInput placeholder="Password" value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
     {isSignedIn === true ?
      <Button title="Sign OUT" onPress={SignOut} />
      :
      <Button title="Sign IN" onPress={SignIn} />

     }
      <Text>{isSignedIn ? "User is Signed In  " : "User is not Signed In"}</Text>
    </View>
  </ScrollView>
  );
};


export default Favourites;