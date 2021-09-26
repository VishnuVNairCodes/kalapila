import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBweytrE_705zEwKNtmpGg6J357k6tQ97Q",
  authDomain: "kalapila-app.firebaseapp.com",
  projectId: "kalapila-app",
  storageBucket: "kalapila-app.appspot.com",
  messagingSenderId: "522275930109",
  appId: "1:522275930109:web:2c21d2dc57e612503a2394",
  measurementId: "G-4TGYF6RBRN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
