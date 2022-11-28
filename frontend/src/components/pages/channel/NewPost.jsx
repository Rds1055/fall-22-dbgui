import { TextAreaField,TextField } from "../../common";
import { Post } from "../../../models";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { addPost} from "../../../api/postRoutes";
import {addComment} from "../../../api/commentRoutes"
import { getUserInfo } from "../../../api";
export const NewPost = ({channel}) => {
    const [contents,setContents] = useState('');
    const [user,setUser] = useState(undefined);
    const [title,setTitle] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.token) {
            getUserInfo().then(x => setUser(x));
        } 
    },[]);
   
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

                         
                            navigate('/login');
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
                <h4 className="col-12 modal-title text-center">New Post in {channel.title}</h4>
            </div>
            <div className="modal-body">
                 <div id = "register" className = "account-form container-fluid mt-5 row justify-content-center className='col me-3'">
                <form name = "register">
                    <TextField label='Title'
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
                        
                      
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                        onClick={() => {
                          
                                var id = undefined;
                                var p = new Post(id,user,params.channelId,title,contents,0,new Date().toDateString());
                                addPost(p);
                           
                            
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