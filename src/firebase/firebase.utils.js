import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDIVv0V7kt_EJIgjVlVs2tBUY6afDv14cw",
    authDomain: "crwn-db-2af4f.firebaseapp.com",
    databaseURL: "https://crwn-db-2af4f.firebaseio.com",
    projectId: "crwn-db-2af4f",
    storageBucket: "crwn-db-2af4f.appspot.com",
    messagingSenderId: "616912620964",
    appId: "1:616912620964:web:152790a52ea2c9bba14531",
    measurementId: "G-ZC50JT3FEC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
