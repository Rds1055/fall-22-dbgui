/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('post_id').notNullable();
        table.integer('user_id');
        table.integer('channel_id')
        table.string('title');
        table.string('contents');
        table.integer('likes').defaultTo(0);
        table.timestamp('post_date').notNullable().defaultTo(knex.fn.now());
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable('posts');
};
