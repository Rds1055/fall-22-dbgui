import {useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post, Comment } from '../../../models';
import {NewComment} from "./NewComment"
import { getCommentsByPost } from '../../../api';
import { getPostById,updatePost } from '../../../api';

export const Comments = () => {
 
   console.log(params);
   
    const [post,setPost] = useState(undefined);
    const [comments, setComments] = useState(undefined);
   
    const params = useParams();
    console.log(params);
    useEffect(() => {
        getPostById(params.post_id).then(x => setPost(x));
        getCommentsByPost(params.post_id).then(x => setComments(x));
        
    }, []);

    if(!comments){
        return <>
                Loading...
                </>
    }
    return(
        <>
             <div className="card">
                        <div className="card-body row">
                            <div className=''>
                                <h6 className=' float-end text-muted '>{post.post_date}</h6>
                            </div>
                            
                            <br className='clearfix'/>
                            
                            <div className='row'>
                                <div className='col-3'>
                                    <a type='button' className=" arrow up" onClick={ 
                                       updatePost(post.post_id,post.likes+1)
                                    }></a>
                                    <h6 className='ps-3 mt-1'>{post.likes}</h6>
                                    <a type='button' className="arrow down" onClick={
                                         updatePost(post.post_id,post.likes-1)
                                    }></a>
                                </div>
                                <div className='col-9 pr-3' >
                                    <h6 className=" text-left px-3">{post.contents} </h6>
                                </div>
                            </div>
                        </div>
                    </div>
            <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                   
                        <NewComment post={post}/>
                    
                
                            
                </div>
            </div>
        </div>
        
       <ul className='list-unstyled '>
        {
            comments.map((comment,index) =>
            <li key={index} className=' m-2 content-fluid'>
               <div className="card w-50 mx-auto p-1">
                    <div className=''>
                        <h6 className='  m-1 text-secondary float-end '>{comment.comment_date}</h6>
                    </div>
                    <div className='card-body mt-0 p-0'>
                
                        <h6 className=" col-8 mx-auto text-center p-0">{comment.content} </h6>
                        <p className="card-subtitle  pt-3  mb-2 text-muted float-end">
                            <span className='m-1 text-primary'>{comment.user_id}</span>
                            <br/>
                        </p>
                        
                        <br />
                        
                        
                    </div>
               </div>
            </li>)
        }
                
    </ul>
    </>);
}

