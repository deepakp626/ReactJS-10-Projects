// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8X4vHf6rlolrhRoEBV4Urg7aR83b3Nh8",
  authDomain: "vite-contact-9e5af.firebaseapp.com",
  projectId: "vite-contact-9e5af",
  storageBucket: "vite-contact-9e5af.appspot.com",
  messagingSenderId: "331841201936",
  appId: "1:331841201936:web:da3f6c2393db3144992795"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 