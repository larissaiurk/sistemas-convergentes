import express from 'express';
import routes from './routes';
import path from 'path';
import { ipMiddleware } from './middlewares/ipMiddleware';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(ipMiddleware);

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads', 'produtos')));

import serverPort  from './resources/readConfiguration'; 

app.listen(serverPort.port(), () => {
  console.log('🚀️ Backend started 🚀️ ');
}); 


