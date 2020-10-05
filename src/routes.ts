import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ProductsController from './controllers/ProductsController';
import ClientesController from './controllers/ClientesController';

const routes = express.Router();
const upload = multer({ storage: multerConfig.storage, fileFilter: multerConfig.fileFilter });

var uploadSingle = upload.single('image');

routes.post('/produtos',
  (req, res) => {
    uploadSingle(req, res, (err: any) => {
      if (err) return res.status(500).send({ success: false, message: err.message })
      ProductsController.create(req, res);
    })
  });

routes.get('/produtos', ProductsController.index);
routes.put('/produtos/:id', ProductsController.update);
routes.delete('/produtos/:id', ProductsController.delete);

routes.get('/clientes', ClientesController.index);
routes.post('/clientes', ClientesController.create);
routes.put('/clientes/:id', ClientesController.update); 
routes.delete('/clientes/:id', ClientesController.delete);

routes.get('/produtos/quantidade-categoria', ProductsController.qtdProdutosPorCategoria);

export default routes;
