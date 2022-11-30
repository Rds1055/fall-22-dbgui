const knex = require('../database/knex');
const COMMENTS_TABLE = 'comments';
const fetchAllComments = async () => {
    const query = knex(COMMENTS_TABLE).orderBy("likes", "desc");
    const results = await query;
    return results;
}
const fetchCommentsByUser = async (user) => {
    const query = knex(COMMENTS_TABLE).where({ user }).orderBy("likes", "desc");
    const results = await query;
    return results;
}
const fetchCommentsByPost = async (post) => {
    const query = knex(COMMENTS_TABLE).where({ post }).orderBy("likes", "desc");
    const results = await query;
    return results;
}
const fetchCommentsById = async (comment_id) => {
    const query = knex(COMMENTS_TABLE).where({ comment_id });
    const results = await query;
    return results;
}
const fetchComments = async (query) => {
    const sql = knex(COMMENTS_TABLE).where((qb) => {
        qb.where("post", "=", query.post);
        if (query.date) {
            qb.where("comment_date", ">=", query.date)
        }
        
        if (query.likes) {
            qb.orWhere("likes", ">=", query.likes)
        }

        if (query.keyword) {
            qb.orWhere("contents", "like", `%${query.keyword}%`)
        }
    }).orderBy("likes", "desc");
    const results = await sql;
    return results;
}
const updateComment = async (comment_id, comment)  => {
    if (comment.contents !== undefined) {
        const contents = comment.contents;
        const query = await knex(COMMENTS_TABLE).update({contents}).where({comment_id});
    }
    if (comment.likes !== undefined) {
        const likes = comment.likes;
        const query = await knex(COMMENTS_TABLE).update({likes}).where({comment_id});
    }
    const sql = knex(COMMENTS_TABLE).where({ comment_id });
    const result = await sql;
    return result;
}
const createComment = async (body) => {
    const query = knex(COMMENTS_TABLE).insert({...body});
    const results = await query;
    return results;
}
const deleteComment = async (comment_id) => {
    const query = knex(COMMENTS_TABLE).delete().where({comment_id});
    const results = await query;
    return results;
}
   module.exports = {
    fetchAllComments,
    fetchCommentsByUser,
    fetchCommentsByPost,
    fetchCommentsById,
    fetchComments,
    createComment,
    updateComment,
    deleteComment
 }