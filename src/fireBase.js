// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKfhMuak6Dk9kNv-wI27jhTe7imdMVAHk",
  authDomain: "flipkart-clone-e2bfa.firebaseapp.com",
  projectId: "flipkart-clone-e2bfa",
  storageBucket: "flipkart-clone-e2bfa.appspot.com",
  messagingSenderId: "749623530478",
  appId: "1:749623530478:web:552fd0b08d3bf3311d74ff",
  measurementId: "G-159Y96V2HS"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db , auth };