// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKGyBsc4O8h17qV_CxMhFIA0S00u2t2FE",
  authDomain: "prueba-cidm2.firebaseapp.com",
  projectId: "prueba-cidm2",
  storageBucket: "prueba-cidm2.appspot.com",
  messagingSenderId: "650120800679",
  appId: "1:650120800679:web:2ecfebc404d412fdbfae82"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db