import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB71-9piknZsxS_Ft301xSytGdQX5X-BeE",
  authDomain: "project71-993ab.firebaseapp.com",
  projectId: "project71-993ab",
  storageBucket: "project71-993ab.appspot.com",
  messagingSenderId: "483284005401",
  appId: "1:483284005401:web:f7acc6f8fff8e57e887088"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
