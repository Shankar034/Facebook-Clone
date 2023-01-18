// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "./firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA7fPzyxv_IGDUBZsrAweOEaQzZHClDSTc",
  authDomain: "facebook-clone-55d75.firebaseapp.com",
  projectId: "facebook-clone-55d75",
  storageBucket: "facebook-clone-55d75.appspot.com",
  messagingSenderId: "716738367785",
  appId: "1:716738367785:web:9eb74c653aaaa021d56738",
  measurementId: "G-3F27GLWT1X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;