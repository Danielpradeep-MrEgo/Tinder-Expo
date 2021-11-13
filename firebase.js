import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgvKrMv_i5GtoImh5b47zwSuNa3Y-mNqI",
  authDomain: "tinder-native-9a0af.firebaseapp.com",
  projectId: "tinder-native-9a0af",
  storageBucket: "tinder-native-9a0af.appspot.com",
  messagingSenderId: "411831416098",
  appId: "1:411831416098:web:4df2ec3fe15e7ad5c7a17b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
