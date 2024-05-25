import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import Calander from '../screens/Calander';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calander" component={Calander} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
);

}

export default TabNavigator