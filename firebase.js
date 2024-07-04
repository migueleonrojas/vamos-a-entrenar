import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js';


const firebaseConfig = {
   apiKey: "AIzaSyAsZGHgxSdi3Bxp4_4EubjDkJI0HfsHgSo",
   authDomain: "miguel-leon-4d8e7.firebaseapp.com",
   projectId: "miguel-leon-4d8e7",
   storageBucket: "miguel-leon-4d8e7.appspot.com",
   messagingSenderId: "922059649885",
   appId: "1:922059649885:web:99ca7e241c14864616eeb4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;

