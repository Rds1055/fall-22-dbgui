import { TextAreaField,TextField } from "../../common";
import { useState,useEffect } from "react";
import { addPost,addComment,getUserInfo} from "../../../api/";
import { useNavigate } from "react-router-dom";
import { Comment } from "../../../models";
export const NewComment = ({user,post}) => {
    const [contents,setContents] = useState(undefined);

  


    
    return(
        <div>
            <div className="modal-header">
                <h4 className="col-12 modal-title text-center">Reply to {post.user}</h4>
            </div>
            <div className="modal-body">
                 <div id = "register" className = "account-form container-fluid mt-5 row justify-content-center className='col me-3'">
                <form name = "register">
                    

                    <TextAreaField label='Reply' 
                        value = {contents} 
                        setValue={setContents}/>
                        
                        
                            <button
                                type = "button" className="btn btn-secondary" data-bs-dismiss='modal'
                                onClick = {() => {
                                    setContents('');
                                    
                                }}
                            >
                                Cancel
                            </button>
                        
                        {/* Cancel (Go back to home) */}
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={() => {
                                var id = undefined;
                              
                                var com = new Comment(undefined,contents,0,0,post.post_id,new Date(),user.username)
                            
                                addComment(com);
                            setContents('');
                           
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