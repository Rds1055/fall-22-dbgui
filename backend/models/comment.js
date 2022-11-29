const knex = require('../database/knex');
const COMMENTS_TABLE = 'comments';
const fetchAllComments = async () => {
    const query = knex(COMMENTS_TABLE);
    const results = await query;
    return results;
}
const fetchCommentsByUser = async (user) => {
    const query = knex(COMMENTS_TABLE).where({ user });
    const results = await query;
    return results;
}
const fetchCommentsByPost = async (post) => {
    const query = knex(COMMENTS_TABLE).where({ post });
    const results = await query;
    return results;
}
const fetchCommentsById = async (comment_id) => {
    const query = knex(COMMENTS_TABLE).where({ comment_id });
    const results = await query;
    return results;
}
const updateComment = async (contents, comment_id)  => {
    const query = knex(COMMENTS_TABLE).update({contents}).where({comment_id});
    const results = await query;
    return results;
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
    createComment,
    updateComment,
    deleteComment
 }