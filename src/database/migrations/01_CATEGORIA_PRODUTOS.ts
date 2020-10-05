import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('CATEGORIA_PRODUTOS', table => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.integer('solucao_id')
      .notNullable()
      .references('ID')
      .inTable('SOLUCOES_PRODUTOS')   
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('CATEGORIA_PRODUTOS');
};