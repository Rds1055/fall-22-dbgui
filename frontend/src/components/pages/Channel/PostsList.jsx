import {useNavigate} from 'react-router-dom';

export const PostsList = ({posts}) => {
    const navigate = useNavigate();
    const commentsList = [
        new Comment(1234,3456,1122,"Spidey def dies soon",5,"May 1,1997",0),
        new Comment(1235,3457,1122,"Aunt May is hot",6,"May 100,1997",1),
    ];
    // const [comments,setComments] = useState("");
    // useEffect(() => {
    //     getCommentsById(post_i).then(x => setComments(x));
    // }, []);
return(
    <ul className='list-group list-unstyled w-50 mx-auto'>
        {
            posts.map((post,index) => 
                <li key={index}className='content mt-3'>
                    
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">{post.content}</h5>
                            <div>
                                <h6 className="card-subtitle mb-2  text-muted float-end">{post.user_id}</h6>
                                <br className='float-clear'/>
                                <h6 className="card-subtitle mb-2 text-muted float-end">{post.post_date}</h6>
                                <span className="float-clear"></span>
                            </div>
                            
                            <div>
                                <div className='col '>
                                
                                 <a type="button" className=" px-3 btn btn-primary btn-block btn-sm"
                                        //update likes with axios
                                    >Like</a>
                                    <h6 className='ps-3'>{post.likes}</h6>
                                    <a type="button" className="btn btn-danger btn-sm btn-block"
                                        //update likes with axios
                                    >Dislike</a>
                                
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col text-center">
                                        <button className="btn btn-secondary"
                                        onClick={
                                            1
                                            //send comments to new page
                                        }>See Comments</button>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                
                </li>)
        }
        
    </ul>);
}


