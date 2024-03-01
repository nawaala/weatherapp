import "./Register.css"
import AuthForm  from "../AuthForms/AuthForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [error, setError] = useState()
  const navigate= useNavigate()


  const{setUsername, setUserId} = useAuth();



  const onSubmit = async(e, email, password)=> {
    e.preventDefault();

   const dataToSend={
    "email" : email,
    "password": password
   }

   console.log(dataToSend)

    axios.post("http://localhost:8000/users/register", dataToSend)
    .then((res)=> {
      console.log(res.data.id);
      console.log(res.data.username);
    
      localStorage.setItem("userId", res.data.id)
      localStorage.setItem("username", res.data.username)
      setUserId(res.data.id);
      setUsername(res.data.username);
      alert("success")
      navigate("/")


    })
    .catch ((err) => {
      setError(err.response?.data.detail || "server error")
    })
  }

  return(
    <div className="register">
      {error && <div className="login-error text-label">{error}</div>}
      <AuthForm onSubmit={onSubmit} formLabel="Sign Up"/>



    </div>
  )

  }

export default Register;




