import { TextAreaField,TextField } from "../../common";
import { Post } from "../../../models";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPost} from "../../../api/postRoutes";
import {addComment} from "../../../api/commentRoutes"
import { useContext } from "react";
import { AccountContext } from "../../../context";
export const NewContent = ({postId,commentId}) => {
    const [content,setContent] = useState('');

    const params = useParams();
    const context = useContext(AccountContext);
    const userName = useState(undefined);


    useEffect(() => {
        if (params.channel_id) {
            setChannel_id(params.channel_id);
           
        } 
       
    }, []);
   
  
    return(
        <div>
            <div className="modal-header">
                <h4 className="col-12 modal-title text-center">Reply to {user_name}</h4>
            </div>
            <div className="modal-body">
                 <div id = "register" className = "account-form container-fluid mt-5 row justify-content-center className='col me-3'">
                <form name = "register">
                    <TextAreaField label='Reply' 
                        value = {content} 
                        setValue={setContent}/>

                     
        
                
                        {
                        
                            <button
                                type = "button" className="btn btn-secondary" data-bs-dismiss='modal'
                                onClick = {() => {
                                    setContent('');
                                }}
                            >
                                Cancel
                            </button>
                        }
                        {/* Cancel (Go back to home) */}
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={() => {
                            if(commentId!=-1){
                                var id = undefined;
                                com = new Comment(id,context.user_id,postId,content,new Date().toDateString())
                                addComment(comm);
                            }else{
                                p = new Post(postId,params.channelId,content,0,new Date().toDateString(),userName,0);
                                addPost(p);
                            }
                            
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