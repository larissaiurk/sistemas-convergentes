import { Request, Response } from 'express';
import knex from './../database/connections';

class SolucoesController {
  async index (request: Request, response: Response) {
    const solucoes = await knex('SOLUCOES_PRODUTOS').select('*');
    return response.json(solucoes);
  }
}
export default new SolucoesController();