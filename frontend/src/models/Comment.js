export class Comment{
    constructor(comment_id,user_id,post_id,content,comment_date,parent){
        this.comment_id=comment_id;
        this.user_id=user_id;
        this.post_id=post_id;
        this.content=content;
        this.comment_date=comment_date;
        this.parent=parent;
       
    }
}