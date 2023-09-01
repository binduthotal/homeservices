import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditOffer = () => {
    const { offerId } = useParams();

    console.log(offerId, )
    const [service, serService] = useState("");
    const [description, setDescription] = useState("");
    const [serviceId, setServiceId] = useState("");
    const [expiryDate, setExpirydate] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:4000/offers/${offerId}`)
            .then((response) => {
                console.log(response.data)
                serService(response.data.service)
                setServiceId(response.data.serviceId)
                setDescription(response.data.description);
                setExpirydate(response.data.expiryDate)
            })
            .catch((err) => alert("Error", err.msg));
    }, [])

    const updateData = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:4000/offers/${offerId}`, { service, serviceId, description, expiryDate })
            .then((response) => {
                alert("Data updated Successfully !");
                navigate('/adminPanel/offersCrud')
            })
            .catch((err) => alert("Error", err.msg));
    }
    return (
        <div className="col-12">
        <form onSubmit={updateData} className='add-form'>
            <h3>Edit Data</h3>
            <input
                className='form-control'
                type="text"
                name="serviceName"
                value={service}
                placeholder="Service Name"
                onChange={(e) => serService(e.target.value)}
                
            />
            <div>&nbsp;</div>
            <input
                className='form-control'
                type="text"
                name="serviceId"
                value={serviceId}
                readOnly
            />
            <div>&nbsp;</div>
            <textarea
                className='form-control'
                type="text"
                name="descp"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <div>&nbsp;</div>
            <input
                className='form-control'
                type="date"
                name="descp"
                value={expiryDate}
                placeholder="Quote"
                onChange={(e) => setExpirydate(e.target.value)}
            />
            <div>&nbsp;</div>
            <input
                type="submit"
                value="Update"
                className="btn btn-secondary"
            />
        </form>
    </div>
    );
}

export default EditOffer;
