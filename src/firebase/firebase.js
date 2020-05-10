import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFRB3Vu7-8Hv1IefCqXXnD-rtL6hYFf6Q",
  authDomain: "expensify-63e1d.firebaseapp.com",
  databaseURL: "https://expensify-63e1d.firebaseio.com",
  projectId: "expensify-63e1d",
  storageBucket: "expensify-63e1d.appspot.com",
  messagingSenderId: "491005320894",
  appId: "1:491005320894:web:ed265621533d7b21d008ef",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };
