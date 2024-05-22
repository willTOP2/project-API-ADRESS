import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Endereco from '../typeorm/entities/Endereco';
import { EnderecoRepository } from '../typeorm/repositories/EnderecoRepository';

interface IRequest {
  rua: string;
  cep: string;
  complemento: string;
  status: number;
  numero: number;
  codigoPessoa: string;
  codigoBAirro: string;
}

class CreateEnderecoService {
  public async execute({
    rua,
    status,
    cep,
    complemento,
    codigoBairro,
    codigoPessoa,
    numero,
  }: IRequest): Promise<Endereco> {
    const enderecoRepository = getCustomRepository(EnderecoRepository);

    const endereco = enderecoRepository.create({
      rua,
      status,
      cep,
      complemento,
      numero,
      codigoBairro,
      codigoPessoa,
    });

    await enderecoRepository.save(endereco);

    return endereco;
  }
}

export default CreateEnderecoService;
