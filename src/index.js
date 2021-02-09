import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "animate.css/animate.min.css";

import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/storage'
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'



import App from './App';

import {
  BrowserRouter as Router
} from "react-router-dom";

const fbConfig = {
  appName: "brogan-c0f45",
  apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRBASE_ID,
  storageBucket: process.env.REACT_APP_FIRBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRBASE_SENDER_ID ,
  appId: process.env.REACT_APP_FIRBASE_API_APP_ID,
  measurementId: process.env.REACT_APP_FIRBASE_MEAS_ID 
}


firebase.initializeApp(fbConfig);

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}



const initialState = {}

const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
})

const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
    <Router>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </Provider>  
    </Router>,
    
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

