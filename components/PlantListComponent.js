import React from "react";
import { View, Text } from "react-native";
import AddPlant from "./AddPlant.js";

const PlantListComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Component</Text>
      <AddPlant title="mint" age="2 days" />
    </View>
  );
};

export default PlantListComponent;
