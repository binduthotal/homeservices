import React from 'react';
import useCustomFetch from '../useCustomFetch';
import axios from 'axios';
import { NavLink, Outlet } from 'react-router-dom';

const OffersCRUD = () => {

    let offersData = useCustomFetch("http://localhost:4000/offers");
    let serviceData = useCustomFetch("http://localhost:4000/services");

    const deleteOffer = (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
            return false;
        }
        else {
            axios
                .delete(`http://localhost:4000/offers/${id}`)
                .then((response) => {
                    console.log(response.data)
                    alert(` Offer deleted Successfully !`);
                    window.location.reload();
                })
                .catch((err) => alert("Error", err.msg));
        }
    }
    return (
        <div className='dashboard'>
            <div className="crud-links btn-group me-2" role="group" aria-label="Second group">
                <Outlet />
            </div>
            <div className='data-display'>
                <table id="myTable" className="table table-bordered table-striped caption-top text-center">
                    <caption>Offers Data</caption>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Service Id</th>
                            <th>Service Name</th>
                            <th>Description</th>
                            <th>Expiry date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            offersData.map(offer => {
                                return (
                                    <tr key={offer.id}>
                                        <td>{offer.id}</td>
                                        <td>{offer.serviceId}</td>
                                        <td>{offer.service}</td>
                                        <td>{offer.description}</td>
                                        <td>{offer.expiryDate}</td>
                                        <td><NavLink to={`editOffer/${offer.id}`}><button className='btn btn-success'>Edit</button></NavLink></td>
                                        <td><button className='btn btn-danger' onClick={() => deleteOffer(offer.id)}>Delete</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OffersCRUD;
