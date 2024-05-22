import { EntityRepository, Repository } from 'typeorm';
import UF from '../entities/UF';

@EntityRepository(UF)
export class UFRepository extends Repository<UF> {
  public async findBySigla(sigla: string): Promise<UF | undefined> {
    const uf = this.findOne({
      where: {
        sigla,
      },
    });

    return uf;
  }

  public async findByName(nome: string): Promise<UF | undefined> {
    const uf = this.findOne({
      where: {
        nome,
      },
    });

    return uf;
  }

  public async findById(codigoUF: string): Promise<UF | undefined> {
    const uf = this.findOne({
      where: {
        codigoUF,
      },
    });

    return uf;
  }
}
