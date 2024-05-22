import { Request, Response } from 'express';

import CreatePessoaService from '../services/CreatePessoaService';
import { ListPessoaService } from '../services/ListPessoaService';
import ShowPessoaService from '../services/ShowPessoaService';
import UpdatePessoaService from '../services/UpdatePessoaService';

export default class PessoaController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { nome, status, idade, login, senha, sobrenome } = request.body;

    const createPessoa = new CreatePessoaService();

    const pessoa = await createPessoa.execute({
      nome,
      status,
      idade,
      login,
      senha,
      sobrenome,
    });

    return response.json(pessoa);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listPessoa = new ListPessoaService();
    const pessoa = await listPessoa.execute();

    return response.json(pessoa);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { codigoPessoa } = request.params;

    const showPessoa = new ShowPessoaService();

    const pessoa = await showPessoa.execute({ codigoPessoa });

    return response.json(pessoa);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { nome, status, idade, login, senha, sobrenome } = request.body;
    const { codigoPessoa } = request.params;

    const updatePessoa = new UpdatePessoaService();

    const pessoa = await updatePessoa.execute({
      codigoPessoa,
      nome,
      status,
      idade,
      login,
      senha,
      sobrenome,
    });

    return response.json(pessoa);
  }
}
