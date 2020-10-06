import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('tutors', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('number').notNullable();
        table.string('street').notNullable();
        table.string('neighborhood').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('cep');
        table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('tutors');
}