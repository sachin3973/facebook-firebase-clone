// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// This line actually initialize the firebase app
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4BlnPGJJ4U4za1I3yikZMsZjv6m83Uw4",
  authDomain: "facebook-clone-f8767.firebaseapp.com",
  databaseURL: "https://facebook-clone-f8767.firebaseio.com",
  projectId: "facebook-clone-f8767",
  storageBucket: "facebook-clone-f8767.appspot.com",
  messagingSenderId: "660737354539",
  appId: "1:660737354539:web:937684fc9d1a8241ea336e",
  measurementId: "G-71T04FGJE7",
};

// this line connect frontend to firebase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
// this line is to setup our database
const db = firebaseApp.firestore();
// authentication setup
const auth = firebase.auth();
// this is line is to tell firebase that we are using google for authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
