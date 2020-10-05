import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('CLIENTES', table => {
    table.increments('id').primary();
    table.string('image')
    table.string('nome').notNullable();
    table.string('sobrenome').notNullable();
    table.integer('cpf', 11).notNullable();
    table.date('data_nascimento').notNullable();
    table.integer('celular').notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable();
    table.boolean('ativo').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('CLIENTES');
};