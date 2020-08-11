import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
const fbConfig = {
  apiKey: "AIzaSyDZ74Ntmnj2x575GlVaX3E_tjJpQdi_x2U",
  authDomain: "lyricsapp-e235e.firebaseapp.com",
  databaseURL: "https://lyricsapp-e235e.firebaseio.com",
  projectId: "lyricsapp-e235e",
  storageBucket: "lyricsapp-e235e.appspot.com",
  messagingSenderId: "464891948687",
  appId: "1:464891948687:web:52f236e2bc7d472d538afa",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);
firebase.firestore();
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
export default store;
