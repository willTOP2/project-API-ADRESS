import Endereco from '@modules/Endereco/typeorm/entities/Endereco';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Bairro from '@modules/Bairro/typeorm/entities/Bairro';
@Entity('pessoa')
class Pessoa {
  @PrimaryGeneratedColumn('uuid', { name: 'codigo_pessoa' })
  codigoPessoa: string;

  @Column('varchar')
  nome: string;

  @Column('varchar')
  sobrenome: string;

  @Column('varchar')
  login: string;

  @Column('varchar')
  senha: string;

  @Column('int')
  idade: number;

  @Column('int')
  status: number;

  @OneToMany(() => Endereco, endereco => endereco.pessoa, { eager: true })
  enderecos: Endereco[];
}
export default Pessoa;
