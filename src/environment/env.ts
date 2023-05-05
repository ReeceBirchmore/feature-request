import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAFVVUDaOKy92fEwxbRSdrVomthkhFEo8",
    authDomain: "feature-request-6c613.firebaseapp.com",
    projectId: "feature-request-6c613",
    storageBucket: "feature-request-6c613.appspot.com",
    messagingSenderId: "176662043268",
    appId: "1:176662043268:web:2dfd8fab86da89afd680d1",
    measurementId: "G-0NZZ2WSV55"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { firebaseConfig, db };
