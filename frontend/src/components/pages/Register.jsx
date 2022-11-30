import { useState } from "react";
import { PasswordField, TextField } from "../common";
import {useNavigate} from 'react-router-dom';
import { login, register } from "../../api";
import { User } from "../../models";

export const Register = () => {
    // Set states for username, email, and password
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Track if valid account credentials
    const [loggedIn, setLoggedIn] = useState("success");

    // Navigator
    const navigate = useNavigate();

    // HTML for login form
    return (
        <>
            <div id = "register" className = "account-form container-fluid mt-5 row justify-content-center className='col me-3'">
                
                <form name = "register">
                    {/* Username field */}
                    <TextField label = "Username: " value = {username} setValue = {setUsername} id = "register-username" type = "text"/>
                    {/* Email field */}
                    <TextField label = "Email: " value = {email} setValue = {setEmail} id = "register-email" type = "email"/>
                    {/* Password field */}
                    <PasswordField label = "Password: " value = {password} setValue = {setPassword} id = "register-password"/>

                    {/* Submit button */}
                    {/* Disabled with no entered credentials */}
                    {
                        (username === "" || email === "" || password === "") && 
                        <button type = "button" className="btn btn-secondary" disabled>Create Account</button>
                    }
                    {/* Enabled with entered credentials */}
                    {
                        username !== "" && email !== "" && password !== "" &&
                        <button
                            type = "button" className="btn btn-primary"
                            onClick = {() => {
                                register(new User(username, email, password, new Date())).then(x => {
                                    login({username, password}, setLoggedIn).then(x => {
                                        navigate("/dashboard");
                                    }).then(x => window.location.reload());
                                }).catch(x => {
                                    setLoggedIn("failed")
                                });
                                
                                setUsername("");
                                setEmail("");
                                setPassword("");
                            }}
                        >
                            Create Account
                        </button>
                    }
                    {/* Cancel (Go back to home) */}
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                        onClick = {() => {
                            navigate("/");
                        }}
                    >
                        Cancel
                    </button>
                    {/* Invalid credentials */}
                    {
                        loggedIn === "failed" &&
                        <p className = "invalid-login">Invalid input</p>
                    }

                    {/* Go to login */}

                </form>
            </div>          
        </>
    );
};