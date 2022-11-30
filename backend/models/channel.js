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
const fetchChannelsById = async (channel_id) => {
    const query = knex(CHANNELS_TABLE).where({ channel_id });
    const results = await query;
    return results;
}
const fetchChannelsByMovie = async (movie_title) => {
    const query = knex(CHANNELS_TABLE).where({ movie_title });
    const results = await query;
    return results;
}
const fetchChannelCount = async (title) => {
    const query = knex(CHANNELS_TABLE).count("*").where({ title });
    const result = await query;
    return result;
}
const fetchChannels = async (query) => {
    const sql = knex(CHANNELS_TABLE).where((qb) => {
        if (query.date) {
            qb.where("comment_date", ">=", query.date)
        }

        if (query.keyword) {
            qb.where((qb2) => {
                qb2.orWhere("title", "like", `%${query.keyword}%`)
                qb2.orWhere("director", "like", `%${query.keyword}%`)
                qb2.orWhere("lead_actor", "like", `%${query.keyword}%`)
                qb2.orWhere("movie_sum", "like", `%${query.keyword}%`)
            }) 
        }
    }).orderBy("likes", "desc");
    const results = await sql;
    return results;
}
const updateChannelName = async (title, channel_id)  => {
    const query = knex(CHANNELS_TABLE).update({title}).where({channel_id});
    const results = await query;
    return results;
}
const createChannel = async (body) => {
    const query = knex(CHANNELS_TABLE).insert({...body});
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
    fetchChannelsById,
    fetchChannelsByMovie,
    fetchChannelCount,
    fetchChannels,
    createChannel,
    updateChannelName,
    deleteChannel
 }