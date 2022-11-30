import { Register } from "../pages";
import {useNavigate} from 'react-router-dom';

export const RegisterModal = ({page}) => {

    const navigate = useNavigate();
    
    return <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="col-12 modal-title text-center">Join our Community</h3>
                    </div>
                    <div className="modal-body">
                        <Register/>
                        {
                            page !== "login" &&
                            <>
                                <div className ="d-flex justify-content-center">
                                    <p>
                                        Already have an account?
                                    </p>
                                </div>
                                <div className ="d-flex justify-content-center">
                                    <button 
                                        type = "button" className="btn btn-primary" data-bs-dismiss="modal"
                                        onClick = {() => {
                                            navigate("/login");
                                        }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </>
                        }
                    </div>                    
                </div>
            </div>
        </div>     
    </>
}