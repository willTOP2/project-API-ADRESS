import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UF from '../typeorm/entities/UF';
import { UFRepository } from '../typeorm/repositories/UFRepository';

interface IRequest {
  nome: string;
  sigla: string;
  status: number;
}

class CreateUFService {
  public async execute({ nome, sigla, status }: IRequest): Promise<UF> {
    const ufRepository = getCustomRepository(UFRepository);
    const ufName = await ufRepository.findByName(nome);
    const ufExists = await ufRepository.findBySigla(sigla);

    if (ufExists) {
      throw new AppError('Ja existe sigla com este nome');
    }
    if (ufName) {
      throw new AppError('Ja existe uf com este nome');
    }

    const uf = ufRepository.create({
      nome,
      sigla,
      status,
    });

    await ufRepository.save(uf);

    return uf;
  }
}

export default CreateUFService;
