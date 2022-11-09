import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {PostsList} from "./PostsList";
import { Post,Movie } from '../../../models/';
export const Channel = ({channel_id}) => {
    const navigate = useNavigate();
    // const [movie, setMovie] = useState("");
    // const [posts,setPosts] = useState("");
    // useEffect(() => {
    //     getMovieById(channel_id).then(x => setMovie(x));
    //     getPostsById(channel_id).then(x =>setPosts(x));
    // }, []);
    const movie = new Movie(0,"Spider Man 3","Quentin Tarantino","May 5 1902","Garfield","Peter Parker (Tobey Maguire) and M.J. (Kirsten Dunst) seem to finally be on the right track in their complicated relationship, but trouble looms for the superhero and his lover. Peter's Spider-Man suit turns black and takes control of him, not only giving Peter enhanced power but also bringing out the dark side of his personality. Peter must overcome the suit's influence as two supervillains, Sandman and Venom, rise up to destroy him and all those he holds dear.");
    const posts = [
        new Post(0,1,"Who dies soon?",20,"aug 2,2022","@marvin23"),
        new Post(0,2,"Does Lizard man eat Uncle Ben?",-3,"Jan 5, 2025","@jake_from_stateFarm")
    ];
    return(
        <div className='w-75 mx-auto rounded-3 mt-3'>
            <div className="card text-center">
                <div className="card-body col">
                    <h2 className="card-title">{movie.movie_name}</h2>
                    <div className='col p-1'>

                   
                   
                    
                    <div className="card-text ">
                        <h6 className=''>Lead Actor: {movie.lead_actor}</h6>
                        
                        <h6>Release Date: {movie.release_date}</h6>
                      
                        <h6>Director: {movie.director}</h6>
                    </div>
                    <div className=' p-4'>
                        <span className=" card-text">{movie.summary}</span>
                    </div>
                    </div>
                </div>
            </div>
            <br/>
            <PostsList posts={posts}/>
        </div>
    )



}