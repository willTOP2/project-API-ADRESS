import { Router } from 'express';
import BairroController from '../controllers/BairroController';

const bairroRouter = Router();

const bairroController = new BairroController();

bairroRouter.post('/', bairroController.create);
bairroRouter.get('/:codigoBairro', bairroController.show);
bairroRouter.put('/:codigoBairro', bairroController.update);
bairroRouter.get('/', bairroController.index);

export default bairroRouter;
