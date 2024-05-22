import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UF from '../typeorm/entities/UF';
import { UFRepository } from '../typeorm/repositories/UFRepository';

interface IRequest {
  codigoUF: string;
  sigla: string;
}

class ListQueryUFService {
  public async execute({ codigoUF, sigla }: IRequest): Promise<UF | undefined> {
    const ufRepository = getCustomRepository(UFRepository);

    const uf = await ufRepository.findOne(codigoUF);
    const siglaUf = await ufRepository.findBySigla(sigla);

    if (uf == undefined) {
      throw new AppError('Esse id não existe.');
    }

    if (siglaUf == undefined) {
      throw new AppError('Essa sigla não existe.');
    }

    if (sigla) {
      return siglaUf;
    }

    return uf;
  }
}

export default ListQueryUFService;
