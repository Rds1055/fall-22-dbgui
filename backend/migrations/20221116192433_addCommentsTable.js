/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments('comment_id').notNullable();
        table.integer('user_id');
        table.integer('post_id')
        table.string('contents');
        table.integer('parent');
        table.integer('likes').defaultTo(0);
        table.timestamp('post_date').notNullable().defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.dropTable('comments')
};
