import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Municipio from '../typeorm/entities/Municipio';
import { MunicipioRepository } from '../typeorm/repositories/MunicipioRepository';

interface IRequest {
  codigoMunicipio: string;
  nome: string;

  status: number;
}

class UpdateMunicipioService {
  public async execute({
    codigoMunicipio,
    nome,

    status,
  }: IRequest): Promise<Municipio> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = await municipioRepository.findOne(codigoMunicipio);
    //const ufName = await municipioRepository.findByName(nome);

    if (municipio == undefined) {
      throw new AppError('Esse id não existe.');
    }

    // if (ufName && nome != municipio?.nome) {
    //    throw new AppError('Ja existe uf com este nome');
    //   }

    municipio.nome = nome;

    municipio.status = status;

    await municipioRepository.save(municipio);

    return municipio;
  }
}

export default UpdateMunicipioService;
