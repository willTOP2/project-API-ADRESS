import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Pessoa from '../typeorm/entities/Pessoa';
import { PessoaRepository } from '../typeorm/repositories/PessoaRepository';

interface IRequest {
  codigoPessoa: string;
}

class ShowPessoaService {
  public async execute({
    codigoPessoa,
  }: IRequest): Promise<Pessoa | undefined> {
    const pessoaRepository = getCustomRepository(PessoaRepository);

    const pessoa = await pessoaRepository.findOne(codigoPessoa);

    if (pessoa == undefined) {
      throw new AppError('Esse id não existe.');
    }

    return pessoa;
  }
}

export default ShowPessoaService;
