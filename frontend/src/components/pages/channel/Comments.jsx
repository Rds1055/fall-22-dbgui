import { useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Post, Comment } from '../../../models';
import {NewComment} from "./NewComment"
import { getCommentsByPost } from '../../../api';
import { getPostById,updatePost,getUserInfo } from '../../../api';
import { CommentsList } from './CommentsList';

export const Comments = () => {
 
    const [post,setPost] = useState(undefined);
    const [comments, setComments] = useState([]);
    const [user,setUser] = useState(undefined);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getPostById(params.post_id).then(x => setPost(x[0]));
        getCommentsByPost(params.post_id).then(x => setComments(x));
        if (sessionStorage.token) {
            getUserInfo().then(x => setUser(x));
        } 
    }, []);

    if(!post){
        return <>
        ...Loading
        </>
    }
    return(
        <>
        {
                sessionStorage.token &&
                <button type='button' className='btn btn-primary float-end m-2' data-bs-toggle="modal" data-bs-target="#postModal">New Comment</button>
            }
            {
                !sessionStorage.token &&
                <button type='button' className='btn btn-primary float-end m-2' 
                    onClick = {() => { navigate("/restricted-content")}}>New Comment</button>
            }
        <br/>
        <br/>
             <div className="card w-75 mx-auto m-4">
                        <div className="card-body row">
                            <div className=''>
                                <h6 className=' float-end text-muted '>{post.post_date}</h6>
                            </div>
                            <div className='my-3'>
                                <h5 className='text-center'>{post.title}</h5>
                            </div>
                            
                            <br className='clearfix'/>
                            <div className='row mx-3 pe-4'>
                                <div className='col-3'>
                                    <a type='button' className=" arrow up" onClick={ () =>{
                                            updatePost(post.post_id,post.likes+1)
                                    }
                                    }></a>
                                    <h6 className='ps-3 mt-1'>{post.likes}</h6>
                                    <a type='button' className="arrow down" onClick={ () => {
                                        updatePost(post.post_id,post.likes-1)
                                    }
                                         
                                    }></a>
                                </div>
                                <div className='col-8 pr-3' >
                                    <h6 className=" text-left px-3 me-5">{post.contents} </h6>
                                </div>
                                <div>
                                    <span className="  text-primary float-end">@{post.user}</span>
                                    <br/>
                                    
                                    <span className="  text-secondary float-end">{ comments && comments.length } {!comments && 0} Comments</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
           
        
                        <CommentsList comments = {comments}/>
    <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content h-100">
                <NewComment 
                    user = { user }
                    post = { post } 
                />
            </div>
        </div>
    </div>
    </>);
}

