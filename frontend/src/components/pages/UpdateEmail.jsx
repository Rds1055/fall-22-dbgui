import { useState } from "react";
import { PasswordField, TextField } from "../common";
import { useNavigate } from 'react-router-dom';
import { updateUser } from "../../api";



export const UpdateEmail = ({ user }) => {
    // Set states for username, email, and password
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Navigator
    const navigate = useNavigate();

    // HTML for login form
    return (
        <>
            <TextField label="Email: " value={email} setValue={setEmail} id="login-email" />
            <button type="button" className="btn btn-primary" onClick={() => updateUser(user.username, { email }).then(x => window.location.reload()) 
            }>Update Email</button>

            <TextField label="Password: " value={password} setValue={setPassword} id="login-password" />
            <button type="button" className="btn btn-primary" onClick={() => updateUser(user.username, { password}).then(x => window.location.reload()) 
            }>
                
                Update Password</button>
            <div className="pt-2">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                    onClick={() => {
                        setEmail('');
                        setPassword('');
                        
                    }}
                >
                    Cancel
                </button>
            </div>
        </>
    );
};