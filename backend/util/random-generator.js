const random = new (require('chance'));
const bcrypt = require('bcrypt');
const knex = require('../database/knex');

const mixins = {
    user: (options = {}) => {
        const plainPassword = 'password';
        const hashedPassword = bcrypt.hashSync(plainPassword, 10);
        return {
            username: random.first().concat(random.last()),
            pword: hashedPassword,
            email: random.email(),
            ...options,
        }
    },
    channel: (options = {}) => {
        return {
            admin_id: 1,
            title: random.sentence({words:7}),
            movie_title: random.sentence({words:4}),
            director: random.name(),
            lead_actor: random.name(),
            release_date: random.date()
        }
    },
    post: (options = {}) => {
        return {
            //username: knex.column('username').inTable('users').select(knex.raw("ORDER BY RAND() LIMIT 1")),
            username: knex.raw("SELECT username FROM users ORDER BY RAND() LIMIT 1"),
            // username:random.string(),
            channel: random.integer({ min: 201, max: 220 }),
            title: random.sentence(),
            contents: random.paragraph(),
            ...options,
        }
    },
    comment: (options = {}) => {
        return {
            // username: knex.raw("SELECT username FROM users ORDER BY RAND() LIMIT 1"),
            user: "NinaGreer",
            post: random.integer({ min: 1, max: 5 }),
            contents: random.paragraph(),
            parent: random.integer({ min: 1, max: 20}),
            ...options,
        }
    }
};

random.mixin(mixins);

module.exports = random;