import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';

const firebaseConfig = {
  apiKey: "AIzaSyD1MO2SPhL1HwAORKkLZOpw66q1P1jev-M",
  authDomain: "clone-instagram-course.firebaseapp.com",
  projectId: "clone-instagram-course",
  storageBucket: "clone-instagram-course.appspot.com",
  messagingSenderId: "270594690384",
  appId: "1:270594690384:web:2bee4b9e784abea63bb055",
  measurementId: "G-2JRSS6QZD7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };