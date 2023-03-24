import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const GroupComponent = (props) => {
  
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('ComponentPage')} style={styles.container}>
      <Image source={require('../assets/groupImg.png')} style={{width: '100%',}}/>
      <View style={styles.grpRow}>
        <Text>{props.title}</Text>
        <View style={styles.greenContainer}>
          <Text style={{color: 'white'}}>{props.plantCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
  container:{
    width:370,
    height:200,
    backgroundColor:'white',
    borderRadius:20,
    marginTop: 20,
    padding:10,
  },
  grpRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  greenContainer:{
    width: 70,
    height: 30,
    backgroundColor: '#008A27',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20,
  }
})
export default GroupComponent