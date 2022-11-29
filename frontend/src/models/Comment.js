export class Comment{
    constructor(post,comment_id,user,contents,parent,likes,post_date){
        this.user=user;
        this.post=post;
        this.comment_id=comment_id;
        this.contents=contents;
        this.parent=parent;
        this.likes=likes;
        this.post_date=post_date;
    }
}