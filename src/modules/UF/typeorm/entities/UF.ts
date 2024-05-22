import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Municipio from '../../../Municipio/typeorm/entities/Municipio';

@Entity('estados')
class UF {
  @PrimaryGeneratedColumn('uuid', { name: 'codigo_uf' })
  codigoUF: string;

  @Column('varchar')
  nome: string;

  @Column('varchar')
  sigla: string;

  @OneToMany(() => Municipio, municipio => municipio.uf)
  municipios: Municipio[];

  @Column('int')
  status: number;
}

export default UF;
