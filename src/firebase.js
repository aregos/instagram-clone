import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQoHcEzwW2duEObPAjdkIUSJXxQ5K85e0",
    authDomain: "instagram-clone-1a430.firebaseapp.com",
    databaseURL: "https://instagram-clone-1a430.firebaseio.com",
    projectId: "instagram-clone-1a430",
    storageBucket: "instagram-clone-1a430.appspot.com",
    messagingSenderId: "111798110370",
    appId: "1:111798110370:web:65993426b6055ee5c72ffb",
    measurementId: "G-VZVYF9X0GS"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };