import * as firebase from 'firebase';

import 'firebase/firestore';


try {
  firebase.initializeApp({
    apiKey: "AIzaSyAfhC2zD--KsdCwfutOpVcwKOeTQwCh3sc",
    authDomain: "h-chapp.firebaseapp.com",
    projectId: "h-chapp",
    storageBucket: "h-chapp.appspot.com",
    messagingSenderId: "912543074598",
    appId: "1:912543074598:web:84800b5aff3e787d44d9e7",
    measurementId: "G-8T9SB3KSR6"
  })
  } catch (err) {
  // we skip the “already exists” message which is
  // not an actual error when we’re hot-reloading
  if (!/already exists/.test(err.message)) {
  console.error( err.stack)
  }}
  const Firebase= firebase;


export default Firebase