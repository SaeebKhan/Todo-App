import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext= createContext();

export const AuthProvider = ({children})=>{
   
  const[user,setUser]=useState(null);
   const [message,setMessage]=useState();
   const navigate= useNavigate();



   // login
const login =async(formData)=>{
const response=await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`,{method:"GET"});
    if(response.ok){
       const user=await response.json();
       if(user.length>0){
        setMessage("Logged In Successfully");
        const userDetails=JSON.stringify(user[0]);
        localStorage.setItem("user",userDetails);
        setUser(user[0]);
      
        setTimeout(()=>{
          navigate("/task-list");
        },3000);

       }else{
        setMessage("Email/Password is Incorrect");
       }
    }else{
      setMessage("Something went wrong");
    }
  }

// register
const register=async(formData)=>{
  const config={
 method:"POST",
 headers:{
   "Content-Type":"application/json"
 },
  body:JSON.stringify(formData)
  }
 
 const checkUser= await fetch(`http://localhost:5000/users?email=${formData.email}`)
 if(checkUser.ok){
 const user=await checkUser.json();
 if(user.length>0){
   setMessage("User already exist");
 }else{
  // fetch
  const response = await fetch("http://localhost:5000/users",config);
  if(response.status===201){
    setMessage("Registered Successfully");
    const user=await response.json();
    const userDetails=JSON.stringify(user);
    localStorage.setItem("user",userDetails);
    setUser(user);
    setTimeout(()=>{
      navigate("/task-list");
    },3000);

  }else{
    setMessage("Something went wrong, please try again.");
  }
 }
 }else{
   setMessage("Something is went wrong");
 }
 }
 
  const logout=()=>{
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
  }

        const validateUser=async(email)=>{
           const response =await fetch(`http://localhost:5000/users?email=${email}`);
          if(response.ok){
               const user=await response.json();
               if(user.length>0){
                setUser(user[0]);
               }else{
                navigate('/');
                localStorage.removeItem("user");
               }
          }else{
            console.error("Something went wrong");
          }
        }



    useEffect(()=>{  
      const local = localStorage.getItem("user");  
        if(local){
          const userObj= JSON.parse(local);
          validateUser(userObj.email);
        }
      },[]);
   
    return(
        <AuthContext.Provider value={{
            user,
            login,
            message,
            setMessage,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;