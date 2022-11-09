import { useNavigate } from "react-router-dom"
import { useState } from "react";
export const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
   
    // Bool to track if valid login
    const [valid, setValid] = useState(1);

    // Navigator
    const navigate = useNavigate();
    
     return (
        <>
        <div className = "pageStyle" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div className = "coolTitle">
                    <div className="perspective-text">
                        <div className="perspective-line">
                            <p></p>
                            <p>Reality</p>
                        </div>

                        <div className="perspective-line">
                            <p>Reality</p>
                            <p>Is Only</p>
                        </div>
                        <div className="perspective-line">
                            <p>Is Only</p>
                            <p>A Matter Of</p>
                        </div>
                        <div className="perspective-line">
                            <p>A Matter Of</p>
                            <p>Perception</p>
                        </div>
                        <div className="perspective-line">
                            <p>Perception</p>
                            <p></p>
                        </div>
                    </div>    
        </div>

            <div className = "homeImage">

            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                    <h3 className="col-12 modal-title text-center" id="exampleModalLabel">Welcome!</h3>
                    </div>
                    <div className="modal-body">
        ... 
                    
                    </div>

                    <div className="modal-footer">
                        <div className="col text-center">
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
                        <button type="button" className="btn btn-primary">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
     )
}