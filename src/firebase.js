import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCv48Hr77S6P2LOnLDK56qLQ_-cPGO9R1E",
  authDomain: "instagram-reels-clone-42d10.firebaseapp.com",
  projectId: "instagram-reels-clone-42d10",
  storageBucket: "instagram-reels-clone-42d10.appspot.com",
  messagingSenderId: "199285730695",
  appId: "1:199285730695:web:dc4c93fcd7bea9bab17722",
  measurementId: "G-W5J93NG35P"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;