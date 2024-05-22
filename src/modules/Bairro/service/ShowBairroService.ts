import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Bairro from '../typeorm/entities/Bairro';
import { BairroRepository } from '../typeorm/repositories/BairroRepository';

interface IRequest {
  codigoBairro: string;
}

class ShowBairroService {
  public async execute({
    codigoBairro,
  }: IRequest): Promise<Bairro | undefined> {
    const bairroRepository = getCustomRepository(BairroRepository);

    const bairro = await bairroRepository.findOne(codigoBairro);

    if (codigoBairro == undefined) {
      throw new AppError('Esse id não existe.');
    }

    return bairro;
  }
}

export default ShowBairroService;
