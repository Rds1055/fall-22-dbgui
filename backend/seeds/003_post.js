const random = require('../util/random-generator');

exports.seed = async function(knex) {
    const posts = [];
    const users = await knex('users');
    const channels = await knex('channels');
    for (let i = 0; i < 50; i++) {
        index = Math.floor(Math.random() * Object.keys(users).length);
        const user = users[index].username;
        index = Math.floor(Math.random() * Object.keys(channels).length);
        const channel = channels[index].channel_id;
        const post = random.post({ user, channel });
        posts.push(post);
    }
    // const posts = random.n(random.post, 50);
    await knex('posts').insert(posts);
};