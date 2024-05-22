import bairroRouter from '@modules/Bairro/routes/Bairro.routes';
import enderecoRouter from '@modules/Endereco/routes/Endereco.routes';
import municipioRouter from '@modules/Municipio/routes/Municipio.routes';
import pessoaRouter from '@modules/Pessoa/routes/Pessoa.routes';
import ufRouter from '@modules/UF/routes/UF.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/uf', ufRouter);
routes.use('/municipio', municipioRouter);
routes.use('/bairro', bairroRouter);
routes.use('/pessoa', pessoaRouter);
routes.use('/endereco', enderecoRouter);

export default routes;
