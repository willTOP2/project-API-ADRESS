import Bairro from '@modules/Bairro/typeorm/entities/Bairro';
import Endereco from '@modules/Endereco/typeorm/entities/Endereco';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UF from '../../../UF/typeorm/entities/UF';

@Entity('municipio')
class Municipio {
  @PrimaryGeneratedColumn('uuid', { name: 'codigo_municipio' })
  codigoMunicipio: string;

  @Column('varchar')
  nome: string;

  @Column('int')
  status: number;

  @Column('uuid', { name: 'codigo_uf' })
  codigoUF: string;

  @OneToMany(() => Bairro, bairro => bairro.municipio)
  bairros: Bairro[];

  //@OneToMany(() => Endereco, endereco => endereco.municipio, { eager: true })
  //enderecos: Endereco[];

  @ManyToOne(type => UF, { eager: true })
  @JoinColumn({
    name: 'codigo_uf',
    referencedColumnName: 'codigoUF',
  })
  uf: UF;
}

export default Municipio;
