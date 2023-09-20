// import * as fb from 'firebase/app';
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyAjTlpZU3ii_nNn6ZErhCq2-04DKWfLc4w",
//     authDomain: "home-services-7f9a6.firebaseapp.com",
//     databaseURL: "https://home-services-7f9a6-default-rtdb.firebaseio.com",
//     projectId: "home-services-7f9a6",
//     storageBucket: "home-services-7f9a6.appspot.com",
//     messagingSenderId: "205529585963",
//     appId: "1:205529585963:web:eac7b7d9ab3c60177e8d6e"
// };
// // Initialize Firebase
//    const Firebase =  fb.initializeApp(firebaseConfig);


// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(Firebase);

// export default database;

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://home-services-7f9a6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(firebase);
