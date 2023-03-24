import { View, StyleSheet,Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import GreenhouseComponent from '../components/GreenhouseComponent';
import PlantListComponent from '../components/PlantListComponent';

const ComponentPage = () => {
  const [selectedButton, setSelectedButton] = useState('Greenhouse'); // Initialize selected button as greenhouse

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  }; // Add the missing closing brace for this function here

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff', width:'100%', height: '100%'}}>

      <View style=
      {{backgroundColor:'white',
    borderRadius:20,
    borderWidth:1,
    borderColor:'#A9A9A9',
    height:'15%',
    marginTop: 20,
    padding:10,}}>
        <View style={{flexDirection:'column'}}>
        <Text>plantCount</Text>
<Text>GreenHouse name here</Text>
        </View>
      </View>
      <View style=
      {{backgroundColor:'white',
      flexDirection:'row',
      justifyContent:'space-between',
    borderRadius:30,
    borderWidth:1,
    marginLeft:20,
    marginRight:20,
    borderColor:'#07CC3E',
    height:'15%',
    marginTop: 20,
    padding:20,}}>
      <View style={{flexDirection:'column'}}>
      <View style={styles.circle} >
        <Text style={{textAlign:'center',marginTop:15,}}>test</Text>
      </View>

        <Text style={{textAlign:'center'}}>Humidity</Text>
      </View>
      <View style={{flexDirection:'column'}}>
      <View style={styles.circle} >
        <Text style={{textAlign:'center',marginTop:15,}}>test</Text>
      </View>

        <Text style={{textAlign:'center'}}>Temperatrue</Text>
      </View>
      <View style={{flexDirection:'column'}}>
      <View style={styles.circle} >
        <Text style={{textAlign:'center',marginTop:15,}}>test</Text>
      </View>

        <Text style={{textAlign:'center'}}>CO2</Text>
      </View>
        </View>
        <View style={{ flex: 1, padding: 15 }}>
        <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-between', borderBottomWidth: 3 }}>
  <TouchableOpacity style={{ marginRight: 20 }} onPress={() => handleButtonPress('Greenhouse')}>
    <Text style={{ marginLeft: 50, fontWeight: selectedButton === 'Greenhouse' ? 'bold' : 'normal', color: selectedButton === 'Greenhouse' ? '#000080' : '#000' }}>
     Smart Greenhouse
    </Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => handleButtonPress('PlantList')}>
    <Text style={{ marginRight: 50, fontWeight: selectedButton === 'PlantList' ? 'bold' : 'normal', color: selectedButton === 'PlantList' ? '#000080' : '#000' }}>
      Plant List
    </Text>
  </TouchableOpacity>
</View>

      {selectedButton === 'Greenhouse' ? (
        <GreenhouseComponent />
      ) : (
        <PlantListComponent />
      )}
    </View>
      </SafeAreaView>
  );
    
}

export default ComponentPage;

const styles = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#07CC3E",
    borderWidth:1,
  },
});
