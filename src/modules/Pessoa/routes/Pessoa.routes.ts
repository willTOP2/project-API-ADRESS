import { Router } from 'express';
import PessoaController from '../controllers/PessoaController';

const pessoaRouter = Router();

const pessoaController = new PessoaController();

pessoaRouter.post('/', pessoaController.create);
pessoaRouter.get('/', pessoaController.index);
pessoaRouter.get('/:codigoPessoa', pessoaController.show);
pessoaRouter.put('/:codigoPessoa', pessoaController.update);

export default pessoaRouter;
