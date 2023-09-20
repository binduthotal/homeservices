import React, { useEffect, useState } from 'react';
import BreadCrumbs from './BreadCrumbs';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Services = () => {

  const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
      axios
          .get("http://localhost:4000/services")
          .then((res) => {
              console.log(res.data);
              setServicesData(res.data);
          })
          .catch((err) => alert("Error", err.msg));
  }, []);

  return (
    <div className='body-container service-container'>

      {/* BreadCrumbs */}
      <div className="breadcrumb-block">
        <BreadCrumbs name="Services" />
        {/* <h1>Services</h1> */}
      </div>

      <div className='container'>
        <div className='row'>
          {
            servicesData.map(services => {
              return (
                <div className='col-lg-3 col-md-3 col-sm-6' key={services.id}>
                  <div className='service-list' >
                    <NavLink className="service-list-navlink" to={`/OnClickServiceBooking/${services.id}`} ><p >{services.name}</p></NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Services;
