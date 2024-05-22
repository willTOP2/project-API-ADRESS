import { getCustomRepository } from 'typeorm';
import Pessoa from '../typeorm/entities/Pessoa';
import { PessoaRepository } from '../typeorm/repositories/PessoaRepository';

export class ListPessoaService {
  public async execute(): Promise<Pessoa[]> {
    const pessoaRepository = getCustomRepository(PessoaRepository);

    const pessoa = await pessoaRepository.find();

    return pessoa;
  }
}
