import Municipio from '@modules/Municipio/typeorm/entities/Municipio';
import AppError from '@shared/errors/AppError';
import { createQueryBuilder, getCustomRepository } from 'typeorm';
import UF from '../typeorm/entities/UF';
import { UFRepository } from '../typeorm/repositories/UFRepository';

interface IRequest {
  codigoUF: string;
}

class ShowUFService {
  public async execute({ codigoUF }: IRequest): Promise<UF | undefined> {
    const ufRepository = getCustomRepository(UFRepository);

    const uf = await ufRepository.findOne(codigoUF);

    if (uf == undefined) {
      throw new AppError('Esse id não existe.');
    }

    return uf;
  }
}

export default ShowUFService;
