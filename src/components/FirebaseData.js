import React, { useEffect, useState } from 'react';
import {database} from './../FirebaseConfig.js'     // <------  import firebase
import { ref, onValue, get } from "firebase/database";

// const FirebaseData = () => {

//     const [dataArray, setDataArray] = useState([]);
//     let tempArray = [];

//     useEffect(() => {

//         // const database = getDatabase(firebase);
//         // let childData;

//         // let dbRef = ref(database, 'services');
//         // onValue(dbRef, snap => {
//         //     snap.forEach(childSnap => {
//         //         childData = childSnap.val();
//         //         tempArray.push(childData)
//         //     })
//         // })
//         // setDataArray(tempArray)


//     }, [])

//     console.log(dataArray)
// }

// export default FirebaseData;

export const fetchDataFromFirebase = async () => {

    const dataRef = ref(database);

    try {
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching data from Firebase: " + error)
        throw error;
    }
}


