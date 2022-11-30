const { fetchUsersByName } = require("../models/user");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', (table) => {
        table.string('username').notNullable().unique();
        table.primary(['username']);
        table.increments('user_id');
        table.string('email');
        table.string('pword');
        table.boolean('is_admin').defaultTo(false);
        table.timestamp('user_since').defaultTo(knex.fn.now());
        table.index('username');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
