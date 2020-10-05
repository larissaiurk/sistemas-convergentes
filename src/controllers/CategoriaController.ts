import { Request, Response } from 'express';
import knex from './../database/connections';

class CategoriaController {
  async index (request: Request, response: Response) {
    const categorias = await knex('CATEGORIA_PRODUTOS').select('*');
    return response.json(categorias);
  }
}
export default new CategoriaController();