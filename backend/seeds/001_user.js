const random = require('../util/random-generator');

exports.seed = async function(knex){
    const users = random.n(random.user, 100)
    await knex('users').insert(users);
};
