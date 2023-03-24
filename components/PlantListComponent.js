import React from 'react';
import { View, Text } from 'react-native';

const PlantListComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Component</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'green', flex: 1, marginRight: 10 }}>
          <Text style={{ padding: 10, color: 'white' }}>Card 1</Text>
        </View>
        
      </View>
    </View>
  );
};

export default PlantListComponent;
