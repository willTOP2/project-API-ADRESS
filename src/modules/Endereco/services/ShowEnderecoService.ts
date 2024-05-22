import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Endereco from '../typeorm/entities/Endereco';
import { EnderecoRepository } from '../typeorm/repositories/EnderecoRepository';

interface IRequest {
  codigoEndereco: string;
}

class ShowEnderecoService {
  public async execute({
    codigoEndereco,
  }: IRequest): Promise<Endereco | undefined> {
    const enderecoRepository = getCustomRepository(EnderecoRepository);

    const endereco = await enderecoRepository.findOne(codigoEndereco);

    if (endereco == undefined) {
      throw new AppError('Esse id não existe.');
    }

    return endereco;
  }
}

export default ShowEnderecoService;
