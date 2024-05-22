import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Endereco from '../typeorm/entities/Endereco';
import Pessoa from '../typeorm/entities/Pessoa';
import { EnderecoRepository } from '../typeorm/repositories/EnderecoRepository';
import { PessoaRepository } from '../typeorm/repositories/PessoaRepository';

interface IRequest {
  codigoPessoa: string;
  nome: string;
  status: number;
  sobrenome: string;
  login: string;
  senha: string;
  idade: number;
}

class UpdatePessoaService {
  public async execute({
    codigoPessoa,
    nome,
    sobrenome,
    login,
    senha,
    idade,
    status,
  }: IRequest): Promise<Pessoa> {
    const pessoaRepository = getCustomRepository(PessoaRepository);

    const pessoa = await pessoaRepository.findOne(codigoPessoa);

    if (pessoa == undefined) {
      throw new AppError('Esse id não existe.');
    }

    pessoa.idade;
    pessoa.login;
    pessoa.senha;
    pessoa.nome;
    pessoa.sobrenome;
    pessoa.status;

    await pessoaRepository.save(pessoa);

    return pessoa;
  }
}

export default UpdatePessoaService;
