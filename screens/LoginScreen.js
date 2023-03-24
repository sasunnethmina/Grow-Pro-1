import { SafeAreaView, Image,Text,TouchableOpacity, View ,TextInput} from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";

import facebooksvg from "../assets/misc/Facebook.svg";
import googlesvg from '../assets/misc/Google.svg';
import linkedinsvg from '../assets/misc/Linkedin.svg';
const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex:1 ,justifyContent:'center'}}>
<View style={{paddingHorizontal:25}}>
<View style={{alignItems:'center',marginBottom:40 ,marginTop:-100}}>
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
      <TextInput placeholder='Email ID' style={{flex:1,paddingVertical:0}} keyboardType="email-address"/>
      </View>
      
      <View style={{flexDirection:'row',
      borderBottomColor:'#ccc',
      borderBottomWidth:1,
      paddingBottom:8,
      marginBottom:20}}>

      <MaterialIcons name="lock" size={20} color="#666" style={{marginRight:5}}/>
      <TextInput placeholder='password' 
      style={{flex:1,paddingVertical:0}}
        secureTextEntry={true}/>
<TouchableOpacity onPress={()=>{}}>
<Text style={{color:'#50C878' ,fontWeight:'700'}}>Forgot password?</Text>

</TouchableOpacity>
      </View>

      <TouchableOpacity onPress={()=>{}} 
      style={{backgroundColor:'#07CC3E',
      padding:20,
      borderRadius:10,
      marginBottom:30}}>
        <Text style={{textAlign:'center',fontWeight:'700',color:'#fff'}}>login</Text>
      </TouchableOpacity>

<Text style={{textAlign:'center',color:'#666',marginBottom:30}}>or,login with...</Text>
      
      <TouchableOpacity   onPress={()=>{}}style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}} >
        <googlesvg height={24} width={24}/>
      </TouchableOpacity>
      <TouchableOpacity   onPress={()=>{}}style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}} >
        <facebooksvg height={24} width={24}/>
      </TouchableOpacity>
      <TouchableOpacity   onPress={()=>{}}style={{borderColor:'#ddd',borderWidth:2,borderRadius:10,paddingHorizontal:30,paddingVertical:10}} >
        <linkedinsvg height={24} width={24}/>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

