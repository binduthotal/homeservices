import axios from 'axios';
import React , { useState, useEffect }from 'react';
 

const useCustomFetch = (url) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, []);
    return data;
}

export default useCustomFetch;
