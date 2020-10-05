import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('SOLUCOES_PRODUTOS').insert([
    { nome: 'Panificação'},
    { nome: 'Confeitaria'},
  ]);
};