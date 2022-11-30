import { updateComment } from "../../../api"
export const CommentsList = ({comments,user}) => {
    console.log(comments);
    if(!comments || comments.length==0){
        return <>
             <div className='card w-50 mx-auto text-center p-4 m-4'>
                <div className='card-title'>
                    <h4 className='text-muted'>No Comments Yet</h4>
                    <h6 className='text-muted'>Click 'New Comment' to leave a comment</h6>
                </div>
            </div>
            </>
    }
    return(<>
    

    <ul className='list-unstyled '>
    {
        comments.map((comment,index) =>
        <li key={index} className=' m-2 content-fluid'>
           <div className="card w-50 mx-auto p-1">
                <div className=''>
                    <h6 className='  m-1 text-secondary float-end '>{comment.post_date}</h6>
                </div>
                <div className='card-body row mt-0 p-0'>
            
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
                                <div className='col-8 pr-3 mt-2' >
                                    <h6 className=" text-left px-3">{comment.contents} </h6>
                                </div>
                    <div className="card-subtitle  pt-3  mb-2 text-muted float-end">
                        {
                            (user && user.username==comment.user)&&<button type='button' className='btn btn-secondary' onClick={ () =>{
                                // deleteComment(comment.comment_id);
                            }}
                            >Delete</button>
                        }
                        
                        <span className='m-1 text-primary float-end'>@{comment.user}</span>
                        <br/>
                    </div>
                    
                    
                    
                    
                </div>
           </div>
        </li>)
    }
            
</ul>
</>);
}