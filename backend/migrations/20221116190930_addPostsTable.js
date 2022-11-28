/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
      table.increments('post_id').notNullable();
      table.string('user').notNullable();
      table.integer('channel').unsigned().notNullable();
      table.text('title');
      table.text('contents');
      table.integer('likes').defaultTo(0);
      table.timestamp('post_date').notNullable().defaultTo(knex.fn.now());
      table.foreign('user').references('username').inTable('users').onDelete('CASCADE');
      table.foreign('channel').references('channel_id').inTable('channels').onDelete('CASCADE');
      table.index('post_id');
  });
};
/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};

