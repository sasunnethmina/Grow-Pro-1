import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Getstarted from './screens/Getstarted';
import HomeScreen from './screens/HomeScreen';
import ComponentPage from './screens/ComponentPage';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Getstart" component={Getstarted}/>
<Stack.Screen name="LoginScreen" component={LoginScreen}/>
    <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="ComponentPage" component={ComponentPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}