import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('CATEGORIA_PRODUTOS').insert([
    { nome: 'Pães Especiais', solucao_id: 1 },
    { nome: 'Pães - Saúde, Grãos e Fibras', solucao_id: 1 },
    { nome: 'Panetones', solucao_id: 1 },
    { nome: 'Salgados', solucao_id: 1 },
    { nome: 'Complementos', solucao_id: 1 },
    { nome: 'Bolos Tradicionais', solucao_id: 2 },
    { nome: 'Cakes', solucao_id: 2 },
    { nome: 'Confeitaria', solucao_id: 2 },
    { nome: 'Geléias de Brilho', solucao_id: 2 },
    { nome: 'Recheios', solucao_id: 2 },
  ]);
};