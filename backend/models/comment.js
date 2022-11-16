const knex = require('../database/knex');
const COMMENTS_TABLE = 'comments';
const fetchAllComments = async () => {
    const query = knex(COMMENTS_TABLE);
    const results = await query;
    return results;
}
const fetchCommentsByUser = async (user_id) => {
    const query = knex(COMMENTS_TABLE).where({ user_id });
    const results = await query;
    return results;
}
const updateComment = async (contents, comment_id)  => {
    const query = knex(COMMENTS_TABLE).update({contents}).where({comment_id});
    const results = await query;
    return results;
}
const createComment = async (user_id, post_id, contents, parent) => {
    const query = knex(COMMENTS_TABLE).insert({user_id, post_id, contents, parent});
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
    createComment,
    updateComment,
    deleteComment
 }