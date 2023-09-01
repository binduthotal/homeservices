import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditService = () => {

    const { serviceId } = useParams();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [qoute, setQoute] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/services/${serviceId}`)
            .then((response) => {
                setName(response.data.name)
                setDescription(response.data.description);
                setQoute(response.data.qoute)
            })
            .catch((err) => alert("Error", err.msg));
    }, [])

    const updateData = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/services/${serviceId}`, { name, description, qoute })
            .then((response) => {
                alert("Data updated Successfully !");
                navigate('/adminPanel')
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
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
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
            <textarea
                className='form-control'
                type="text"
                name="descp"
                value={qoute}
                placeholder="Quote"
                onChange={(e) => setQoute(e.target.value)}
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

export default EditService;
