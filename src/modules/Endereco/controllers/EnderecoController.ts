import { Request, Response } from 'express';
import CreateEnderecoService from '../services/CreateEnderecoService';
import { ListEnderecoService } from '../services/ListEnderecoService';
import ShowEnderecoService from '../services/ShowEnderecoService';
import UpdateEnderecoService from '../services/UpdateEnderecoService';

export default class EnderecoController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      rua,
      status,
      cep,
      complemento,
      codigoBairro,
      codigoPessoa,
      numero,
    } = request.body;

    const createEndereco = new CreateEnderecoService();

    const endereco = await createEndereco.execute({
      rua,
      status,
      cep,
      complemento,
      codigoBairro,
      codigoPessoa,

      numero,
    });

    return response.json(endereco);
  }
  public async index(request: Request, response: Response): Promise<Response> {
    const listEndereco = new ListEnderecoService();

    const endereco = await listEndereco.execute();

    return response.json(endereco);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { codigoEndereco } = request.params;

    const showEndereco = new ShowEnderecoService();

    const endereco = await showEndereco.execute({ codigoEndereco });

    return response.json(endereco);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const {
      rua,
      status,
      cep,
      complemento,

      numero,
    } = request.body;
    const { codigoEndereco } = request.params;

    const updateEndereco = new UpdateEnderecoService();

    const endereco = await updateEndereco.execute({
      rua,
      status,
      cep,
      complemento,
      codigoEndereco,

      numero,
    });

    return response.json(endereco);
  }
}
