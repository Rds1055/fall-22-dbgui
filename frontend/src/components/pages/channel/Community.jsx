import { useEffect,useState } from 'react';
import { TextField } from '../../common';
import {useNavigate, useParams} from 'react-router-dom';
import {PostsList} from "./PostsList";
import { Post,Channel } from '../../../models';
import { getChannelById, getPostsByChannel } from '../../../api';
import { NewContent } from './NewContent';
export const Community = ({channel_id}) => {

    //Michael: START OF SEARCH BAR STUFF 
    const [class_, setClass_] = useState("hidden");

    const changeView = () => {
        console.log("here");
        if (class_ === "hidden") {
            setClass_("");
        } else {
            setClass_("hidden");
        }
    };

    const [keyword, setKeyword] = useState('');
    const [date, setDate] = useState('');
    const [likes, setLikes] = useState('');
    const [title, setTitle] = useState('');

    //MICHAEL: END OF SEARCH BAR STUFF 



    const [posts,setPosts] = useState(undefined);

    const [channel,setChannel] = useState(undefined);
    const postsW = [
        new Post(1,0,"Who dies soon?",20,"aug 2,2022","@marvin23"),
        new Post(2,0,"Does Lizard man eat Uncle Ben?",-3,"Jan 5, 2025","@jake_from_stateFarm"),
        new Post(3,0,"Is Aunt May single?",300,"Sept. 4, 2022","@johnBonesJones")
    ];
   
   
    const params = useParams();
    console.log("P")
    console.log(params);
    useEffect(() => {
        getChannelById(params.channelId).then(x => setChannel(x));
        // getPostsByChannel(params.channelId).then( x => setPosts(x));
        setPosts(postsW);
        
    }, [ posts ]);
    

   
   

    console.log("CP")
    console.log(channel);
    if( !channel){
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
            <button type='button' className='btn btn-primary float-end m-2' data-bs-toggle="modal" data-bs-target="#postModal">New Post</button>
        <br className='clearfix'/>
        </div>
    </div>


    <div className='px-4'>
        <div id = "SearchBars" className = { class_ }>

            <TextField label = "Search Keyword: " value = {keyword} setValue = {setKeyword} id = "Search-Keyword" type = "text"/>
            <TextField label = "Search Date: " value = {date} setValue = {setDate} id = "Search-Date" type = "text"/>
            <TextField label = "Minimum Likes: " value = {likes} setValue = {setLikes} id = "Minimum-Likes" type = "text"/>
            <TextField label = "Search Title: " value = {title} setValue = {setTitle} id = "SearchWord" type = "text"/>

            <button
                type = "button" className="btn btn-primary btn-lg btn-block"
                    onClick = {() => {
                    setKeyword("");
                    setDate("");
                    setLikes("");
                    setTitle("");
                    }}
                    >
                    Search
            </button>
        </div>

    </div>



    <div className='w-75 mx-auto rounded-3 mt-3'>
        <div className="card ">
            <div className="card-body">
                <h2 className="card-title text-center">Spider Man 3: No Way Home</h2>
                <div className=' px-4 pt-1 m-3'>
                    <h4 className="m-4 fs-6 card-text text-center">{channel[0].title}</h4>
                    <div className='row'>
                        <div className=''>
                            <h6 className=' text-muted m-1 left-0'>Director: <span className='text-dark'>{channel[0].director}</span>
                                <span className='float-end'>Release Date: <span className='text-dark'>{channel[0].release_date}</span> </span></h6>
                        
                            <h6 className='text-muted m-1 left-0'>Lead: <span className='text-dark ps-0'>{channel[0].lead_actor}</span>
                                <span className='float-end'>{channel[0].num_posts} Posts</span></h6>
                        </div>
                       
                           
                       
                    </div>
                   
                </div>
            </div>
         </div>
            <PostsList posts={posts}/>
    </div>



    <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                   
                        <NewContent user_name="STATE"/>
                
                            
                </div>
            </div>
        </div>

    </>
    )


}