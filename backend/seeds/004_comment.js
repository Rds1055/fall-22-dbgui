const random = require('../util/random-generator');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const posts = random.n(random.post, 50);
  await knex('posts').insert(posts);
};
