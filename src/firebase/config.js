import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyB95QMS9KFB3dlfxTie2KIxhdh3nzypLaE",
    authDomain: "ecovoiturage-f3dfa.firebaseapp.com",
    projectId: "ecovoiturage-f3dfa",
    storageBucket: "ecovoiturage-f3dfa.appspot.com",
    messagingSenderId: "107740833158",
    appId: "1:107740833158:web:57c01a66055632bc553807",
    measurementId: "G-7FSDZBX4E3"
  };
  
  let app ;
  if (firebase.apps.length==0) {
    app=firebase.initializeApp(firebaseConfig)
  }else{
    app = firebase.app()  ;
  }
export const db = app.firestore();
export const auth = firebase.auth();
export const storage=app.storage();
export default {db , auth,storage}