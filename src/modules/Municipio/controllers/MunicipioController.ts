import { Request, Response } from 'express';
import CreateMunicipioService from '../services/CreateMunicipioService';
import { ListMunicipioService } from '../services/ListMunicipioService';
import ShowUFService from '../../UF/services/ShowUFService';

import ShowMuncipioService from '../services/ShowMunicipioService';
import ListMuncipioUFService from '../services/ListMunicipioUFService';
import UpdateMunicipioService from '../services/UpdateMuncipioService';

export default class MunicipioController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status, codigoUF } = request.body;

    const createMunicipio = new CreateMunicipioService();

    const municipio = await createMunicipio.execute({
      nome,
      status,
      codigoUF,
    });

    return response.json(municipio);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { codigoUF } = request.query;
    const { nome } = request.query;
    const indexMunicipio = new ListMunicipioService();

    const ShowMunicipio = new ShowMuncipioService();
    const municipio = await indexMunicipio.execute();

    const indexUFMunicipio = new ShowUFService();
    const ufMunicipio = await indexUFMunicipio.execute({ codigoUF });

    if (codigoUF) {
      return response.json(ufMunicipio);
    }
    if (nome) {
      const nomeMunicipio = await ShowMunicipio.executeMunicipioNome({ nome });
      return response.json(nomeMunicipio);
    }
    return response.json(municipio);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { codigoMunicipio } = request.params;

    const showMunicipio = new ShowMuncipioService();

    const municipio = await showMunicipio.executeMunicipio({ codigoMunicipio });

    return response.json(municipio);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;
    const { codigoMunicipio } = request.params;

    const updateMunicipio = new UpdateMunicipioService();

    const municipio = await updateMunicipio.execute({
      codigoMunicipio,
      nome,
      status,
    });

    return response.json(municipio);
  }
}
