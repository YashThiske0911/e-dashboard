import React from "react";

const Login=()=>{
    const [email,setEmail]= React.useState('');
    const [password,setPassword]= React.useState('');
    const handelLogin=()=>{
        console.warn(email,password);
    }
    return(
        <div className="login">
            <input className="inputBox" type="text" placeholder="Enter Email" 
            onChange={(e)=>setEmail(e.target.value)} value={email} />
            <input className="inputBox" type="password" placeholder="Enter Password" 
            onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handelLogin} className="appButton" type="button">Login</button>
        </div>
    )
}

export default Login