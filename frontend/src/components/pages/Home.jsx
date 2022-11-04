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
                    <div class="perspective-text">
                        <div class="perspective-line">
                            <p></p>
                            <p>Reality</p>
                        </div>

                        <div class="perspective-line">
                            <p>Reality</p>
                            <p>Is Only</p>
                        </div>
                        <div class="perspective-line">
                            <p>Is Only</p>
                            <p>A Matter Of</p>
                        </div>
                        <div class="perspective-line">
                            <p>A Matter Of</p>
                            <p>Perception</p>
                        </div>
                        <div class="perspective-line">
                            <p>Perception</p>
                            <p></p>
                        </div>
                    </div>    
        </div>

            <div className = "homeImage">

            </div>
        </div>
        {/* Modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="col-12 modal-title text-center">Join our Community</h3>
                    </div>
                    <div class="modal-body">
                    <Register/>
                    </div>                    
                </div>
            </div>
        </div>
      

        </>
     )
}