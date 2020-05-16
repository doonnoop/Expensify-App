import * as firebase from "firebase";

const firebaseConfig = {
  // apiKey: "AIzaSyAFRB3Vu7-8Hv1IefCqXXnD-rtL6hYFf6Q",
  // authDomain: "expensify-63e1d.firebaseapp.com",
  // databaseURL: "https://expensify-63e1d.firebaseio.com",
  // projectId: "expensify-63e1d",
  // storageBucket: "expensify-63e1d.appspot.com",
  // messagingSenderId: "491005320894",
  // appId: "1:491005320894:web:ed265621533d7b21d008ef",
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
