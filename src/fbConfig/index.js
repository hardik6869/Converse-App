import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const fbConfig = {
  apiKey: "AIzaSyApbqhEFmmf3Db3V0TpQmMxc7Sx61EBnvY",
  authDomain: "converse-9f5b9.firebaseapp.com",
  databaseURL: "https://converse-9f5b9-default-rtdb.firebaseio.com",
  projectId: "converse-9f5b9",
  storageBucket: "converse-9f5b9.appspot.com",
  messagingSenderId: "13435653578",
  appId: "1:13435653578:web:9d9a04951423359c50d333",
  measurementId: "G-8B760MV42R"
};

firebase.initializeApp(fbConfig);

export default firebase;
