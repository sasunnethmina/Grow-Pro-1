import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

const windowHeight = Dimensions.get("window").height;

const AddPlant = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require("../assets/minchi.jpg")} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.age}>{props.age}</Text>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.1,
    width: "100%",
    margin: 5,
  },
  innerContainer: {
    backgroundColor: "green",
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "30%",
    height: "100%",
    resizeMode: "contain",
    marginLeft: 20,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 100,
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  age: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default AddPlant;
