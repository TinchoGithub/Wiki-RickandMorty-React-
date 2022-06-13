import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAgcMMBPg_XdpA4yNTk3w9LhQVmPaa7Zbk",
  
    authDomain: "dr2022-f2bec.firebaseapp.com",
  
    projectId: "dr2022-f2bec",
  
    storageBucket: "dr2022-f2bec.appspot.com",
  
    messagingSenderId: "354567680693",
  
    appId: "1:354567680693:web:ddee2e348e648550ca84fc"
  
  };
  
  
  // Initialize Firebase
  
 firebase.initializeApp(firebaseConfig);

 export default firebase;