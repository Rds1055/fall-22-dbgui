const random = require('../util/random-generator');

exports.seed = async function(knex) {
    // const posts = [];
    // const users = await knex('users');
    // for (let i = 0; i < 1; i++) {
    //     index = Math.floor(Math.random() * Object.keys(users).length);
    //     let user_id = users[index].user_id;
    //     const post = random.post({ user_id: user_id });
    //     posts.push(post);
    // }
    const posts = random.n(random.post, 50);
    await knex('posts').insert(posts);
};