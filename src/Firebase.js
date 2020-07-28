import firebase from "firebase/app";
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyCdCLwbk6yy_TzgSWHkQ_YCEOQoT1vRsEw",
    authDomain: "like-count3.firebaseapp.com",
    databaseURL: "https://like-count3.firebaseio.com",
    projectId: "like-count3",
    storageBucket: "like-count3.appspot.com",
    messagingSenderId: "876142197930",
    appId: "1:876142197930:web:00281f9e162d782a74e4d3"
  };
  firebase.initializeApp(config);

  export default firebase;