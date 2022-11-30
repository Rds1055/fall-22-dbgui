import { updateComment,deleteComment } from "../../../api"
export const CommentsList = ({comments,user}) => {

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
        <li key={index} className=' m-2 content-fluid '>
           <div className="card w-50 mx-auto p-1 ">
                <div className=''>
                    <h6 className='  m-1 text-secondary float-end me-2'>{comment.post_date.slice(0,10)}</h6>
                </div>
                <div className='card-body row mt-0 p-0'>
            
                <div className='col-3'>
                                    <button type='button' className=" arrow up" onClick={ () => {
                                        updateComment(comment.comment_id, {likes: comment.likes+1}).then(x => window.location.reload())
                                    } 
                                       
                                    }></button>
                                    <h6 className='ps-2 mt-3 ms-1 '>{comment.likes}</h6>
                                    <button type='button' className="arrow down" onClick={ () => {
                                        updateComment(comment.comment_id, {likes: comment.likes-1}).then(x => window.location.reload())
                                    }
                                         
                                    }></button>
                                </div>
                                <div className='col-8 pr-3 mt-2' >
                                    <h6 className=" text-left px-3">{comment.contents} </h6>
                                </div>

                    <div className="card-subtitle  pt-3  mb-2 text-muted float-end">
                        {
                         
                            (user && user.username==comment.user)&&<button type='button' className='btn btn-danger fs-6 btn-link text-secondary p-1 text-decoration-none' onClick={ () =>{
                                deleteComment(comment.comment_id).then(x => window.location.reload());
                            }}
                            >Delete</button>
                        }
                        

                
                      

                  
                    <a className="card-subtitle pt-2 text-primary me-2 text-decoration-none float-end" href = {`/profile/${comment.user}`}>@{comment.user}</a>

                        <br/>
                    </div>
                    
                    
                    
                    
                </div>
           </div>
        </li>)
    }
            
</ul>
</>);
}