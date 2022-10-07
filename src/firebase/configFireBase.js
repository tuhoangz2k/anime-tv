// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBBqpcjMFG1luyfHzg2wq2YYeTGT9xN-lo',
    authDomain: 'auth-anime.firebaseapp.com',
    projectId: 'auth-anime',
    storageBucket: 'auth-anime.appspot.com',
    messagingSenderId: '322361357395',
    appId: '1:322361357395:web:9b3fd5aa8915106b2c42a6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
