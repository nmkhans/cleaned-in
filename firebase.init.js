import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDixzxxMzKPJoeYdG479kpCDF3-Ajhq3hQ",
  authDomain: "nmk-cleanedin.firebaseapp.com",
  projectId: "nmk-cleanedin",
  storageBucket: "nmk-cleanedin.appspot.com",
  messagingSenderId: "370962185686",
  appId: "1:370962185686:web:6a2ee1d86467772140f877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth
}