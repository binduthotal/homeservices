import React, { useEffect, useState } from "react";
import BreadCrumbs from "./BreadCrumbs";
import axios from "axios";

const BookAService = () => {

  const [serviceName, setServiceName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [notes, setNotes] = useState("");
  const [servicesData, setServicesData] = useState([]);

  // Get Servies Data
  useEffect(() => {
    axios
      .get("http://localhost:4000/services")
      .then((res) => {
        setServicesData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitHandler = (e) => {
    let a, b, c, d;
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
        document.getElementById("nameId").innerHTML = "Please enter characters(a - z / A - Z)";
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
      c = 0
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
    }
    else{ 
      document.getElementById("msgId").innerHTML = "";
      d = 1;
    }

    if (a === 1 && b === 1 && c === 1 && d === 1) {
      console.log("Success")
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
          setUserName("");
          setEmail("");
          setPhone("");
          setServiceName("");
          setNotes("");
          setSubject("");
        })
        .catch((err) => alert("Error: Booking UnSuccesssfull!"));
    }

  };

  return (
    <div className="body-container book-container">
      {/* BreadCrumbs */}
      <div className="breadcrumb-block">
        <BreadCrumbs name="Book a Service" />
        {/* <h1>Book your Service</h1> */}
      </div>

      <div className="container">
        <h4>Fill the form :</h4>
        <form className="form-group" onSubmit={submitHandler}>
          <div className="row">
            {/* Name */}
            <div className="col-6">
              {/* <label htmlFor="userName" className="form-label">
                Name:
              </label> */}
              <br />
              <input
                className="form-control"
                type="text"
                name="userName"
                value={userName}
                placeholder="Enter Name"
                onChange={(e) => setUserName(e.target.value)}
              />
              <div id="nameId" className="errMsg"></div>
            </div>

            {/* Service Name */}
            <div className="col-6">
              {/* <label htmlFor="serviceName" className="form-label">
                Service Name:
              </label> */}
              <br />
              <select
                className="form-select"
                id="validationDefault04"
                name="serviceName"
                value={serviceName}
                required
                onChange={(e) => setServiceName(e.target.value)}
              >
                <option value="" disabled>
                  Choose...
                </option>
                {servicesData.map((service) => {
                  return (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Email */}
            <div className="col-6">
              {/* <label htmlFor="email" className="form-label">
                Email:
              </label> */}
              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailId" className="errMsg"></div>
            </div>

            {/* Phone */}
            <div className="col-6">
              {/* <label htmlFor="phone" className="form-label">
                Phone
              </label> */}
              <br />
              <input
                className="form-control"
                type="tel"
                name="phone"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
              <div id="phoneId" className="errMsg"></div>
            </div>

            {/* Subject */}
            <div className="col-12">
              {/* <label htmlFor="subject" className="form-label">
                Subject
              </label> */}
              <br />
              <input
                className="form-control"
                type="text"
                name="subject"
                value={subject}
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="col-12">
              {/* <label htmlFor="msg" className="form-label">
                Message
              </label> */}
              <br />
              <textarea
                className="form-control"
                type="text"
                name="msg"
                value={notes}
                placeholder="Message"
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <div id="msgId" className="errMsg"></div>
            </div>

            {/* Submit Button */}
            <div className="col-12">
              <input
                className="btn btn-success"
                type="submit"
                value="Book Service"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAService;
