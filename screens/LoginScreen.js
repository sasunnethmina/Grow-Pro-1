import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3sqtNagwekTBYwGEGYkdCQBQtTHBt8IA",
  authDomain: "growpro-iot.firebaseapp.com",
  databaseURL:
    "https://growpro-iot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "growpro-iot",
  storageBucket: "growpro-iot.appspot.com",
  messagingSenderId: "1029257731679",
  appId: "1:1029257731679:web:51e06fecfa8758653605ea",
  measurementId: "G-7T0SZ7E6QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <Image
            style={{
              width: 200,
              height: 100,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../assets/logo01.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            color: "#333",
            marginBottom: 30,
            textAlign: "center",
          }}
        >
          Login
        </Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
          }}
        >
          <MaterialIcons
            name="email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
          }}
        >
          <MaterialIcons
            name="lock"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{ color: "#50C878", fontWeight: "700", marginLeft: 160 }}
            >
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: "#07CC3E",
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "700", color: "#fff" }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>new to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={{ color: "#50C878", fontWeight: "700" }}>
              {" "}
              Register here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
