import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import './App.css';
export const Register = (props) => {
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
       if(fullname==='' || email==='' || password==='') return
       
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
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email"  />
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter your password" />
            <button>Register</button>
        </form>
        {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
    </div>
    </div>
    
    </div>
    )
}