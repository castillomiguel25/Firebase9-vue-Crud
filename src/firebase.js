import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig =({

     apiKey: "AIzaSyDN2j1HtFtmowKTc7GBAnz3fJOploE7yxs",
  
     authDomain: "login-3ca23.firebaseapp.com",
  
     projectId: "login-3ca23",
  
     storageBucket: "login-3ca23.appspot.com",
  
     messagingSenderId: "856405946798",
  
     appId: "1:856405946798:web:4f367c44a6282de26d983f",
  
     measurementId: "G-HWH5M9HZ5B"
  
   });
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const DatosRef = collection(db, "cities");
export default DatosRef;