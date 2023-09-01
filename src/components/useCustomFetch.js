import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-dt/js/dataTables.dataTables.mjs';
import 'jquery/dist/jquery';
import $ from 'jquery';

const useCustomFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))

            setTimeout(()=>{
                $("#myTable").DataTable();
                },1000)

    }, []);
    return data;
}

export default useCustomFetch;
