// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwTfSOWVjW_u7MH5jzd7A_8aifh1w1eqY",
  authDomain: "chattingapp-b20ca.firebaseapp.com",
  projectId: "chattingapp-b20ca",
  storageBucket: "chattingapp-b20ca.firebasestorage.app",
  messagingSenderId: "603280374365",
  appId: "1:603280374365:web:f6749ccf03d19f5ed16bb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;