import { useState } from "react";
import { TextField } from "../common/index";
import {useNavigate} from 'react-router-dom';

export const Register = () => {
    // Set states for username, email, and password
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Track if valid account credentials
    const [valid, setValid] = useState(0);

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
                    <TextField label = "Password: " value = {password} setValue = {setPassword} id = "register-password" type = "password"/>

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
                            type = "button" class="btn btn-primary"
                            onClick = {() => {
                                setUsername("");
                                setEmail("");
                                setPassword("");
                                setValid(1);
                            }}
                        >
                            Create Account
                        </button>
                    }
                    {/* Cancel (Go back to home) */}
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        
                        onClick = {() => {
                            navigate("/");
                        }}
                    >
                        Cancel
                    </button>
                    {/* Successfully created an account */}
                    {
                        valid === 1 &&
                        <p>You have successfully created an account!</p>
                    }
                    {/* Invalid credentials */}
                    {
                        valid === -1 &&
                        <p className = "invalid-login">Invalid input</p>
                    }
                    {/* Go to login */}
                 
                </form>
            </div>          
        </>
    );
};