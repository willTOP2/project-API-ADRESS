import { getCustomRepository } from 'typeorm';
import Bairro from '../typeorm/entities/Bairro';
import { BairroRepository } from '../typeorm/repositories/BairroRepository';

export class ListBairroService {
  public async execute(): Promise<Bairro[]> {
    const bairroRepository = getCustomRepository(BairroRepository);

    const bairro = await bairroRepository.find();

    return bairro;
  }
}
