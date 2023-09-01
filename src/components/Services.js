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
              return(
                <div className='col-lg-3 col-md-3 col-sm-6' key={services.id}>
                  <div className='service-list' >
                  <NavLink className="service-list-navlink" to={`/OnClickServiceBooking/${services.id}`} ><p >{services.name}</p></NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* <div className='row'>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${1}`}><p>Carpenter</p></NavLink>
            </div>
          </div>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${2}`}><p>Plumber</p></NavLink>
            </div>
          </div>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${3}`}><p>Painter</p></NavLink>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${4}`}><p>Electrician</p></NavLink>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${5}`}><p>Ac Repairs</p></NavLink>
            </div>
          </div>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${6}`}><p>Appliances Repairs</p></NavLink>
            </div>
          </div>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${7}`}><p>Cleanig</p></NavLink>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${8}`}><p>House Deep Clean</p></NavLink>
            </div>
          </div>
        </div>
        <div className='row' style={{ paddingBottom: "50px" }}>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${9}`}><p>Kitchen Deep Clean</p></NavLink>
            </div>
          </div>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${10}`}><p>Pest Control</p></NavLink>
            </div>
          </div>
          <div className='col-md-3 '>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${11}`}><p>Bathroom Cleaning</p></NavLink>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='service-list'>
              <NavLink className="service-list-navLink" to={`/OnClickServiceBooking/${12}`}><p>Home Repairs</p></NavLink>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Services;
