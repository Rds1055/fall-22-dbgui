import { useState, useEffect } from "react";
import { TextField } from "../common/index";
import {useNavigate} from 'react-router-dom';
import { addUser } from "../../api";

export const Register = () => {
    // Set states for username, email, and password
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Track if valid account credentials
    const [valid, setValid] = useState(0);

    // API Effects
    useEffect(() => {
        getProductById(1).then(x => {
            setProduct(x);
        });
    }, []);

    // Navigator
    const navigate = useNavigate();

    // HTML for login form
    return (
        <>
            <div id = "register" className = "account-form container-fluid mt-5 row justify-content-center className='col me-3'">
                <h2>Register</h2>
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
                        <button type = "button" disabled>Create Account</button>
                    }
                    {/* Enabled with entered credentials */}
                    {
                        username !== "" && email !== "" && password !== "" &&
                        <button
                            type = "button"
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
                    <button
                        type = "button"
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
                    <p>
                        Already have an account?
                    </p>
                    <button
                        type = "button"
                        onClick = {() => {
                            navigate("/login");
                        }}
                    >
                        Login
                    </button>
                </form>
            </div>          
        </>
    );
};