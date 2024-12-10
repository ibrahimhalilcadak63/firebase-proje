// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaPkfYaE2ijbRkYNgTEuH27Nn3fV3BCB4",
  authDomain: "yeni-projem-c4c3b.firebaseapp.com",
  projectId: "yeni-projem-c4c3b",
  storageBucket: "yeni-projem-c4c3b.appspot.com",
  messagingSenderId: "335031452304",
  appId: "1:335031452304:web:df592c61479aee66704e15",
  measurementId: "G-J66DPE6GEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebas auth referansını al
export const auth = getAuth(app);

//google sağlayıcısını kur 
export const provider = new GoogleAuthProvider();