import React, { useEffect, useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import { useNavigate, useParams } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";


const OnClickServiceBooking = (props) => {

    const { serviceId } = useParams();

    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [description, setDescription] = useState("");
    const [qoute, setQuote] = useState("");

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [notes, setNotes] = useState("");

    useEffect(() => {
        axios
            .get(`http://localhost:4000/services/${serviceId}`)
            .then((res) => {
                console.log(res.data);
                setId(res.data.id);
                setServiceName(res.data.name);
                setDescription(res.data.description);
                setQuote(res.data.qoute);
            })
            .catch((err) => alert("Error", err.msg));
    }, []);

    const bookService = (e) => {
        let a = "", b = "", c = "", d = "";
        e.preventDefault();

        // Form  Validation
        let alphaExp = /^[a-zA-Z\s]+$/;
        let numExp = /^[0-9]+$/;
        let emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;

        // Name Number Validation
        if (userName === "") {
            document.getElementById("nameId").innerHTML = "Please enter Name";
            a = 0;
        } else {
            if (userName.match(alphaExp)) {
                document.getElementById("nameId").innerHTML = "";
                a = 1;
            } else {
                document.getElementById("nameId").innerHTML =
                    "Please enter characters(a - z / A - Z)";
                a = 0;
            }
        }

        // Email Number Validation
        if (email === "") {
            document.getElementById("emailId").innerHTML = "Please enter Email";
            b = 0;
        } else {
            if (email.match(emailExp)) {
                document.getElementById("emailId").innerHTML = "";
                b = 1;
            } else {
                document.getElementById("emailId").innerHTML = "Please enter Email correctly";
                b = 0;
            }
        }

        // Phone Number Validation
        if (phone === "") {
            document.getElementById("phoneId").innerHTML = "Please enter Phone Number";
            c = 0;
        } else {
            if (phone.match(numExp)) {
                document.getElementById("phoneId").innerHTML = "";
                c = 1;
            } else {
                document.getElementById("phoneId").innerHTML = "Please enter valid 10 digit number";
                c = 0;
            }
        }

        // Message Number Validation
        if (notes === "") {
            document.getElementById("msgId").innerHTML = "Please enter Message";
            d = 0;
        } else {
            document.getElementById("msgId").innerHTML = "";
            d = 1;
        }

        if (a === 1 && b === 1 && c === 1 && d === 1) {
            console.log("Success");
            // Data posting to bookings API
            axios
                .post("http://localhost:4000/bookings", {
                    serviceName,
                    userName,
                    email,
                    phone,
                    subject,
                    notes,
                })
                .then((res) => {
                    console.log(res);
                    alert("Service Booked Successfully !");
                    navigate("/services");
                })
                .catch((err) => alert("Error: Booking UnSuccesssfull!"));

        }
    };
    return (
        <div className="body-container book-container">
            {/* BreadCrumb */}
            <div className="breadcrumb-block">
                <BreadCrumbs name="Book Service" />
                {/* <h1>Book Service</h1> */}
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 service-desp">
                        <h3>{serviceName}</h3>
                        <p className="aboutUs-vision-p">{description}</p>
                        <p className="aboutUs-vision-p">
                            <i className="fa fa-quote-left"></i> {qoute}{" "}
                            <i className="fa fa-quote-right"></i>
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <form
                            onSubmit={bookService}
                            className="form-group service-desp-form-group"
                        >
                            <h5>Book Service</h5>
                            <input
                                className="form-control service-desp-form-control"
                                type="text"
                                name="name"
                                value={userName}
                                placeholder="Enter Name"
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }}
                            />
                            <div id="nameId" className="errMsg"></div>
                            <input
                                className="form-control service-desp-form-control"
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <div id="emailId" className="errMsg"></div>
                            <input
                                className="form-control service-desp-form-control"
                                type="tel"
                                name="phone"
                                value={phone}
                                placeholder="Phone"
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            />
                            <div id="phoneId" className="errMsg"></div>
                            <input
                                className="form-control service-desp-form-control"
                                type="text"
                                name="serviceName"
                                value={serviceName}
                            />
                            <input
                                className="form-control service-desp-form-control"
                                type="text"
                                name="subject"
                                value={subject}
                                placeholder="Subject"
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                }}
                            />
                            <textarea
                                className="form-control service-desp-form-control"
                                type="text"
                                name="message"
                                value={notes}
                                placeholder="Message"
                                onChange={(e) => {
                                    setNotes(e.target.value);
                                }}
                            />
                            <div id="msgId" className="errMsg"></div>
                            <input className="btn btn-success" type="submit" value="Book" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnClickServiceBooking;
