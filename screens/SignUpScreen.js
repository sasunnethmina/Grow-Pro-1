import { SafeAreaView, Image,Text,TouchableOpacity,ScrollView, View ,TextInput} from 'react-native'
import React, { useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Ionicons from"@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

 
const firebaseConfig = {
  apiKey: "AIzaSyB3sqtNagwekTBYwGEGYkdCQBQtTHBt8IA",
  authDomain: "growpro-iot.firebaseapp.com",
  databaseURL: "https://growpro-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "growpro-iot",
  storageBucket: "growpro-iot.appspot.com",
  messagingSenderId: "1029257731679",
  appId: "1:1029257731679:web:51e06fecfa8758653605ea",
  measurementId: "G-7T0SZ7E6QB"
};
// Initialize Firebase 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignUpScreen = () => {
  const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   ;

    const navigation = useNavigation();
    const handleSignUp = async () => {
        console.log('Email:', email);
        console.log('Fullname:', fullname);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');
        } catch (error) {
            console.error('Sign up error:', error);
        }
    };
    
    return (
    <SafeAreaView style={{flex:1 ,justifyContent:'center'}}>
       <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:25}}>
        <View style={{paddingHorizontal:25}}>
       
<View style={{alignItems:'center',marginBottom:40 ,marginTop:100}}>
<Image 
style={{width: 200,
height: 100,
resizeMode: 'contain',
alignSelf: 'center',}} 
source={require('../assets/logo01.png')} />
</View>
            <Text
       style={{fontSize:25,
      fontWeight:'500',
      color:'#333',
      marginBottom:30,
      marginTop:10,
      }}> Register</Text>

<View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:30}}>
      <TouchableOpacity  onPress={()=>{}}style={{borderColor:'#ddd',borderWidth:1,borderRadius:10,paddingHorizontal:40,paddingVertical:10}} >
        <Image style={{width: 24,height: 24,}} source={require('../assets/misc/Facebook.png')} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>{}}style={{borderColor:'#ddd',borderWidth:1,borderRadius:10,paddingHorizontal:40,paddingVertical:10}} >
        <Image style={{width: 24,height: 24,}} source={require('../assets/misc/Google.png')} />
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>{}}style={{borderColor:'#ddd',borderWidth:1,borderRadius:10,paddingHorizontal:40,paddingVertical:10}} >
        <Image style={{width: 24,height: 24,}} source={require('../assets/misc/Linkedin.png')} />
      </TouchableOpacity>
      </View>

      <Text style={{textAlign:'center',color:'#666',marginBottom:20}}>or, Register with email...</Text>

      <View style={{flexDirection:'row',
      borderBottomColor:'#ccc',
      borderBottomWidth:1,
      paddingBottom:8,
      marginBottom:20}}>

      <Ionicons name='person-circle' size={20} color="#666" style={{marginRight:5}}/>
      <TextInput placeholder='Full Name' 
      onChangeText={(text) => setFullname(text)}
      value={fullname}
      style={{flex:1,paddingVertical:0}} />
      </View>


            <View style={{flexDirection:'row',
                borderBottomColor:'#ccc',
                borderBottomWidth:1,
                paddingBottom:8,
                marginBottom:20}}>

                <MaterialIcons name='email' size={20} color="#666" style={{marginRight:5}}/>
                <TextInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>
            
            <View style={{flexDirection:'row',
                borderBottomColor:'#ccc',
                borderBottomWidth:1,
                paddingBottom:8,
                marginBottom:20}}>

                <MaterialIcons name="lock" size={20} color="#666" style={{marginRight:5}}/>
                <TextInput
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
            </View>

            <View style={{flexDirection:'row',
                borderBottomColor:'#ccc',
                borderBottomWidth:1,
                paddingBottom:8,
                marginBottom:20}}>

                <MaterialIcons name="lock" size={20} color="#666" style={{marginRight:5}}/>
                <TextInput
                    placeholder="Confirm Password"
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    secureTextEntry
                />
            </View>
            <View style={{flexDirection:'row',
      borderBottomColor:'#ccc',
      borderBottomWidth:1,
      paddingBottom:8,
      marginBottom:20}}>

      <Ionicons name='calendar' size={20} color="#666" style={{marginRight:5}}/>
      <TouchableOpacity onPress={()=>{}} >
      <Text style={{color:'#666',marginLeft:5,marginTop:5}}>Date of Birth</Text>
      </TouchableOpacity>
      </View>

            <TouchableOpacity onPress={handleSignUp}
      style={{backgroundColor:'#07CC3E',
      padding:20,
      borderRadius:10,
      marginBottom:30}}>
        <Text style={{textAlign:'center',fontWeight:'700',color:'#fff'}}>Register</Text>
      </TouchableOpacity>


      


      <View style={{flexDirection:'row',justifyContent:'center',marginBottom:30,marginTop:10}}>
    <Text>Already have an account? </Text>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Text style={{color:'#50C878',fontWeight:'700'}}>  Login</Text>
    </TouchableOpacity>
    </View> 
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpScreen

