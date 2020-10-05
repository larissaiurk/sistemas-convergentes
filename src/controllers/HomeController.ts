import { Request, Response } from 'express';
import knex from './../database/connections';

class HomeController {
  async index (request: Request, response: Response) {
    return response.json({Message: 'sucesso!!!'});
  }
}
export default new HomeController();