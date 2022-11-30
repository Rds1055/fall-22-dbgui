import { Register } from "../pages";
import {useNavigate} from 'react-router-dom';
import { UpdateEmail } from "../pages/UpdateEmail";

export const UpdateEmailModal = ({user}) => {

    const navigate = useNavigate();

    return <>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="col-12 modal-title text-center">Edit Profile</h3>
                    </div>
                    <div className="modal-body">
                        <UpdateEmail user = { user }/>
                    </div>                    
                </div>
            </div>
        </div>     
    </>
}