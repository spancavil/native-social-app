// Import the functions you need from the SDKs you need
import firebase from "firebase";
import app from 'firebase/app';
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING, APP_ID} from '@env';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING,
  appId: APP_ID
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

export const auth = app.auth();

export const storage = app.storage();

export const firestoredb = firebase.firestore();