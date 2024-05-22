import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Municipio from '../typeorm/entities/Municipio';
import { MunicipioRepository } from '../typeorm/repositories/MunicipioRepository';

interface IRequest {
  codigoUF: string;
  codigoMunicipio: string;
  nome: string;
}

class ShowMuncipioService {
  public async executeMunicipioNome({
    nome,
  }: IRequest): Promise<Municipio | undefined> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = await municipioRepository.findByName(nome);

    if (municipio == undefined) {
      throw new AppError('Esse nome não existe.');
    }

    return municipio;
  }

  public async executeMunicipio({
    codigoMunicipio,
  }: IRequest): Promise<Municipio | undefined> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = await municipioRepository.findOne(codigoMunicipio);

    if (municipio == undefined) {
      throw new AppError('Esse id não existe.');
    }

    return municipio;
  }
}

export default ShowMuncipioService;
