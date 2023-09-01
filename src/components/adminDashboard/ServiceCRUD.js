import React from 'react';
import useCustomFetch from '../useCustomFetch';
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';

const ServiceCRUD = () => {

    let serviceData = useCustomFetch("http://localhost:5000/services");
    
    const deleteService = (id) => {
        if(!window.confirm("Are you sure you want to delete"))
        {
            return false;
        }
        else
        {
        axios
            .delete(`http://localhost:5000/services/${id}`)
            .then((response) => {
                alert(`Data with Id ${id} deleted Successfully !`);
                window.location.reload();
            })
            .catch((err) => alert("Error", err.msg));
        }
    }
    return (
        <div className='dashboard'>
            <div className="crud-links btn-group me-2" role="group" aria-label="Second group">
                <Outlet/>
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
                            <th></th>
                            <th></th>
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
                                        <td><NavLink to={`editService/${service.id}`}><button className='btn btn-success'>Edit</button></NavLink></td>
                                        {/* <td><NavLink to={`deleteService/${service.id}`}><button className='btn btn-danger'>Delete</button></NavLink></td> */}
                                        <td><button className='btn btn-danger' onClick={()=> deleteService(service.id)}>Delete</button></td>
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

export default ServiceCRUD;
