import { EntityRepository, Repository } from 'typeorm';
import Pessoa from '../entities/Pessoa';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {}
