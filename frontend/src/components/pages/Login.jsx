import { useState } from "react";
import { TextField } from "../common/index";

export const Login = () => {
    // Set states for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Bool to track if valid login
    const [valid, setValid] = useState(1);

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
            <h2>Login</h2>
            <form id = "login">
                {/* Username field */}
                <TextField label = "Username: " value = {username} setValue = {setUsername}/>
                {/* Password field */}
                <TextField label = "Password: " value = {password} setValue = {setPassword}/>
                {/* Submit button */}
                {/* Disabled with no entered credentials */}
                {
                    (username === "" || password === "") && 
                    <button type = "button" disabled>Login</button>
                }
                {/* Enabled with entered credentials */}
                {
                    username !== "" && password !== "" &&
                    <button
                        type = "button"
                        onClick = {() => {
                            setValid(verifyLogin(username, password));
                            setUsername("");
                            setPassword("");
                        }}
                    >
                        Login
                    </button>
                }
                {/* Invalid credentials */}
                { 
                    valid === undefined &&
                    <p>Invalid login</p>
                }
                {/* Valid credentials */}
                { 
                    valid !== undefined && valid !== 1 &&
                    <p>You are logged in!</p>
                }
                
            </form>
        </>
    );
};