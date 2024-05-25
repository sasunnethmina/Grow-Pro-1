import firebase from "firebase/compat/app";
import "firebase/compat/database";
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

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
export { db };
