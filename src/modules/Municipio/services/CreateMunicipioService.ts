import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Municipio from '../typeorm/entities/Municipio';
import { MunicipioRepository } from '../typeorm/repositories/MunicipioRepository';

interface IRequest {
  nome: string;
  status: number;
  codigoUF: string;
}

class CreateMunicipioService {
  public async execute({
    nome,
    status,
    codigoUF,
  }: IRequest): Promise<Municipio> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = municipioRepository.create({
      nome,
      status,
      codigoUF,
    });

    await municipioRepository.save(municipio);

    return municipio;
  }
}

export default CreateMunicipioService;
