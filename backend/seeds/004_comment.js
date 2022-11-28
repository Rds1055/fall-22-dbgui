const random = require('../util/random-generator');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const comments = [];
  const users = await knex('users');
  const posts = await knex('posts');
  for (let i = 0; i < 200; i++) {
      index = Math.floor(Math.random() * Object.keys(users).length);
      const user = users[index].username;
      index = Math.floor(Math.random() * Object.keys(posts).length);
      const post = posts[index].post_id;
      const comment = random.comment({ user, post });
      comments.push(comment);
  }
  // const comments = random.n(random.comment, 50);
  await knex('comments').insert(comments);
};
