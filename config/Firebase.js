
import * as firebase from 'firebase';

import 'firebase/firestore';


try {
  firebase.initializeApp({
    apiKey: "AIzaSyDy5IJcBg35qUj4qKiXLdo_Mt31Nxk1XAw",
    authDomain: "chapp-ef3e6.firebaseapp.com",
    databaseURL: "https://chapp-ef3e6.firebaseio.com",
    projectId: "chapp-ef3e6",
    storageBucket: "chapp-ef3e6.appspot.com",
    messagingSenderId: "1027417791718",
    appId: "1:1027417791718:web:abb9e02c3aec62a5f42f27",
    measurementId: "G-QVRDCSVZGF"
  })
  } catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(err.message)) {
  console.error( err.stack)
  }}
  const Firebase= firebase;


export default Firebase