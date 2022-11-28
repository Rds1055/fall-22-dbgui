const random = require('../util/random-generator');

exports.seed = async function(knex) {

    const posts = [];
    num = 50;
    const users = await knex('users');
    const channels = await knex('channels');
    for (let i = 0; i < num; i++) {
        index = Math.floor(Math.random() * Object.keys(users).length);
        let usernm = users[index].username;
        index = Math.floor(Math.random() * Object.keys(channels).length);
        let chnnl = channels[index].channel_id;
        const post = random.post({ user: usernm, channel: chnnl });
        posts.push(post);
    }
    //const posts = random.n(random.post, 50);
    await knex('posts').insert(posts);
};