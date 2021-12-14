import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: "react-messenger-8ce53.firebaseapp.com",

  databaseURL: "http://react-messenger-8ce53.firebaseio.com",

  projectId: "react-messenger-8ce53",

  storageBucket: "react-messenger-8ce53.appspot.com",

  messagingSenderId: "168826089575",

  appId: "1:168826089575:web:5c673d477f5c9f125824c2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};