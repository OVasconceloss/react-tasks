import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCmRC6jD6FmjjIywOGooZX7AAfr_Zb2yFs",
    authDomain: "react-tasks-349a7.firebaseapp.com",
    projectId: "react-tasks-349a7",
    storageBucket: "react-tasks-349a7.appspot.com",
    messagingSenderId: "1045720807210",
    appId: "1:1045720807210:web:2e0652c324ae0226489053"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };