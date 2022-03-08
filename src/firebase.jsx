import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {

    // apiKey: "process.env.REACT_APP_FIREBASE_APIKEY",

    //    authDomain: "process.env.REACT_APP_FIREBASE_AUTHDOMAIN",

    //  projectId: "process.env.REACT_APP_FIREBASE_PROJECTID",

    //storageBucket: "process.env.REACT_APP_FIREBASE_STORAGEBUCKET",

    //messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID",

    //appId: "process.env.REACT_APP_FIREBASE_APPID",

    //    measurementId: "process.env.REACT_APP_FIREBASE_MEASUREMENTID",




    apiKey: "AIzaSyBIxVrygb_eEkDygtq55WjxYUrITUdhlxY",

    authDomain: "mywebsite-5d12a.firebaseapp.com",

    projectId: "mywebsite-5d12a",

    storageBucket: "mywebsite-5d12a.appspot.com",

    messagingSenderId: "824156375055",

    appId: "1:824156375055:web:566242b3fbdec20e54bb7a",

    measurementId: "G-1DC52PKMPD",


};
//nog verbergen, later .e n v file?

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const db = getFirestore(app);


