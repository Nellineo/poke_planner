import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDGR0oP033vY1N6Bmp8o2kVi_50j-Rxa2o",
    authDomain: "pokeplan-e9899.firebaseapp.com",
    databaseURL: "https://pokeplan-e9899.firebaseio.com",
    projectId: "pokeplan-e9899",
    storageBucket: "pokeplan-e9899.appspot.com",
    messagingSenderId: "236634190766"
  };
  firebase.initializeApp(config);
//   firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;