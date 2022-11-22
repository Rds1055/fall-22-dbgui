const knex = require('../database/knex');
const POSTS_TABLE = 'posts';
const fetchAllPosts = async () => {
    const query = knex(POSTS_TABLE);
    const results = await query;
    return results;
}
const fetchPostsById = async (post_id) => {
    const query = knex(POSTS_TABLE).where({ post_id });
    const results = await query;
    return results;
}
const fetchPostsByName = async (title) => {
    const query = knex(POSTS_TABLE).where({ title });
    const results = await query;
    return results;
}
const fetchPostsByUser = async (user_id) => {
    const query = knex(POSTS_TABLE).where({ user_id });
    const results = await query;
    return results;
}
const fetchPostsByChannel = async (channel_id) => {
    const query = knex(POSTS_TABLE).where({ channel_id });
    const results = await query;
    return results;
}
const updatePostName = async (title, post_id)  => {
    const query = knex(POSTS_TABLE).update({title}).where({post_id});
    const results = await query;
    return results;
}
const createPost = async (user_id, channel_id, title, contents) => {
    const query = knex(POSTS_TABLE).insert({user_id, channel_id, title, contents});
    const results = await query;
    return results;
}
const deletePost = async (post_id) => {
    const query = knex(POSTS_TABLE).delete().where({post_id});
    const results = await query;
    return results;
}
   module.exports = {
    fetchAllPosts,
    fetchPostsById,
    fetchPostsByName,
    fetchPostsByUser,
    fetchPostsByChannel,
    createPost,
    updatePostName,
    deletePost
 }