import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.alterTable('users', table => {
    //table.integer('type');
});
}

export async function down(knex: Knex) {
    return knex.schema.alterTable('users', function(t) {
        t.integer('type');       
      });
}