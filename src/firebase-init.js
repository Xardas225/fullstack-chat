import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSc6JzC22mkaJxYTQh10v_puiWdWiP8IE",
  authDomain: "fullstack-chat-391514.firebaseapp.com",
  projectId: "fullstack-chat-391514",
  storageBucket: "fullstack-chat-391514.appspot.com",
  messagingSenderId: "868028817462",
  appId: "1:868028817462:web:bb566668d0ba6577e37897",
  measurementId: "G-4DYF3W7J27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
