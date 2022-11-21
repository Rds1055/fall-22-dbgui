const random = new (require('chance'));
const bcrypt = require('bcrypt');

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
            title: random.sentence(),
            movie_title: random.sentence({words:4}),
            director: random.name(),
            lead_actor: random.name(),
            release_date: random.date()
        }
    },
    post: (options = {}) => {
        return {
            user_id: 4,
            channel_id: random.integer({ min: 1, max: 4 }),
            title: random.sentence(),
            contents: random.paragraph(),
            ...options,
        }
    },
    comment: (options = {}) => {
        return {
            user_id: random.integer({ min: 10, max: 60}),
            post_id: random.integer({ min: 1, max: 50 }),
            contents: random.paragraph(),
            parent: random.integer({ min: 1, max: 20}),
            ...options,
        }
    }
};

random.mixin(mixins);

module.exports = random;