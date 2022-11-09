import { useState } from "react";
import { TextField } from "../common/index";
import { Register } from "./Register";
import {useNavigate} from 'react-router-dom';

export const Login = () => {

    
    // Set states for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Bool to track if valid login
    const [valid, setValid] = useState(1);

    // Navigator
    const navigate = useNavigate();

    const verifyLogin = (username, password) => {
        // Temporary until APIs are implemented
        const logins = [
            {
                username: "testing",
                password: "1234"
            }
        ];
        return logins.find(l => {
            return l.username === username && l.password === password;
        });
    };

    // HTML for login form
    return (
        
        <>
            <div id = "login" className = "account-form container-fluid mt-5 row justify-content-center className='col me-3'">
            <header>
        <h1>Login</h1>
        </header>
        
                <form name = "login" id = "login">
                    {/* Username field */}
                    <div class="form-outline w-50">
                    <TextField label = "Username: " value = {username} setValue = {setUsername} id = "login-username" type = "text"/>
                    {/* Password field */}
                    <TextField label = "Password: " value = {password} setValue = {setPassword} id = "login-password" type = "password"/>
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
                                setValid(verifyLogin(username, password));
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
                        valid === undefined &&
                        <p className = "invalid-login">Invalid login</p>
                    }
                    {/* Valid credentials */}
                    { 
                        valid !== undefined && valid !== 1 &&
                        <p>You are logged in!</p>
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
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="col-12 modal-title text-center">Join our Community</h3>
                        </div>
                        <div className="modal-body">
                        <Register/>
                        
                        </div>                    
                    </div>
                </div>
            </div>       
        </>
    );
};