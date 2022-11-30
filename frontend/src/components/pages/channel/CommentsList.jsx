import { updateComment } from "../../../api"
export const CommentsList = ({comments}) => {
    if(!comments){
        return <>
             <div className='card w-50 mx-auto text-center p-4 m-4'>
                <div className='card-title'>
                    <h4 className='text-muted'>No Comments Yet</h4>
                    <h6 className='text-muted'>Click 'New Comment' to leave a comment</h6>
                </div>
            </div>
            </>
    }

    return <ul className='list-unstyled '>
    {
        comments.map((comment,index) =>
        <li key={index} className=' m-2 content-fluid'>
           <div className="card w-50 mx-auto p-1">
                <div className=''>
                    <h6 className='  m-1 text-secondary float-end '>{comment.comment_date}</h6>
                </div>
                <div className='card-body mt-0 p-0'>
            
                <div className='col-3'>
                                    <button type='button' className=" arrow up" onClick={ () => {
                                        updateComment(comment.comment_id, {likes: comment.likes+1})
                                    } 
                                       
                                    }></button>
                                    <h6 className='ps-3 mt-3 '>{comment.likes}</h6>
                                    <button type='button' className="arrow down" onClick={ (post) => {
                                        updateComment(comment.comment_id, {likes: comment.likes-1})
                                    }
                                         
                                    }></button>
                                </div>
                                <div className='col-9 pr-3 mt-2' >
                                    <h6 className=" text-left px-3">{comment.contents} </h6>
                                </div>
                    <p className="card-subtitle  pt-3  mb-2 text-muted float-end">
                    <a className="card-subtitle pt-2 text-primary float-end" href = {`/profile/${comment.user}`}>{comment.user}</a>
                        <br/>
                    </p>
                    
                    <br />
                    
                    
                </div>
           </div>
        </li>)
    }
            
</ul>
}