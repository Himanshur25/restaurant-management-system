import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Image from "./../../components/images/foodie.jpeg";
import { useNavigate } from "react-router-dom";
import "../../../src/./App.css";
export const Register = () => {
    const [fullname, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const [formData, updateFormData] = React.useState([]);
   const navigate=useNavigate();

    let Submit=(e)=>{
        e.preventDefault();
        const newEntry ={
            fullname:fullname,
            email:email,
            password:password
        }
       
        updateFormData([newEntry])
       // console.log(formData)
       if(fullname==='' || email==='' || password==='') return window.alert("Please fill out the field first")
            const params={
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newEntry)
        }
        fetch("http://localhost:5000/api/register",params).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            window.alert("Registration successful");
            navigate('/login')
        })       
     }
    return (
        <div><Navbar/>
        <div className="App">
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={Submit}>
            <label htmlFor="fullname">Full name</label>
            <input value={fullname} onChange={(e)=>{setfullName(e.target.value)}} type="fullname" placeholder="Enter your Full name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email"  />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter your password" />
            <button>Register</button>
            </form>
            </div>
    </div>
    <img className="register" src={Image}/>
    </div>
    )
}