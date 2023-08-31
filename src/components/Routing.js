import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import BookAService from './BookAService';
import Offers from './Offers';
import ContactUs from './ContactUs';
import NoPage from './NoPage';
import OnClickServiceBooking from './OnClickServiceBooking';

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/bookaService' element={<BookAService />} />
            <Route path='/offers' element={<Offers />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/OnClickServiceBooking/:serviceId' element={<OnClickServiceBooking/>} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    </div>
  );
}

export default Routing;
