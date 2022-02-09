import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsPuMDVLY3ER0Nn70ddwdOuf3abnI7U80",
    authDomain: "netflix-clone-827e4.firebaseapp.com",
    projectId: "netflix-clone-827e4",
    storageBucket: "netflix-clone-827e4.appspot.com",
    messagingSenderId: "45106267844",
    appId: "1:45106267844:web:15bed11b70c0d56ea6eb91",
    
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ auth };
  export default db;
