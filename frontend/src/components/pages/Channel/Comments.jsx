import {useNavigate} from 'react-router-dom';

export const Comments = ({post_id}) => {
    const navigate = useNavigate();
    //const comments = getCommentsByPost({post_id});
    const post = getPostById({post_id});
    return(
        <div>
        <div>
            <h1>{post.content}</h1>
            <p>
                <span>{post.likes}</span>
                <span>{post.date}</span>
                <span>p{post.user_id}</span>
            </p>
        </div>
        <button type='button' onClick={(post_id)=>{
            navigate('/')
        }

        }>Back</button>
    <ul className='list-group'>
        {
            comments.map((comment,index) =>
            <li key={index} className='content'>
                <span >{comment.content}</span>
                <span >{comment.user_id}</span>
                <span>{comment.comment_date}</span>
            </li>)
        }
                
    </ul>
    </div>);
}

