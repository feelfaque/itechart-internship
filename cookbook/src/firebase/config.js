import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTVYnkskOZIB1DfYzRVJ5e_egjS39QNRI",
    authDomain: "cookbook-16369.firebaseapp.com",
    projectId: "cookbook-16369",
    storageBucket: "cookbook-16369.appspot.com",
    messagingSenderId: "281280824431",
    appId: "1:281280824431:web:7674692c2faf5d378c799a"
};

//init firebase
initializeApp(firebaseConfig);

// init database
const db = getFirestore();

// init firebase authentication
const authFirebase = getAuth();

export const addUserToLocalStorage = onAuthStateChanged(authFirebase, (user) => {
    localStorage.setItem('user', JSON.stringify(user))
});

export { db, authFirebase };