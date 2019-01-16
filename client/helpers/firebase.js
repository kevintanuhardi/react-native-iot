import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAskIqrMi_ivgqJGNiQj3RKGxUFiPcFq50",
  authDomain: "password-managing.firebaseapp.com",
  databaseURL: "https://password-managing.firebaseio.com",
  projectId: "password-managing",
  storageBucket: "password-managing.appspot.com",
  messagingSenderId: "879918966264"
};
firebase.initializeApp(config);
const db = firebase.database()

export default db;