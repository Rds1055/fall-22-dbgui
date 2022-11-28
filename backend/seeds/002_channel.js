const random = require('../util/random-generator');

exports.seed = async function(knex){
    const channels = random.n(random.channel, 20)
    await knex('channels').insert(channels);
};