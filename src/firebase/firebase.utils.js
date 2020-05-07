import firebase from'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA8LEEuC-eFEmGoxBeqB-sLpqK2RAt5XSA",
    authDomain: "art-db-1b0a3.firebaseapp.com",
    databaseURL: "https://art-db-1b0a3.firebaseio.com",
    projectId: "art-db-1b0a3",
    storageBucket: "art-db-1b0a3.appspot.com",
    messagingSenderId: "704284735589",
    appId: "1:704284735589:web:bf7a25719c886f198b2e8c"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;	