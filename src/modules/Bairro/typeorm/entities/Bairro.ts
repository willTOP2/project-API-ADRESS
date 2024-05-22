import Endereco from '@modules/Endereco/typeorm/entities/Endereco';

import Municipio from '@modules/Municipio/typeorm/entities/Municipio';
import Pessoa from '@modules/Pessoa/typeorm/entities/Pessoa';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('bairro')
class Bairro {
  @PrimaryGeneratedColumn('uuid', { name: 'codigo_bairro' })
  codigoBairro: string;

  @Column('varchar')
  nome: string;

  @Column('uuid', { name: 'codigo_municipio' })
  codigoMunicipio: string;

  @OneToMany(() => Endereco, endereco => endereco.bairro)
  enderecos: Endereco[];

  @ManyToOne(type => Municipio, { eager: true })
  @JoinColumn({
    name: 'codigo_municipio',
    referencedColumnName: 'codigoMunicipio',
  })
  municipio: Municipio;

  @Column('int')
  status: number;
}

export default Bairro;
