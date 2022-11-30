import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Channel } from '../../../models';
import { getPostsByChannel, updatePost } from '../../../api';
import { Post } from '../../../models';
import "./postList.css";
export const PostsList = ({posts, setPosts}) => {
    
    
    
if(!posts || posts.length==0){
    return <> 
        <div className='card w-50 mx-auto text-center p-4 m-4'>
            <div className='card-title'>
                <h4 className='text-muted'>No Posts Yet</h4>
                <h6 className='text-muted'>Click 'New Post' to create a new post</h6>
            </div>
        </div>
        </>

}

return(
    <ul className='list-group list-unstyled w-50 mx-auto '>
        {
            posts.map((post,index) => 
                <li key={index}className='content mt-3'>
                   <div className="card">
                        <div className="card-body row">
                            <div className=''>
                                <h6 className=' float-end text-muted '>{post.post_date}</h6>
                            </div>
                            
                            <br className='clearfix'/>
                            <div className='mt-3'>
                                <h5 className='text-center'>{post.title}</h5>
                            </div>
                            <div className='row'>
                                <div className='col-3'>
                                    <button type='button' className=" arrow up" onClick={ () => {
                                        updatePost(post.post_id, {likes: post.likes+1}).then(x =>
                                            getPostsByChannel(post.channel).then(x => {
                                                setPosts(x);
                                            }))
                                    } 
                                       
                                    }></button>
                                    <h6 className='ps-3 mt-3 '>{post.likes}</h6>
                                    <button type='button' className="arrow down" onClick={ (post) => {
                                        updatePost(post.post_id, {likes: post.likes-1})
                                    }
                                         
                                    }></button>
                                </div>
                                <div className='col-8 pr-3 mt-2' >
                                    <h6 className=" text-left px-3">{post.contents} </h6>
                                </div>
                                
                                <div className=" pt-4 mb-0 ">
                                    <div className=" text-primary">
                                        <Link className='btn fs-6 border border-primary'type='button' to={`${post.post_id}`}>
                                                See Comments
                                        </Link>
                                        <a className="card-subtitle pt-2 text-primary float-end" href = {`/profile/${post.user}`}>@{post.user}</a>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    
                
                </li>)
        }
        
    </ul>);
}


