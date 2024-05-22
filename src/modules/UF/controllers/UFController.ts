import { Request, Response } from 'express';
import CreateUFService from '../services/CreateUFService';
import ListQueryUFService from '../services/ListQueryUFService';
import { ListUFService } from '../services/ListUFService';
import ShowUFService from '../services/ShowUFService';
import UpdateUFService from '../services/UpdateUFService';

export default class UFController {
  public async index(request: Request, response: Response): Promise<Response> {
    const indexUF = new ListUFService();
    const UFs = await indexUF.execute();
    const { codigoUF } = request.query;
    const { sigla } = request.query;

    const ufQuery = new ListQueryUFService();

    if (sigla && codigoUF == undefined) {
      const buscaUF = await ufQuery.execute({ sigla, codigoUF });
      return response.json(buscaUF);
    }
    if (sigla && codigoUF != undefined) {
      const showUF = new ShowUFService();

      const UFShow = await showUF.execute({ codigoUF });

      return response.json(UFShow);
    }

    return response.json(UFs);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { codigoUF } = request.params;

    const showUF = new ShowUFService();

    const UF = await showUF.execute({ codigoUF });

    return response.json(UF);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, sigla, status } = request.body;

    const createUF = new CreateUFService();

    const uf = await createUF.execute({
      nome,
      sigla,
      status,
    });

    return response.json(uf);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, sigla, status } = request.body;
    const { codigoUF } = request.params;

    const updateUF = new UpdateUFService();

    const uf = await updateUF.execute({
      codigoUF,
      nome,
      sigla,
      status,
    });

    return response.json(uf);
  }
}
