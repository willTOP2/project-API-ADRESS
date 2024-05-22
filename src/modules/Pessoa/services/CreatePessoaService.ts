import Endereco from '@modules/Endereco/typeorm/entities/Endereco';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Pessoa from '../typeorm/entities/Pessoa';
import { PessoaRepository } from '../typeorm/repositories/PessoaRepository';

interface IRequest {
  nome: string;
  sobrenome: string;
  login: string;
  senha: string;
  status: number;
  idade: number;
}

class CreatePessoaService {
  public async execute({
    nome,
    sobrenome,
    idade,
    login,
    senha,
    status,
  }: IRequest): Promise<Pessoa> {
    const pessoaRepository = getCustomRepository(PessoaRepository);
    const pessoa = pessoaRepository.create({
      nome,
      sobrenome,
      login,
      senha,
      idade,
      status,
    });

    await pessoaRepository.save(pessoa);

    return pessoa;
  }
}

export default CreatePessoaService;
