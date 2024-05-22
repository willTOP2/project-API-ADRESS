import { Router } from 'express';
import UFController from '../controllers/UFController';

const ufRouter = Router();

const ufController = new UFController();

ufRouter.post('/', ufController.create);
ufRouter.get('/', ufController.index);
ufRouter.get('/:codigoUF', ufController.show);
ufRouter.put('/:codigoUF', ufController.update);

export default ufRouter;
