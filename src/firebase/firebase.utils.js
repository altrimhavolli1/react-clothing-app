import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB9rMx6xDk3KISMIMJEZ31-w9g3tFay4jI",
    authDomain: "cworn-db.firebaseapp.com",
    projectId: "cworn-db",
    storageBucket: "cworn-db.appspot.com",
    messagingSenderId: "1041510121972",
    appId: "1:1041510121972:web:6c19133900273c118d79a1",
    measurementId: "G-4B9F9GQE6P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
