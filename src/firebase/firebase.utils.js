import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlQH7Ls16owfdxK0J1m9KwuoDOC6msVGQ",
    authDomain: "crown-db12.firebaseapp.com",
    databaseURL: "https://crown-db12.firebaseio.com",
    projectId: "crown-db12",
    storageBucket: "",
    messagingSenderId: "887420598485",
    appId: "1:887420598485:web:a81f72c304507c8146ca5c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider  = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;