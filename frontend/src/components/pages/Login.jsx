import { useState } from "react";
import { RegisterModal, TextField, PasswordField } from "../common/index";
import {useNavigate} from 'react-router-dom';
import { login } from "../../api";

export const Login = () => {

    
    // Set states for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Bool to track if valid login
    const [loggedIn, setLoggedIn] = useState("success");

    // Navigator
    const navigate = useNavigate();

    // HTML for login form
    return <>
        <div id = "login" className = "account-form container-fluid mt-5 row justify-content-center col me-3">
            <header>
                <h1>Login</h1>
            </header>
        
            <form name = "login" id = "login">
                
                <div className="form-outline w-50">
                    {/* Username field */}
                    <TextField label = "Username: " value = {username} setValue = {setUsername} id = "login-username"/>
                    {/* Password field */}
                    <PasswordField label = "Password: " value = {password} setValue = {setPassword} id = "login-password"/>
                </div>

                {/* Submit button */}
                {/* Disabled with no entered credentials */}
                {
                    (username === "" || password === "") && 
                    <button type = "button" className = "btn btn-primary" disabled>Login</button>
                
                }
            
                {/* Enabled with entered credentials */}
                {
                    username !== "" && password !== "" &&
                    <button type="button" className="btn btn-primary"
                        onClick = {() => {
                            login({ username, password }, setLoggedIn).then(x => {
                                navigate("/dashboard");
                            });
                            setUsername("");
                            setPassword("");
                            
                        }}
                    >
                        Login
                    </button>
                }

                {/* Cancel (Go back to home) */}
                <button
                    type = "button" className="btn btn-primary"
                    onClick = {() => {
                        navigate("/");
                    }}
                >
                    Cancel
                </button>
                {/* Invalid credentials */}
                { 
                    loggedIn === "failed" &&
                    <p className = "invalid-login">Invalid login</p>
                }
                {/* Go to login */}
                <p>
                    Don't have an account?
                </p>
                <button
                    type = "button" className="btn btn-primary"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                    Register
                </button>
            </form>
        </div>   
        <RegisterModal page = {"login"}/>
          
    </>;
};