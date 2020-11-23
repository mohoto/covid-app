import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDsNk5i323qALcx6aBy4-S0M4csc5Gs4XU",
  authDomain: "covid-app-af0a1.firebaseapp.com",
  databaseURL: "https://covid-app-af0a1.firebaseio.com",
  projectId: "covid-app-af0a1",
  storageBucket: "covid-app-af0a1.appspot.com",
  messagingSenderId: "479918499774",
  appId: "1:479918499774:web:c6c864c035ba3e67e17bef"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();

export { auth };
export default db;