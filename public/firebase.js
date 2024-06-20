// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP6rBdOc3QS4g3s2cCMDDf91CEEMEpU-E",
  authDomain: "tritoanservice-3b540.firebaseapp.com",
  projectId: "tritoanservice-3b540",
  storageBucket: "tritoanservice-3b540.appspot.com",
  messagingSenderId: "880343688598",
  appId: "1:880343688598:web:2e951df89d512e0587a9b7",
  measurementId: "G-YEZE0QQFQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);