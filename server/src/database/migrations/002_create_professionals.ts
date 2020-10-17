import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('professionals', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('responsible').notNullable();
        table.string('phone').notNullable();
        table.string('cnpj_cpf').notNullable();
        table.string('crmv');
        table.string('type').notNullable();
        table.text('decription');
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
    return knex.schema.dropTable('professionals');
}