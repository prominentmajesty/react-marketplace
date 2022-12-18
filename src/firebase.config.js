import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSl0p4L3Fa955piAHGymv_MoyAFBhSfEY",
  authDomain: "house-marketplace-app-3a497.firebaseapp.com",
  projectId: "house-marketplace-app-3a497",
  storageBucket: "house-marketplace-app-3a497.appspot.com",
  messagingSenderId: "404735969634",
  appId: "1:404735969634:web:731c3ddb6aa15ff71b843b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();