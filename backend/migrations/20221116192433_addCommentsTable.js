/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
      table.increments('comment_id').notNullable();
      table.string('user');
      table.integer('post').unsigned().notNullable();
      table.string('contents');
      table.integer('parent');
      table.integer('likes').defaultTo(0);
      table.date('post_date').notNullable();
      table.foreign('user').references('username').inTable('users').onDelete('CASCADE');
      table.foreign('post').references('post_id').inTable('posts').onDelete('CASCADE');
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
return knex.schema.dropTable('comments')
};
