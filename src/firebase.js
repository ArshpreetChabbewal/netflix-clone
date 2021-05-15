import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCyyqJNxNial6eCCzhszhrs2w7XiN5h2E",
    authDomain: "netflix-demo-c5ff4.firebaseapp.com",
    projectId: "netflix-demo-c5ff4",
    storageBucket: "netflix-demo-c5ff4.appspot.com",
    messagingSenderId: "91613577747",
    appId: "1:91613577747:web:5b897b783a66cbcd20b5e6",
    measurementId: "G-3B2Z6F4HTB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
