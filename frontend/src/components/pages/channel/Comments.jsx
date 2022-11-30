import { useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { Post, Comment } from '../../../models';
import {NewComment} from "./NewComment"
import { getCommentsByPost } from '../../../api';
import { getPostById,updatePost,getUserInfo } from '../../../api';
import { CommentsList } from './CommentsList';
import { TextField } from '../../common';
import { getFilteredCommentsByPost } from '../../../api';

export const Comments = () => {

            //Michael: START OF SEARCH BAR STUFF 

            const [class_, setClass_] = useState("hidden");
    
            const changeView = () => {
                if (class_ === "hidden") {
                    setClass_("");
                } else {
                    setClass_("hidden");
                }
            };
        
            const [keyword, setKeyword] = useState('');
            const [minDate, setDate] = useState('');
            const [likes, setLikes] = useState('');     
        
            //MICHAEL: END OF SEARCH BAR STUFF 

 
    const [post,setPost] = useState(undefined);
    const [comments, setComments] = useState([]);
    const [user,setUser] = useState(undefined);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        getPostById(params.post_id).then(x => setPost(x[0]));
        getCommentsByPost(params.post_id).then(x => setComments(x));
        if (sessionStorage.token) {
            getUserInfo().then(x => setUser(x[0]));
        } 
    }, []);
  console.log(user);
  
    if(!post){
        return <>
        ...Loading
        </>
    }
    return(
        <>
        {/* // Advanced Search Bar Start */}

    <div className='my-2 ms-2'>
        <div className = "AdvancedSearch">
            <button type="button" className="btn btn-primary btn-lg btn-block"
                onClick={() => {
                    changeView();
                }}>
                    Advanced Search
            </button>
            {
                sessionStorage.token &&
                <button type='button' className='btn btn-primary float-end m-2' data-bs-toggle="modal" data-bs-target="#postModal">New Comment</button>
            } 
            { 
                !sessionStorage.token &&
                <button type='button' className='btn btn-primary float-end m-2' 
                    onClick = {() => { navigate("/restricted-content")}}>New Comment</button>
            }
        <br className='clearfix'/>
        </div>
    </div>

    <div className='px-4 w-50 ms-4'>
        <div className='px-4'>
            <div id = "SearchBars" className = { class_ }>

    
                <TextField label = "Search Keyword: " value = {keyword} setValue = {setKeyword} id = "Search-Keyword" type = "text"/>
                <TextField label = "Search Date: Example Form (2015-03-25)" value = {minDate} setValue = {setDate} id = "Search-Date" type = "text"/>
                <TextField label = "Minimum Likes: " value = {likes} setValue = {setLikes} id = "Minimum-Likes" type = "text"/>


                <button
                    type = "submit" className="btn btn-primary btn-lg btn-block"
                        onClick = {() => {
                        var date = undefined;
                        if (minDate) {
                            date = new Date(minDate);
                        }

                        getFilteredCommentsByPost({post: params.post_id, keyword, date, likes}).then(x => setComments(x));
                        
                        setKeyword("");
                        setDate("");
                        setLikes("");

                        }}
                        >
                        Search
                </button>
                
            </div>
        </div>
    </div>

{/* advanced search bar end */}


       
        <br/>
        <br/>
             <div className="card w-75 mx-auto m-4">
                        <div className="card-body row">
                            <div className=''>
                                <h6 className=' float-end text-muted '>{post.post_date.slice(0,10)}</h6>
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
                                    <h6 className='ps-2 mt-1'>{post.likes}</h6>
                                    <a type='button' className="arrow down" onClick={ () => {
                                        updatePost(post.post_id,post.likes-1)
                                    }
                                         
                                    }></a>
                                </div>
                                <div className='col-8 pr-3' >
                                    <h6 className=" text-left px-3 me-5">{post.contents} </h6>
                                </div>
                                <div>
                                    <a className="card-subtitle text-decoration-none text-primary float-end" href = {`/profile/${post.user}`}>@{post.user}</a>
                                    <br/>
                                    
                                    
                                    <span className="  text-secondary float-end">{ comments && comments.length } {!comments && 0} Comments</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
           
        
                        <CommentsList comments = {comments}
                                        user={user}/>
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

