import { getCustomRepository } from 'typeorm';
import Municipio from '../typeorm/entities/Municipio';
import { MunicipioRepository } from '../typeorm/repositories/MunicipioRepository';

export class ListMunicipioService {
  public async execute(): Promise<Municipio[]> {
    const municipioRepository = getCustomRepository(MunicipioRepository);

    const municipio = await municipioRepository.find();

    return municipio;
  }
}
