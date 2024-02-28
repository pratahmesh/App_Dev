import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAgD_OMGwkG67gB38teKjeJmfTiKOnaqDI",
  authDomain: "testing-bcf98.firebaseapp.com",
  projectId: "testing-bcf98",
  storageBucket: "testing-bcf98.appspot.com",
  messagingSenderId: "97311276139",
  appId: "1:97311276139:web:3903855a75465b7503852e"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);