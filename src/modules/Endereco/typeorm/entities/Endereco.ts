import Bairro from '@modules/Bairro/typeorm/entities/Bairro';
import Pessoa from '@modules/Pessoa/typeorm/entities/Pessoa';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('endereco')
class Endereco {
  @PrimaryGeneratedColumn('uuid', { name: 'codigo_endereco' })
  codigoEndereco: string;

  @Column('varchar', { name: 'nome_rua' })
  rua: string;

  @Column('varchar')
  cep: string;

  @Column('varchar')
  complemento: string;

  @Column('int')
  numero: number;

  @Column('int')
  status: number;

  @Column('uuid', { name: 'codigo_bairro' })
  codigoBairro: string;

  @Column('uuid', { name: 'codigo_pessoa' })
  codigoPessoa: string;

  @ManyToOne(type => Pessoa)
  @JoinColumn({
    name: 'codigo_pessoa',
    referencedColumnName: 'codigoPessoa',
  })
  pessoa: Pessoa;

  @ManyToOne(type => Bairro, { eager: true })
  @JoinColumn({
    name: 'codigo_bairro',
    referencedColumnName: 'codigoBairro',
  })
  bairro: Bairro;
}
export default Endereco;
