import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Switch } from "react-native";
import { db } from "../firebase";

const GreenhouseComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [imageSource, setImageSource] = useState(require("../assets/lamp.png"));
  const [isEnable, setIsEnable] = useState(false);

  const toggleSwitch = () => {
    const lightingValue = isEnabled ? "0" : "1";
    setIsEnabled((previousState) => !previousState);
    setImageSource((previousState) =>
      previousState === require("../assets/lamp.png")
        ? require("../assets/Light.png")
        : require("../assets/lamp.png")
    );
    db.ref("lighting").set(lightingValue); // update the value in Firebase database
  };

  const toggleFan = () => {
    const fanValue = isEnable ? "0" : "1"; // value should be '0' when off and '1' when on
    setIsEnable((previousState) => !previousState);
    db.ref("ventilation").set(fanValue); // update the value in Firebase database
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#A9A9A9",
            height: 100,
            width: 170,
            flexDirection: "row",
            marginTop: 20,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Image source={imageSource} style={styles.Icon} />
            <Text>Lighting</Text>
          </View>
          <View style={styles.container}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            height: 100,
            width: 170,
            borderWidth: 2,
            flexDirection: "row",
            borderColor: "#A9A9A9",
            marginTop: 20,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Image source={require("../assets/fan.png")} style={styles.Icon} />
            <Text>Ventilation</Text>
          </View>
          <View style={styles.container}>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              onValueChange={toggleFan}
              value={isEnable}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Icon: {
    width: 40,
    height: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: 65,
  },
});

export default GreenhouseComponent;
