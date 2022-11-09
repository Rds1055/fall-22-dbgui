import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { TextField } from "../common/index";
import { Register } from "./Register";
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
                        <p>Enter</p>
                    </div>

                    <div className="perspective-line">
                        <p>Reality</p>
                        <p>Here</p>
                    </div>
                    <div className="perspective-line">
                        <p>Is Only</p>
                        <p>To</p>
                    </div>
                    <div className="perspective-line">
                        <p>A Matter Of</p>
                        <p>Join...</p>
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

        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="col-12 modal-title text-center">Join our Community</h3>
                    </div>
                    <div className="modal-body">
                    <Register/>
                    {/* Go to login */}
                
                    </div>                    
                </div>
            </div>
        </div>
        </>
     )
}