import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCrZvPAQtgdH5v65ALhYI_-VXoAlK7FrRI",
  authDomain: "midterm-4dd32.firebaseapp.com",
  projectId: "midterm-4dd32",
  storageBucket: "midterm-4dd32.appspot.com",
  messagingSenderId: "359087432568",
  appId: "1:359087432568:web:4db67a53f40224062e1e8d",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;
