// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGxeXCnLWmCZs0QwcaKurG010CVxCWaqg",
  authDomain: "lucciv7-e157b.firebaseapp.com",
  projectId: "lucciv7-e157b",
  storageBucket: "lucciv7-e157b.appspot.com",
  messagingSenderId: "637421808432",
  appId: "1:637421808432:web:ace2023e97f5dc106c76f5",
  measurementId: "G-CB1676MHJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const ref = firebase.firestore().collection("products")
export const imgRef = firebase.firestore().collection("img")
export const socialRef = firebase.firestore().collection("social")