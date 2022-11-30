export class Comment{
    constructor(comment_id,contents,likes,parent,post,post_date,user){
        this.user=user;
        this.post=post;
        this.comment_id=comment_id;
        this.contents=contents;
        this.parent=parent;
        this.likes=likes;
        this.post_date=post_date;
    }
}