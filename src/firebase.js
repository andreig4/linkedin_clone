import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCH4hCR15hCNOnwLEhi-utWUjUinJArq5Y",
  authDomain: "linkedin-bee28.firebaseapp.com",
  projectId: "linkedin-bee28",
  storageBucket: "linkedin-bee28.appspot.com",
  messagingSenderId: "22747394119",
  appId: "1:22747394119:web:3fae2aef2d3afa369b4162",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
