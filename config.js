import firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBum1is2IYa6ikECk1SGSQMwve29weAPok",
  authDomain: "storyhub-49ee8.firebaseapp.com",
  projectId: "storyhub-49ee8",
  storageBucket: "storyhub-49ee8.appspot.com",
  messagingSenderId: "427571855165",
  appId: "1:427571855165:web:f0172c1410546dd0904f54",
  measurementId: "G-9W7L3G40PX"
};
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();