import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UF from '../typeorm/entities/UF';
import { UFRepository } from '../typeorm/repositories/UFRepository';

interface IRequest {
  codigoUF: string;
  nome: string;
  sigla: string;
  status: number;
}

class UpdateUFService {
  public async execute({
    codigoUF,
    nome,
    sigla,
    status,
  }: IRequest): Promise<UF> {
    const ufRepository = getCustomRepository(UFRepository);

    const uf = await ufRepository.findOne(codigoUF);
    const ufName = await ufRepository.findByName(nome);
    const ufExists = await ufRepository.findBySigla(sigla);

    if (uf == undefined) {
      throw new AppError('Esse id não existe.');
    }

    if (ufExists && sigla != uf?.sigla) {
      throw new AppError('Ja existe sigla com este nome');
    }
    if (ufName && nome != uf?.nome) {
      throw new AppError('Ja existe uf com este nome');
    }

    uf.nome = nome;
    uf.sigla = sigla;
    uf.status = status;

    await ufRepository.save(uf);

    return uf;
  }
}

export default UpdateUFService;
