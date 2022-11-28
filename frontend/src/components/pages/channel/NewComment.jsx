import { TextAreaField,TextField } from "../../common";
import { Post } from "../../../models";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPost} from "../../../api/postRoutes";
import {addComment} from "../../../api/commentRoutes"

export const NewComment = ({post}) => {
    const [contents,setContents] = useState(undefined);
    const [user,setUser] = useState(undefined);
    const [title,setTitle] = useState(undefined);
   
  
    return(
        <div>
            <div className="modal-header">
                <h4 className="col-12 modal-title text-center">Reply to {post.user}</h4>
            </div>
            <div className="modal-body">
                 <div id = "register" className = "account-form container-fluid mt-5 row justify-content-center className='col me-3'">
                <form name = "register">
                    <TextField label='title'
                        value={title}
                        setValue={setTitle}/>

                    <TextAreaField label='Reply' 
                        value = {contents} 
                        setValue={setContents}/>
                        
                        
                            <button
                                type = "button" className="btn btn-secondary" data-bs-dismiss='modal'
                                onClick = {() => {
                                    setContents('');
                                    setTitle('');
                                }}
                            >
                                Cancel
                            </button>
                        
                        {/* Cancel (Go back to home) */}
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={() => {
                            
                                var id = undefined;
                                var com = new Comment(id,user,post.post_id,contents,new Date().toDateString())
                                addComment(com);
                            
                            setContents('');
                            setTitle('');
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