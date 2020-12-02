import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDQnL6a62YRHnD0JW_OwNJ4TtCiX_U2HDU',
  authDomain: 'twitter-clone-86c9a.firebaseapp.com',
  databaseURL: 'https://twitter-clone-86c9a.firebaseio.com',
  projectId: 'twitter-clone-86c9a',
  storageBucket: 'twitter-clone-86c9a.appspot.com',
  messagingSenderId: '603671173539',
  appId: '1:603671173539:web:dd81d305a627c685cc6216',
  measurementId: 'G-1LWX78GK2Q',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);

export default db;
