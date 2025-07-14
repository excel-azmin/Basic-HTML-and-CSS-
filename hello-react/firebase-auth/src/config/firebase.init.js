// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCnn3M3ZZjhoDyaXeEI7aQIjn_eEs1OhCI',
  authDomain: 'react-auth-5183b.firebaseapp.com',
  projectId: 'react-auth-5183b',
  storageBucket: 'react-auth-5183b.firebasestorage.app',
  messagingSenderId: '148661610316',
  appId: '1:148661610316:web:1be94054f9448e8dfe11e9',
  measurementId: 'G-Y7C5GLWW1M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const AUTH = getAuth(app);

