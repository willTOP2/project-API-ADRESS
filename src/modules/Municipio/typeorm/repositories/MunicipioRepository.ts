import UF from '@modules/UF/typeorm/entities/UF';
import {
  EntityRepository,
  Repository,
  createQueryBuilder,
  getConnection,
} from 'typeorm';
import Municipio from '../entities/Municipio';

@EntityRepository(Municipio)
export class MunicipioRepository extends Repository<Municipio> {
  public async findById(codigoUF: string): Promise<Municipio | undefined> {
    const uf = this.findOne(codigoUF);

    return uf;
  }

  public async findByName(nome: string): Promise<Municipio | undefined> {
    const uf = this.findOne({
      where: {
        nome,
      },
    });

    return uf;
  }
  public async findBySigla(
    codigoMunicipio: string,
  ): Promise<Municipio | undefined> {
    const ufs = this.findOne({
      where: {
        codigoMunicipio,
      },
    });

    return ufs;
  }
}
