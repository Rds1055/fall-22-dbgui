/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('channels', (table) => {
        table.increments('channel_id').notNullable();
        table.integer('admin_id');
        table.string('title');
        table.string('movie_title');
        table.integer('num_posts').defaultTo(0);
        table.string('director');
        table.string('lead_actor');
        table.date('release_date');
        table.text('movie_sum');
        table.index('channel_id');
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('channels');
};
