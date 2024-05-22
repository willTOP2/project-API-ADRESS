import {
  EntityRepository,
  Repository,
  createQueryBuilder,
  getConnection,
} from 'typeorm';
import Bairro from '../entities/Bairro';

@EntityRepository(Bairro)
export class BairroRepository extends Repository<Bairro> {}
