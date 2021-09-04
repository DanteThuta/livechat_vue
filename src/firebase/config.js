import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyB2xCa1yq4GaHkmD-c9YsW4S75fJaLn0lc",

  authDomain: "vue-blog-system-1630b.firebaseapp.com",

  projectId: "vue-blog-system-1630b",

  storageBucket: "vue-blog-system-1630b.appspot.com",

  messagingSenderId: "904378292949",

  appId: "1:904378292949:web:09db8a276194130327a05c"

};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp}

