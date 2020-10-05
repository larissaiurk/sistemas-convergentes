import { Request, Response } from 'express';
import knex from './../database/connections';

class ProductsController {
  async index (request: Request, response: Response) {
    const produtos = await knex('PRODUTOS').select('*');

    const serializedProdutos = produtos.map(produto => {
      return {
        ...produto,
        image_url: `${process.env.SERVER_ENDPOINT}/uploads/${produto.image}`,
      }
    });

    return response.json(serializedProdutos);
  }
 
  async create(request: Request, response: Response) {
    
    const { 
      nome, 
      descricao, 
      indicacao_uso, 
      armazenamento, 
      informacoes_nutricionais,
      ingredientes,
      validade,
      preco, 
      categoria_id 
    } = request.body;

    const trx = await knex.transaction();

    const produto = {
      image: request.file.filename,
      nome, 
      descricao, 
      indicacao_uso, 
      armazenamento, 
      informacoes_nutricionais, 
      ingredientes,
      validade,
      preco, 
      categoria_id 
    }

    const insertedIds = await trx('PRODUTOS').insert(produto);

    await trx.commit();

    return response.status(200).json(`Produto ${nome} criado com sucesso! ID: ${insertedIds}`);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const { 
      image,
      descricao, 
      indicacao_uso, 
      armazenamento, 
      informacoes_nutricionais,
      ingredientes,
      validade,
      preco
    } = request.body;

    knex('PRODUTOS')
      .where({id}) 
      .update({ 
        image, 
        descricao, 
        indicacao_uso, 
        armazenamento,
        informacoes_nutricionais,
        ingredientes,
        validade,
        preco
      })
      .then(u => response.status(!!u?200:404).json({success:!!u}))
      .catch(e => response.status(500).json(e));
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    
    await knex('PRODUTOS').where('id', id).delete();

    return response.status(204).send();    
  }  

  async qtdProdutosPorCategoria (request: Request, response: Response) {

    const produtos = await knex('PRODUTOS').select('categoria_id');

    let quantidadePorCategoria = produtos.reduce(function (todasCategorias:any, idCategoria:any) { 

      if (idCategoria.categoria_id in todasCategorias) {
        todasCategorias[idCategoria.categoria_id]++;
      }
      else {
        todasCategorias[idCategoria.categoria_id] = 1;
      }
      return todasCategorias;

    }, {});
    
    response.json({resultado: quantidadePorCategoria});
  }
}

export default new ProductsController();