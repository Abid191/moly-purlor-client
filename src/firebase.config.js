// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTGjRa5jn3SQ7KoqGkkDmx5LicAkrja-Y",
  authDomain: "moly-purlor-client.firebaseapp.com",
  projectId: "moly-purlor-client",
  storageBucket: "moly-purlor-client.appspot.com",
  messagingSenderId: "133528959680",
  appId: "1:133528959680:web:d80e871db4b4588002cb25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;