import firebase from "firebase";
import "firebase/storage";

  
const firebaseConfig = {

  appName: "brogan-c0f45",
  apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRBASE_ID,
  storageBucket: process.env.REACT_APP_FIRBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRBASE_SENDER_ID ,
  appId: process.env.REACT_APP_FIRBASE_API_APP_ID,
  measurementId: process.env.REACT_APP_FIRBASE_MEAS_ID 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage };