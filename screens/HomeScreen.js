import { SafeAreaView,ScrollView,View,Text,TextInput,ImageBackground,TouchableOpacity,StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react';
import Ionicons from"@expo/vector-icons/Ionicons";
import GroupComponent from '../components/GroupComponent';
const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState('');


  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
      date + '/' + month + '/' + year 
     
    );
  }, []);
  return (
    
    <SafeAreaView style={{flex:1,backgroundColor:'#DCDCDC', width:'100%', height: '100%'}}>
      
      <ScrollView >
      <ImageBackground source={require('../assets/Backgroundimage.png')} resizeMode="cover" style={styles.imageContainer}>
        <View style={{flexDirection:'row',justifyContent:"space-between"}}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>Welcome ,users</Text>
        <TouchableOpacity onPress={()=>{}}>
       <Ionicons name='person-circle' size={40} color="#000" style={{marginRight:15,marginTop:15}}/>
       </TouchableOpacity>
        </View>
        <Text style={{fontSize:18,fontWeight:'400',marginLeft:5}}>{currentDate}</Text>
        <View style={{
        flexDirection:'row',
        backgroundColor:'#fff',
        borderColor:'#A9A9A9',
        borderWidth:1,
        borderRadius:8,
        paddingHorizontal:5,
        paddingVertical:8,
        marginLeft:15,
        marginRight:15,marginTop:20
        }}>
          <Ionicons name='search' size={20} color="#A9A9A9" style={{marginRight:5}}/>
          <TextInput placeholder='Search'/>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:23}}>

        <Text style={{fontSize:20,fontWeight:'800',marginLeft:5}}>your GreenHouses</Text>

        <TouchableOpacity >
        <Ionicons name="add-sharp" size={30} color="#000" style={{marginRight:20,}}/>
        </TouchableOpacity>
        </View>
        </ImageBackground>
        <View style={styles.groupContainer}>
          <GroupComponent title="GreenHouse 20" plantCount="3 plants"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  imageContainer:{
    width:410,
    height:250,
    borderBottomLeftRadius:20,
    borderBottomRightRadius: 20,
  },
  groupContainer:{
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  }
})
export default HomeScreen