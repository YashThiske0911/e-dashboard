import { useState } from "react";
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp =()=>{

    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    })

    const collectData= async ()=>{
        console.warn(name,email,password);
        if(name!='' && email!='' && password!=''){
         
        let result = await fetch('http://localhost:5000/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result));
        if(result){
            navigate('/')
        }
        }
        else{
            alert("All fields are mandatory to fill ")
        }
    }

    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text"
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" required/>

            <input className="inputBox" type="text"
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>

            <input className="inputBox" type="password"
            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required/>

            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp;