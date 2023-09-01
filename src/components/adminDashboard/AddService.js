import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddService = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [qoute, setQoute] = useState("");

    const navigate = useNavigate();

    const postData = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/services", { name, description, qoute })
            .then((res) => {
                alert("Data added Successfully !");
                setName("");
                setDescription("");
                setQoute("");
                navigate('/adminPanel')
            })
            .catch((err) => alert("Error", err.msg));
    };
    
    return (
            <div className="col-12">
                <form onSubmit={postData} className='add-form'>
                    <h3>Add Service Data</h3>
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
                        value="Add Service"
                        className="btn btn-secondary"
                    />
                </form>
            </div>

    );
}

export default AddService;
