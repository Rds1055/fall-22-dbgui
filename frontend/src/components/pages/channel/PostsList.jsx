import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { Channel } from '../../../models';

import "./postList.css";
export const PostsList = ({posts}) => {
    const navigate = useNavigate();
    
    const channel = new Channel(0,"Spidey-3","June 22, 1920","Spidey Good");
   
    
return(
    <ul className='list-group list-unstyled w-50 mx-auto'>
        {
            posts.map((post,index) => 
                <li key={index}className='content mt-3'>
                   <div className="card">
                        <div className="card-body row">
                            <div className=''>
                                <h6 className=' float-end text-muted '>{post.post_date}</h6>
                            </div>
                            
                            <br className='clearfix'/>
                            
                            <div className='row'>
                                <div className='col-3'>
                                    <a type='button' className=" arrow up"></a>
                                    <h6 className='ps-3 mt-1'>{post.likes}</h6>
                                    <a type='button' className="arrow down"></a>
                                </div>
                                <div className='col-9 pr-3' >
                                    <h6 className=" text-left px-3">{post.content} </h6>
                                </div>
                                
                                <div className=" pt-4 mb-0 ">
                                    <div className=" text-primary">
                                        <Link className='btn fs-6 border border-primary'type='button' to={`${post.post_id}`}>
                                                See Comments
                                        </Link>
                                        <span className="card-subtitle pt-2 text-primary float-end">{post.user_id}</span>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    
                
                </li>)
        }
        
    </ul>);
}


