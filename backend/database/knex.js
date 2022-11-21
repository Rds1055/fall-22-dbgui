const knexConfig = require('../knexfile');
const knex = require('knex');
module.exports = knex(knexConfig.client, knexConfig.connection, knexConfig.debug,
    knexConfig.migrations, knexConfig.seeds);