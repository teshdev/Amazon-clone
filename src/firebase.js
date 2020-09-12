import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCa5sRPQIYG6uGIO9AbqetvjrHu59IHomU",
  authDomain: "clone-e2b17.firebaseapp.com",
  databaseURL: "https://clone-e2b17.firebaseio.com",
  projectId: "clone-e2b17",
  storageBucket: "clone-e2b17.appspot.com",
  messagingSenderId: "501984193287",
  appId: "1:501984193287:web:30997fbd68c3048fe3b3a2",
  measurementId: "G-RNDBYMTT34",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
