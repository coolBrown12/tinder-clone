import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDqm0El410HnucCBsnFMfm2vYGDG0vB70o",
    authDomain: "tinder-2b59c.firebaseapp.com",
    projectId: "tinder-2b59c",
    storageBucket: "tinder-2b59c.appspot.com",
    messagingSenderId: "152855841275",
    appId: "1:152855841275:web:1d0249eaaede541da4235e",
    measurementId: "G-9FVYQSRH1J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database=firebaseApp.firestore();

  export default database;