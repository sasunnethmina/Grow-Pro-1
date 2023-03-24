import { SafeAreaView, Image,Text,TouchableOpacity, View ,TextInput} from 'react-native'
import React, { useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    const handleLogin = async () => {
        console.log('Email:', email);
        console.log('Password:', password);
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    
    return (
    <SafeAreaView style={{flex:1 ,justifyContent:'center'}}>
<View style={{paddingHorizontal:25}}>
<View style={{alignItems:'center',marginBottom:40 ,marginTop:-50}}>
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
      }}>Login </Text>
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
<TouchableOpacity onPress={()=>{}}>
<Text style={{color:'#50C878' ,fontWeight:'700',marginLeft:160}}>Forgot password?</Text>

</TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Home')} 
      style={{backgroundColor:'#07CC3E',
      padding:20,
      borderRadius:10,
      marginBottom:30}}>
        <Text style={{textAlign:'center',fontWeight:'700',color:'#fff'}}>login</Text>
      </TouchableOpacity>

<Text style={{textAlign:'center',color:'#666',marginBottom:30}}>or,login with...</Text>
      

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
      <View style={{flexDirection:'row',justifyContent:'center',marginBottom:30,marginTop:10}}>
    <Text>new to the app?</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
      <Text style={{color:'#50C878',fontWeight:'700'}}>  Register here</Text>
    </TouchableOpacity>
    </View> 
      </View> 
    </SafeAreaView>
  )
}

export default LoginScreen;