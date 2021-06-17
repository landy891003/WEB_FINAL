import firebase from "firebase/app";
import "firebase/auth";

const Config ={
  apiKey: "AIzaSyBoP7FosEGHNjg651H3Vy-yRLx-ym02OSA",
  authDomain: "finalproj-545e1.firebaseapp.com",
  databaseURL: "https://finalproj-545e1-default-rtdb.firebaseio.com",
  projectId: "finalproj-545e1",
  storageBucket: "finalproj-545e1.appspot.com",
  messagingSenderId: "442709666738",
  appId: "1:442709666738:web:cd242455ac0a170846d2ab",
  measurementId: "G-6VD0MW38BF"
};  

const app = firebase.initializeApp(Config);

export default app;

