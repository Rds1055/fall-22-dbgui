import { useEffect,useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {PostsList} from "./PostsList";
import { Post,Channel } from '../../../models';
export const Community = ({channel_id}) => {
    const [channel,setChannel] = useState({});
    const navigate = useNavigate();
     //const movie = getCommentsByPost({post_id});
    // const posts = getPostsById({channel_id});
    const params = useParams();
    console.log(params);
    useEffect(() => {
        // if (params.post_id) {
            setChannel(channel1)
            // getMovieById(params).then(x => setComments(x));
        // } else {
        //     setComments(commentsW)
        //     // setComments({ comments: []});
        // }
    }, []);
    const channel1 = new Channel(0,"Spider Man 3","Aug 1, 1943","Peter Parker (Tobey Maguire) and M.J. (Kirsten Dunst) seem to finally be on the right track in their complicated relationship, but trouble looms for the superhero and his lover. Peter's Spider-Man suit turns black and takes control of him, not only giving Peter enhanced power but also bringing out the dark side of his personality. Peter must overcome the suit's influence as two supervillains, Sandman and Venom, rise up to destroy him and all those he holds dear.");
    const posts = [
        new Post(1,0,"Who dies soon?",20,"aug 2,2022","@marvin23"),
        new Post(2,0,"Does Lizard man eat Uncle Ben?",-3,"Jan 5, 2025","@jake_from_stateFarm"),
        new Post(3,0,"Is Aunt May single?",300,"Sept. 4, 2022","@johnBonesJones")
    ];
    
return(
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
    )


}