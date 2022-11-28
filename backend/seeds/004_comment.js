const random = require('../util/random-generator');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const comments = random.n(random.comment, 50);
  await knex('comments').insert(comments);
};
