import { Request, Response } from 'express';
import knex from './../database/connections';

class ClientesController {
  async index (request: Request, response: Response) {
    const clientes = await knex('CLIENTES').select('*');
    return response.json(clientes);
  }

  async create(request: Request, response: Response) {
    const { 
      image,
      nome, 
      sobrenome, 
      cpf, 
      data_nascimento, 
      celular,
      email,
      senha,
    } = request.body;

    const trx = await knex.transaction();

    const cliente = {
      image,
      nome, 
      sobrenome, 
      cpf, 
      data_nascimento, 
      celular,
      email,
      senha,
      ativo: true,
    }

    const insertedIds = await trx('CLIENTES').insert(cliente);

    await trx.commit();

    return response.status(200).json(`Cliente ${nome} criado com sucesso! ID: ${insertedIds}`);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { 
      image,
      celular,
      email, 
      senha,
    } = request.body;

    knex('CLIENTES')
      .where({id}) 
      .update({ 
        image,
        celular,
        email, 
        senha,
      })
      .then(u => response.status(!!u?200:404).json({success:!!u}))
      .catch(e => response.status(500).json(e));
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    knex('CLIENTES')
      .where({id}) 
      .update({ 
        ativo: false
      })
      .then(u => response.status(!!u?200:404).json({success:!!u}))
      .catch(e => response.status(500).json(e));  
  }  
}

export default new ClientesController();