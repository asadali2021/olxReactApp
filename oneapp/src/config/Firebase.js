// import firebase from 'firebase';/
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAPQlpKl7EHeQjiYB5AT34UgqW3DSg9uTI",
    authDomain: "olx123-1bf7a.firebaseapp.com",
    databaseURL: "https://olx123-1bf7a.firebaseio.com",
    projectId: "olx123-1bf7a",
    storageBucket: "olx123-1bf7a.appspot.com",
    messagingSenderId: "179871882082",
    appId: "1:179871882082:web:5540fe6056d7511c1c2a3b"
  };

  // // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyBr_prUKAxZhlnkiT-JtNh_D5R0iIaAU0o",
  //   authDomain: "olx123-6dcab.firebaseapp.com",
  //   databaseURL: "https://olx123-6dcab.firebaseio.com",
  //   projectId: "olx123-6dcab",
  //   storageBucket: "olx123-6dcab.appspot.com",
  //   messagingSenderId: "871960993004",
  //   appId: "1:871960993004:web:b6f0f7e3186c36690c99c9"
  // };
  // Initialize Firebase
  // var fire = 

  firebase.initializeApp(firebaseConfig);

export default firebase;