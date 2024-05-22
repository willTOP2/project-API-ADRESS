import { getCustomRepository } from 'typeorm';
import UF from '../typeorm/entities/UF';
import { UFRepository } from '../typeorm/repositories/UFRepository';

export class ListUFService {
  public async execute(): Promise<UF[]> {
    const ufRepository = getCustomRepository(UFRepository);

    const uf = await ufRepository.find();

    return uf;
  }
}
