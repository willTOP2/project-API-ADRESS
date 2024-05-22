import { Router } from 'express';
import EnderecoController from '../controllers/EnderecoController';

const enderecoRouter = Router();

const enderecoController = new EnderecoController();

enderecoRouter.post('/', enderecoController.create);
enderecoRouter.get('/', enderecoController.index);
enderecoRouter.get('/:codigoEndereco', enderecoController.show);
enderecoRouter.put('/:codigoEndereco', enderecoController.update);

export default enderecoRouter;
