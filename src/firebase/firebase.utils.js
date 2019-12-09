import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5PCMct-n4CzDg24wjakgPxk48puiHEt4",
    authDomain: "crown-db-28c73.firebaseapp.com",
    databaseURL: "https://crown-db-28c73.firebaseio.com",
    projectId: "crown-db-28c73",
    storageBucket: "crown-db-28c73.appspot.com",
    messagingSenderId: "680041599191",
    appId: "1:680041599191:web:790ba147d74efe685d2092",

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
