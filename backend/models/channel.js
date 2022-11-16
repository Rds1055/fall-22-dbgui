const knex = require('../database/knex');
const CHANNELS_TABLE = 'channels';
const fetchAllChannels = async () => {
    const query = knex(CHANNELS_TABLE);
    const results = await query;
    return results;
}
const fetchChannelsByName = async (title) => {
    const query = knex(CHANNELS_TABLE).where({ title });
    const results = await query;
    return results;
}
const updateChannelName = async (title, channel_id)  => {
    const query = knex(CHANNELS_TABLE).update({username}).where({user_id});
    const results = await query;
    return results;
}
const createChannel = async (admin_id, title, movie_title) => {
    const query = knex(CHANNELS_TABLE).insert({admin_id, title, movie_title});
    const results = await query;
    return results;
}
const deleteChannel = async (channel_id) => {
    const query = knex(CHANNELS_TABLE).delete().where({channel_id});
    const results = await query;
    return results;
}
   module.exports = {
    fetchAllChannels,
    fetchChannelsByName,
    createChannel,
    updateChannelName,
    deleteChannel
 }