import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserInfo } from "../../../api";

export const LoginModal = ({ user, alternative }) => {
    const navigate = useNavigate();

    return <>
        <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content h-100">
                    {
                        !user &&
                        <div className='card p-4 m-4 border-0'>
                            <div className=''>
                                <h4>You must be logged in to access this content</h4>
                                <h6>Click 'Login' to log in or 'cancel' to go back</h6>
                            </div>
                            <div className=''>
                                <button type="button" className=" m-3 btn btn-secondary " data-bs-dismiss='modal' 
                                    >Cancel
                                </button>
                                <button type='button'  className='btn btn-primary' data-bs-dismiss='modal'
                                    onClick={ () => {
                                        navigate('/login');
                                    }
                                    }
                                    >Login
                                </button>
                            </div>
                        </div>
                    }
                    {
                        user &&
                        alternative
                    }
                </div>    
            </div>
        </div>
    </>
}