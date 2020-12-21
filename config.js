import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfIvkvwAkG7Uf3BAaqJeVEzSzbxXKiktk",
  authDomain: "willy-app-d54ce.firebaseapp.com",
  projectId: "willy-app-d54ce",
  storageBucket: "willy-app-d54ce.appspot.com",
  messagingSenderId: "830470615660",
  appId: "1:830470615660:web:8c994186f7de7a648e5e49",
  measurementId: "G-MS058J7Q6R"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
