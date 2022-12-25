// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjoKGscy2WlyXB_as4lV38-wK402IIIqk",
  authDomain: "healthos-e86ac.firebaseapp.com",
  projectId: "healthos-e86ac",
  storageBucket: "healthos-e86ac.appspot.com",
  messagingSenderId: "337319605419",
  appId: "1:337319605419:web:f043d45e83f6b99075f3ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;