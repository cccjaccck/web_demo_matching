import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   databaseURL: process.env.DATABASE_URL,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGE_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDKJP051xNt1_NuhJzxB32TRciHljnRVr0",
  authDomain: "fir-shopping-3214b.firebaseapp.com",
  databaseURL: "https://fir-shopping-3214b-default-rtdb.firebaseio.com",
  projectId: "fir-shopping-3214b",
  storageBucket: "fir-shopping-3214b.appspot.com",
  messagingSenderId: "711296917165",
  appId: "1:711296917165:web:de7b9b622161003e05f024",
  measurementId: "G-K3GXB2TEJT",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const database = firebase.database();
