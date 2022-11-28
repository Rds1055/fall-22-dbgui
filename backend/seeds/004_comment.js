const random = require('../util/random-generator');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const comments = [];
  num = 100;
  const users = await knex('users');
  const posts = await knex('posts');
  for (let i = 0; i < num; i++) {
      index = Math.floor(Math.random() * Object.keys(users).length);
      let usernm = users[index].username;
      index = Math.floor(Math.random() * Object.keys(posts).length);
      let pst = posts[index].post_id;
      const comment = random.comment({ user: usernm, post: pst });
      comments.push(comment);
  }
  await knex('comments').insert(comments);
  for (let i = 0; i < num; i++) {
    index = Math.floor(Math.random() * Object.keys(comments).length);
    id = Math.floor(Math.random() * Object.keys(comments).length);
    while(id === index){
      index = Math.floor(Math.random() * Object.keys(comments).length);
    }
    x = Math.random();
    if(x < 0.35){
      await knex('comments').where({comment_id: id}).update('parent', index)
    }
  }
  //const comments = random.n(random.comment, 50);
};
