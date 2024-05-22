import UF from '@modules/UF/typeorm/entities/UF';
import {
  EntityRepository,
  Repository,
  createQueryBuilder,
  getConnection,
} from 'typeorm';
import Endereco from '../entities/Endereco';

@EntityRepository(Endereco)
export class EnderecoRepository extends Repository<Endereco> {}
