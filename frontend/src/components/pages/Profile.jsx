import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateEmailModal } from "../common/UpdateEmailModal";
import { getUserByUsername, getUserPostLikes, getUserPosts, getUserCommentLikes, getUserComments } from "../../api";

export const Profile = () => {

    const [ user, setUser ] = useState(undefined);
    const [ posts, setPosts ] = useState(undefined);
    const [ postLikes, setPostLikes ] = useState(undefined);
    const [ comments, setComments ] = useState(undefined);
    const [ commentLikes, setCommentLikes ] = useState(undefined);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.username) {
            getUserByUsername(params.username).then(x => setUser(x));
            getUserPosts(params.username).then(x => setPosts(x));
            getUserPostLikes(params.username).then(x => setPostLikes(x));
            getUserComments(params.username).then(x => setComments(x));
            getUserCommentLikes(params.username).then(x => setCommentLikes(x));
        } else {
            navigate("/restricted-content");
        }
    }, [])


    if (!user) {
        return <>
            Loading...
        </>
    }

return(

<>

<div className = "text-center pt-3 text-light">
    <header>

<h3> Username: </h3>
@{ user[0].username }
<h3> Email: </h3>
{ user[0].email }
<h3>Admin: </h3>
{ user[0].is_admin }
<h3>Date Joined:</h3>
 { user[0].user_since }


        <h3>Posts:</h3>
        { 
            posts && posts[0]["count(*)"]
        }
        {
            !posts && 0
        }

        <h3>Post Likes:</h3>
        { 
            postLikes && postLikes[0]["sum(`posts`.`likes`)"]
        }
        {
            !postLikes && 0
        }

        <h3>Comments:</h3>
        { 
            comments && comments[0]["count(*)"]
        }
        {
            !comments && 0
        }

        <h3>Comment Likes:</h3>
        { 
            commentLikes && commentLikes[0]["sum(`comments`.`likes`)"]
        }
        {
            !commentLikes && 0
        }
</header>

<button
                    type = "button" className="btn btn-primary"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                   Edit Profile
                </button>
                
<UpdateEmailModal user = { user[0] }/>

</div>

</>
)

}