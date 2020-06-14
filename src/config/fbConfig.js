import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBt2r5ElfZYY4qJ9vPLO1ViyzRQPPgJA3s",
  authDomain: "your-plans-app.firebaseapp.com",
  databaseURL: "https://your-plans-app.firebaseio.com",
  projectId: "your-plans-app",
  storageBucket: "your-plans-app.appspot.com",
  messagingSenderId: "55858683784",
  appId: "1:55858683784:web:345fe2baada2c2c221a43d"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;