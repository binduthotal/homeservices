import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [admin, setAdmin] = useState("");
    const [pwd, setPwd] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        if (admin === "admin" && pwd === "admin@123") {
            console.log("Detailes right");
            navigate("/adminPanel")
        } else {
            alert("User Name or Password incorrect");
        }
    };
    return (
        <div className='admin-container'>

            <h1>Home Services</h1>
            <h2>Welcome Admin</h2>
            <form onSubmit={submitHandler}>
                <div >
                    <input className='form-control' type='text' name='name' placeholder='Enter Username' value={admin} onChange={(e) => setAdmin(e.target.value)}/>              
                </div>
                <div >
                    <input className='form-control' type='password' name='password' placeholder='Enter Password' value={pwd} onChange={(e) => setPwd(e.target.value)}/>              
                </div>
                <div>
                    <input className='btn btn-secondary' type='submit'  value="Login"/>              
                </div>
            </form>

        </div>
    );
}

export default Login;
