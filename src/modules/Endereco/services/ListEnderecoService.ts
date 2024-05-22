import { getCustomRepository } from 'typeorm';
import Endereco from '../typeorm/entities/Endereco';
import { EnderecoRepository } from '../typeorm/repositories/EnderecoRepository';

export class ListEnderecoService {
  public async execute(): Promise<Endereco[]> {
    const enderecoRepository = getCustomRepository(EnderecoRepository);

    const endereco = await enderecoRepository.find();

    return endereco;
  }
}
