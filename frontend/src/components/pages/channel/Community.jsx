import { useEffect,useState } from 'react';
import { TextField } from '../../common';
import { useNavigate, useParams} from 'react-router-dom';
import { Post,Channel } from '../../../models';
import { getChannelById, getPostsByChannel, getPosts, getUserInfo, deleteChannel, addChannel } from '../../../api';
import { NewComment, NewPost,PostsList } from './';
import { LoginModal } from '../../common';
import { getFilteredPostsByChannel } from '../../../api';

export const Community = () => {

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


    const [user,setUser] = useState(undefined);
    const [posts,setPosts] = useState([]);
    const [channel,setChannel] = useState(undefined);
    const params = useParams();

    useEffect(() => {
        getChannelById(params.channel_id).then(x => setChannel(x[0]));
        getPostsByChannel(params.channel_id).then( x => setPosts(x));
        if (sessionStorage.token) {
            getUserInfo().then(x => setUser(x[0]));
        } 
    }, []);
   
    const navigate = useNavigate();


    if(!channel){
        return <>Loading...</>
    }

    return(<>
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
                <button type='button' className='btn btn-primary float-end m-2' data-bs-toggle="modal" data-bs-target="#postModal">New Post</button>
            }
            {
                !sessionStorage.token &&
                <button type='button' className='btn btn-primary float-end m-2' 
                    onClick = {() => { navigate("/restricted-content")}}>New Post</button>
            }
        <br className='clearfix'/>
        </div>
    </div>


    <div className='px-4 w-50 ms-4'>
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

                    getFilteredPostsByChannel({channel: params.channel_id, keyword, date, likes}).then(x => setPosts(x));
                    
                    setKeyword("");
                    setDate("");
                    setLikes("");

                    <PostsList posts={posts}/>
                    }}
                    >
                    Search
            </button>
        </div>

    </div>



    <div className='w-75 mx-auto rounded-3 mt-3 mb-5'>

        <div className="card ">
            <div className="card-body">
                <div className=' px-4 pt-1 m-3'>
                    <h4 className="m-4  card-text text-center">{channel.title}</h4>
                    <br/>
                    <h6 className='mb-4 fs-6 card-text text-center'>{channel.movie_sum}</h6>
                    <div className='row'>
                        <div className=''>
                            <h6 className=' text-muted m-1 left-0'>Director: <span className='text-dark'>{channel.director}</span>
                                <span className='float-end'>Release Date: <span className='text-dark'>{channel.release_date.slice(0,10)}</span> </span></h6>
                        
                            <h6 className='text-muted m-1 left-0'>Lead: <span className='text-dark ps-0'>{channel.lead_actor}</span>
                                <span className='float-end'>{posts.length} Posts</span></h6>
                                <span className='clearfix'></span>
                                {

                                
                                <button type='button' className='btn btn-sm  p-1 btn-link btn-danger text-decoration-none text-secondary' onClick={ () =>{
                                       deleteChannel(channel.channel_id).then(x => window.location.reload());
                                       navigate('/dashboard');
                                   }}
                                   >Delete</button>
                                }
                        </div>
                       
                           
                    </div>
                   
                </div>
            </div>
            
                                   
                                   
                                       
         </div>
         
         
            <PostsList posts={posts}
                        user = {user}/>
    </div>


    <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content h-100">
                <NewPost 
                    user = { user }
                    channel = { channel } 
                   
                />
            </div>
        </div>
    </div>

    </>
    )


}