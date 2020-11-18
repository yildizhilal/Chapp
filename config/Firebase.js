
import firebase from 'firebase'

  import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGE_SENDER_ID,
    APP_ID
} from '@env'

const firebaseConfig = {
  apiKey: "AIzaSyDy5IJcBg35qUj4qKiXLdo_Mt31Nxk1XAw",
  authDomain: "chapp-ef3e6.firebaseapp.com",
  databaseURL: "https://chapp-ef3e6.firebaseio.com",
  projectId: "chapp-ef3e6",
  storageBucket: "chapp-ef3e6.appspot.com",
  messagingSenderId: "1027417791718",
  appId: "1:1027417791718:web:abb9e02c3aec62a5f42f27",
  measurementId: "G-QVRDCSVZGF"
}


// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase