import { useEffect,useState } from 'react';
import { TextField } from '../../common';
import {useNavigate, useParams} from 'react-router-dom';
import {PostsList} from "./PostsList";
import { Post,Channel } from '../../../models';
import { getChannelById, getPostsByChannel } from '../../../api';
import { NewContent } from './NewContent';
export const Community = () => {

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
    const navigate = useNavigate();
   
   
    const params = useParams();




    useEffect(() => {
        getChannelById(params.channel_id).then(x => setChannel(x[0]));
        getPostsByChannel(params.channel_id).then( x => setPosts(x));
        console.log(channel.title)
        console.log(channel.posts)
    }, []);
    


    const channel1 = new Channel(0,"Spider Man 3","Aug 1, 1943","Peter Parker (Tobey Maguire) and M.J. (Kirsten Dunst) seem to finally be on the right track in their complicated relationship, but trouble looms for the superhero and his lover. Peter's Spider-Man suit turns black and takes control of him, not only giving Peter enhanced power but also bringing out the dark side of his personality. Peter must overcome the suit's influence as two supervillains, Sandman and Venom, rise up to destroy him and all those he holds dear.");
    const postsW = [
        new Post(1,0,"Who dies soon?",20,"aug 2,2022","@marvin23"),
        new Post(2,0,"Does Lizard man eat Uncle Ben?",-3,"Jan 5, 2025","@jake_from_stateFarm"),
        new Post(3,0,"Is Aunt May single?",300,"Sept. 4, 2022","@johnBonesJones")
    ];

    if(!posts || !channel){
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

        <button type='button' className='btn btn-primary float-end' data-bs-toggle="modal" data-bs-target="#postModal">New Comment</button>

    </div>



    <div className='w-75 mx-auto rounded-3 mt-3'>
        <div className="card text-center">
            <div className="card-body col">
                <h2 className="card-title">{channel.channel_title}</h2>
                <div className=' px-4 pt-1 m-3'>
                        <span className="m-4 fs-6 card-text">{channel.summary}</span>
                </div>
            </div>
         </div>
            <PostsList posts={posts}/>
    </div>



    <div className="modal fade" id="postModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                   
                        {/* <NewContent user_name="STATE"/> */}
                    
                
                            
                </div>
            </div>
        </div>

    </>
    )


}