import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCustomFetch from "../useCustomFetch";

const AddOffer = () => {

    const [service, setServiceName] = useState("");
    const [serviceId, setServiceId] = useState("");
    const [description, setDescription] = useState("");
    const [expiryDate, setExpirydate] = useState("");

    let serviceData = useCustomFetch("http://localhost:4000/services");

    const navigate = useNavigate();

    const postData = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/offers", {
                service,
                serviceId,
                description,
                expiryDate,
            })
            .then((res) => {
                alert("Data added Successfully !");
                setServiceName("")
                setServiceId("")
                setDescription("")
                setExpirydate("")
                // navigate("/adminPanel");
            })
            .catch((err) => alert("Error", err.msg));
    };

    const selectOnChangeHandler = (e) => {
        setServiceName(e.target.value)

        serviceData.map(service => {
            if (e.target.value === service.name) {
                setServiceId(service.id)
            }
            return null;
        })
    }

    return (
        <div className="col-12">
            <form onSubmit={postData} className="add-form">
                <h3>Add Offers Data</h3>
                <select
                    className="form-select"
                    id="validationDefault04"
                    name="serviceName"
                    value={service}
                    required
                    onChange={selectOnChangeHandler}
                >
                    <option value="" disabled>
                        Choose...
                    </option>
                    {serviceData.map((service) => {

                        return (
                            <option key={service.id} value={service.name}>
                                {service.name}
                            </option>
                        );

                    })}
                </select>

                <div>&nbsp;</div>
               
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={serviceId}
                    placeholder="Service Id"
                    readOnly
                />
                <div>&nbsp;</div>
                <textarea
                    className="form-control"
                    type="text"
                    name="descp"
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div>&nbsp;</div>
                <input
                    className="form-control"
                    type="date"
                    name="expiryDate"
                    value={expiryDate}
                    placeholder="Expiry Date"
                    onChange={(e) => setExpirydate(e.target.value)}
                />
                <div>&nbsp;</div>
                <input
                    type="submit"
                    value="Add Offer"
                    className="btn btn-secondary"
                />
            </form>
        </div>
    );
};

export default AddOffer;
