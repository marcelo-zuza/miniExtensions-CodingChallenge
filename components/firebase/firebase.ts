// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';
import { /* connectStorageEmulator,  getStorage */ } from 'firebase/storage';
// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkZq9RUHqWSqjLHoVz3vOlyxFAZmNEZ0k",
    authDomain: "miniext-codechallenge.firebaseapp.com",
    projectId: "miniext-codechallenge",
    storageBucket: "miniext-codechallenge.appspot.com",
    messagingSenderId: "47944449441",
    appId: "1:47944449441:web:5851c0a083744ea56bdfe0",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const baseBucketName = 'gs://miniext-codechallenge.appspot.com'

/* if (isDev) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
} */
