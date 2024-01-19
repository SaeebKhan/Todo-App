import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { tabTitle } from '../helper';

function Register(props) {
tabTitle("Register Page");


  const [formData, setFormData]=useState(null); 
  const {register,message,setMessage}=useContext(AuthContext);

  useEffect(()=>{
    setMessage("");
  },[])
  

  const handleChange=(e)=>{
       const {name,value}=e.target;
       setFormData((prev)=>({
        ...prev,
        [name]:value
       }))
  }


const submitForm=async(e)=>{
 e.preventDefault();
 register(formData);
}


  return (
        <form>
             <div className="mb-3">
          <label for="exampleInputName1" className="form-label">Name</label>
          <input type="text" name='name' className="form-control" id="exampleInputName1" onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name='password' className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitForm}>Register</button>
        <p className='text-primary fs-4'>{message}</p>
        <p>Having Problem in registering?<br/><a href="">click here</a> for help</p>
      </form>
    );
}

export default Register;