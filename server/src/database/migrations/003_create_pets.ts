import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('pets', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('species').notNullable();
        table.string('breed');
        table.string('age').notNullable();
        table.string('gender').notNullable();
        table.integer('tutor_id')
            .unsigned()
            .references('id')
            .inTable('tutors')
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
    return knex.schema.dropTable('pets');
}