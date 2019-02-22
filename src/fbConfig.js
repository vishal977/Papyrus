import firebase from 'firebase/app'
import 'firebase/firestore'

  var config = {
    apiKey: "AIzaSyCw9NJfEfgR2hGBx2pfyDQkr48uu2Cjzf8",
    authDomain: "papyrus-11cc8.firebaseapp.com",
    databaseURL: "https://papyrus-11cc8.firebaseio.com",
    projectId: "papyrus-11cc8",
    storageBucket: "",
    messagingSenderId: "255630521066"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({});

  export default firebase;