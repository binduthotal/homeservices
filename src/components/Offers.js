import React, { useEffect, useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Offers = () => {
  const [offersData, setOffersData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/offers")
      .then((res) => {
        setOffersData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="body-container offers-container">
      {/* BreadCrumbs */}
      <div className="breadcrumb-block">
        <BreadCrumbs name="Offers" />
        {/* <h1>Offers</h1> */}
      </div>

      <div className="container">
        <div className="row">
          {offersData.map((offer) => {
            return (

              <div className="col-6" key={offer.id}>
                <div className="offers-box">
                  <NavLink  className="link" to={`/OnClickServiceBooking/${offer.serviceId}`}>
                    <h5>{offer.service}</h5>
                    <p>{offer.description}</p>
                    <p>
                      <strong>Will expire on : </strong>
                      {offer.expiryDate}
                    </p>
                    <p>Grab the deal!!</p>
                  </NavLink>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;
