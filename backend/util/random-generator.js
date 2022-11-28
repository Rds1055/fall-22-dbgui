const random = new (require('chance'));
const bcrypt = require('bcrypt');
const knex = require('knex')({
    client: 'mysql',
    debug: true,
    connection: {
      host : process.env.MYSQL_CLOUD_HOST,
      port : process.env.MYSQL_PORT,
      user : process.env.MYSQL_CLOUD_USER,
      password : process.env.MYSQL_CLOUD_PASS,
      ssl : true,
      database : process.env.MYSQL_DB
    },
    pool: {
      min: 0,
      max: 10
    },
    seeds: {
      directory: './seeds'
    },
    migrations: {
      directory: './migrations'
    }
  });

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
            // user: knex.raw("SELECT username FROM users ORDER BY RAND() LIMIT 1"),
            // username:random.string(),
            user: random.first().concat(random.last()),
            channel: random.integer({ min: 0, max: 1000 }),
            title: random.sentence(),
            contents: random.paragraph(),
            ...options,
        }
    },
    comment: (options = {}) => {
        return {
            user: random.first().concat(random.last()),
            post: random.integer({ min: 0, max: 1000 }),
            contents: random.paragraph(),
            parent: null,
            ...options,
        }
    }
};

random.mixin(mixins);

module.exports = random;