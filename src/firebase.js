// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAY10OHL2nxqOaABO66lSDqBSZkQloQ-hc",
  authDomain: "clone-acaec.firebaseapp.com",
  projectId: "clone-acaec",
  storageBucket: "clone-acaec.appspot.com",
  messagingSenderId: "639162827701",
  appId: "1:639162827701:web:3ca4ee0976e5f934550ffc",
  measurementId: "G-EH00X0CECY",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
