import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GetStartedPage = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Manage your greenhouse</Text>
      <Text style={styles.discription}>The greenhouse system is designed to help
       users  take care  greenhouses in efficient manner.</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0FB53D',
  },
  logo:{
    width:413,
    height:440,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft:50,
    marginRight:50,
  },
  discription: {
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'semibold',
    marginLeft:30,
    marginRight:30,
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#000000',
    paddingHorizontal: 60,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#060000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GetStartedPage;
