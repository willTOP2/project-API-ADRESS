import ShowMuncipioService from '@modules/Municipio/services/ShowMunicipioService';
import { Request, Response } from 'express';
import CreateBairroService from '../service/CreateBairroService';
import { ListBairroService } from '../service/ListBairroService';
import ShowBairroService from '../service/ShowBairroService';
import UpdateBairroService from '../service/UpdateBairroService';

export default class BairroController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status, codigoMunicipio } = request.body;

    const createBairro = new CreateBairroService();

    const bairro = await createBairro.execute({
      nome,
      status,
      codigoMunicipio,
    });

    return response.json(bairro);
  }
  public async index(request: Request, response: Response): Promise<Response> {
    const listBairro = new ListBairroService();
    const { codigoMunicipio } = request.query;

    const municipioBairro = new ShowMuncipioService();

    const showBairro = await municipioBairro.executeMunicipio({
      codigoMunicipio,
    });

    if (codigoMunicipio) {
      return response.json(showBairro);
    }

    const bairro = await listBairro.execute();

    return response.json(bairro);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { codigoBairro } = request.params;

    const showBairro = new ShowBairroService();

    const bairro = await showBairro.execute({ codigoBairro });

    return response.json(bairro);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, status } = request.body;
    const { codigoBairro } = request.params;

    const updateBairro = new UpdateBairroService();

    const bairro = await updateBairro.execute({
      codigoBairro,
      nome,
      status,
    });

    return response.json(bairro);
  }
}
