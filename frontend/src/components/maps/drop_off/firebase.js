import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAah7-4-rK8IPjhm9tARJPPW9qjXlBpNyg",
    authDomain: "finalproject-83fcd.firebaseapp.com",
    databaseURL: "https://finalproject-83fcd-default-rtdb.firebaseio.com",
    projectId: "finalproject-83fcd",
    storageBucket: "finalproject-83fcd.appspot.com",
    messagingSenderId: "246398072527",
    appId: "1:246398072527:web:27d4edd5ec0b51287629ba",
    measurementId: "G-VC8J9DBBBD"
  };


  
  firebase.initializeApp(firebaseConfig);
  



export default firebase;