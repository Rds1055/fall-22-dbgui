import { TextAreaField,TextField } from "../../common";
import { useState,useEffect } from "react";
import { addPost,addComment,getUserInfo} from "../../../api/";
import { useNavigate } from "react-router-dom";
export const NewComment = ({user,post}) => {
    const [contents,setContents] = useState(undefined);

    const [title,setTitle] = useState(undefined);
   const navigate = useNavigate();
console.log(post)

    if (!user) {
        return <>
            <div className='card p-4 m-4 border-0'>
                <div className=''>
                    <h4>You must be logged in to post</h4>
                    <h6>Click 'Login' to log in or 'cancel' to go back</h6>
                </div>
                <div className=''>
                    <button type="button" className=" m-3 btn btn-secondary " data-bs-dismiss='modal' 
                        >Cancel
                    </button>
                    <button type='button'  className='btn btn-primary' data-bs-dismiss='modal'
                        onClick={ () => {
                            navigate('/login')
                        }
                           
                        }
                        >Login
                    </button>
                    

                </div>
            </div>
        </>
    }
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
                                    setTitle('');
                                }}
                            >
                                Cancel
                            </button>
                        
                        {/* Cancel (Go back to home) */}
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={() => {
                                var comment_id = undefined;
                                var com = new Comment(user[0].username,post.post_id,comment_id,contents,0,0,new Date().toDateString());
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