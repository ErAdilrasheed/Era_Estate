// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "eraestate-9f548.firebaseapp.com",
  projectId: "eraestate-9f548",
  storageBucket: "eraestate-9f548.firebasestorage.app",
  messagingSenderId: "841675956335",
  appId: "1:841675956335:web:a53402358d7d29cbf06d9a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

