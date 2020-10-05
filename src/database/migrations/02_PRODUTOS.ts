import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('PRODUTOS', table => {
    table.increments('id').primary();
    table.string('image')
    table.string('nome').notNullable();
    table.string('descricao').notNullable();
    table.string('indicacao_uso')
    table.string('armazenamento')
    table.string('informacoes_nutricionais')
    table.string('ingredientes')
    table.string('validade')
    table.decimal('preco')
    table.integer('categoria_id')
      .notNullable()
      .references('ID')
      .inTable('CATEGORIA_PRODUTOS')
  });
};

export async function down(knex: Knex) {
  return knex.schema.dropTable('PRODUTOS');
};