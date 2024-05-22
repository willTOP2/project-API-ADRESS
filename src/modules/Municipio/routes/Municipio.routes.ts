import { Router } from 'express';
import MunicipioController from '../controllers/MunicipioController';

const municipioRouter = Router();

const municipioController = new MunicipioController();

municipioRouter.post('/', municipioController.create);
municipioRouter.get('/:codigoMunicipio', municipioController.show);
municipioRouter.put('/:codigoMunicipio', municipioController.update);
municipioRouter.get('/', municipioController.index);

export default municipioRouter;
