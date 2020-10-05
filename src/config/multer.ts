import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import crypto from 'crypto';
import { Request } from 'express';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', 'uploads', 'produtos'),
    filename(request: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
  fileFilter(req: Request, file: Express.Multer.File, callback: FileFilterCallback) { 
    const extension = path.extname(file.originalname).toLowerCase();
    const  tipos = ['.png', '.jpg', '.jpeg', '.svg'];

    if (tipos.indexOf(extension) === -1) { 
      callback({name: 'Erro:', message: `Erro: extensão do arquivo (${extension}) inválido. Extensões suportadas: png, svg e jpg.`});
    }
    callback(null, true);
  },
}