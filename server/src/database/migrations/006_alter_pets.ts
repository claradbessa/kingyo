import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.alterTable('pets', table => {
    table.string('code').unique();
});
}

export async function down(knex: Knex) {
    return knex.schema.alterTable('pets', function(t) {
        t.string('code').unique();       
      });
}