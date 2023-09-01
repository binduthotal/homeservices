import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import useCustomFetch from '../useCustomFetch';

const Dashboard = () => {

    let serviceData = useCustomFetch("http://localhost:5000/services");
    let offersData = useCustomFetch("http://localhost:4000/offers");

   
    return (
        <div className='dashboard'>
                <div className="crud-links btn-group me-2" role="group" aria-label="Second group">
                    <NavLink to="/Add"><button className='btn btn-secondary'>Add</button></NavLink>
                    <NavLink to="/Edit"><button className='btn btn-secondary'>Edit</button></NavLink>
                    <NavLink to="/Delete"><button className='btn btn-secondary'>Delete</button></NavLink>
            </div>
            <div className='data-display'>
                <table id="myTable" className="table table-bordered table-striped caption-top text-center">
                <caption>Services Data</caption>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Quote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            serviceData.map(service => {
                                return (
                                    <tr key={service.id}>
                                        <td>{service.id}</td>
                                        <td>{service.name}</td>
                                        <td>{service.description}</td>
                                        <td>{service.qoute}</td>
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

export default Dashboard;
