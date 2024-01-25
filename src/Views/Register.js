import "./AuthPage.css"
import AuthForm from "../AuthForms/AuthForm"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect}  from "react"
import { useAuth } from "../Contexts/AuthContext"
import axios from "axios"


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create
const Register = () => {
    return(
        <div className="auth-page-container">

        </div>
    )
}

export default Register;
