import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('vaccines', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.date('date').notNullable();
        table.string('comments');

        table.integer('pet_id')
            .unsigned()
            .references('id')
            .inTable('pets')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('profissional_id')
            .unsigned()
            .references('id')
            .inTable('professionals')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('vaccines');
}