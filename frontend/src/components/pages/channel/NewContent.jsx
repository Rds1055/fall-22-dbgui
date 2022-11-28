import { TextAreaField,TextField } from "../../common";
import { Post } from "../../../models";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPost} from "../../../api/postRoutes";
import {addComment} from "../../../api/commentRoutes"

export const NewContent = ({user_name,type}) => {
    const [post_id,setpost_id] = useState(0);
    const [channel_id,setChannel_id] = useState(0);
    const [user_id,setUser_id] = useState('');
    const [content,setContent] = useState('');
    const params = useParams();
    const [ user, setUser ] = useState(undefined);

    useEffect(() => {
        if (params.channel_id) {
            setChannel_id(params.channel_id).then(x => setChannel_id(x));
        } 
       
    }, []);
   
    useEffect(() => {
       
    }, [ user ])
    return(
        <div>
            <div className="modal-header">
                <h4 className="col-12 modal-title text-center">Reply to {user_name}</h4>
            </div>
            <div className="modal-body">
                 <div id = "register" className = "account-form container-fluid mt-5 row justify-content-center className='col me-3'">
                <form name = "register">
                    <TextAreaField label='Reply' value = {content} setValue={setContent}/>

                        {/* Submit button */}
        
                        {/* Enabled with entered credentials */}
                        {
                        
                            <button
                                type = "button" className="btn btn-secondary" data-bs-dismiss='modal'
                                onClick = {() => {
                                    if(type='comment'){
                                        addComment()
                                    }else{
                                    // addPost(post_id,channel_id,content,0,new Date().toDateString(),0);
                                    }
                                    setContent('');
                                }}
                            >
                                Cancel
                            </button>
                        }
                        {/* Cancel (Go back to home) */}
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={() => {
                            // addComment(post_id,channel_id,content,0,new Date().toDateString(),0);
                            setContent('');
                            }
                        }
                        >
                            Submit
                        </button>
                </form>
            </div>
        </div>
    </div>
    );
}