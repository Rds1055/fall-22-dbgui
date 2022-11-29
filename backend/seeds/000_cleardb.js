exports.seed = async function(knex) {
  await knex('users').del();
  await knex('posts').del();
  await knex('channels').del();
  await knex('comments').del();
};