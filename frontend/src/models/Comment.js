export class Comment{
    constructor(commentId,user_id,post_id,content,comment_date,parent){
        this.commentId=commentId;
        this.user_id=user_id;
        this.post_id=post_id;
        this.content=content;
        this.commentId=commentId;
        this.comment_date=comment_date;
        this.parent=parent;
    }
}