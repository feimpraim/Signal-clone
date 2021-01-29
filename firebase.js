import * as firebase from "firebase";
// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBu2InxQ9JPbXB1_KSe0CjTwFnlgss4AGQ",
  authDomain: "signal-clone-c67bd.firebaseapp.com",
  projectId: "signal-clone-c67bd",
  storageBucket: "signal-clone-c67bd.appspot.com",
  messagingSenderId: "718538002569",
  appId: "1:718538002569:web:44a900b4b60322315fb658",
};

let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
