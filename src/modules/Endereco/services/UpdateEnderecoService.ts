import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Endereco from '../typeorm/entities/Endereco';
import { EnderecoRepository } from '../typeorm/repositories/EnderecoRepository';

interface IRequest {
  codigoEndereco: string;
  rua: string;
  status: number;
  cep: string;
  complemento: string;
  numero: number;
}

class UpdateEnderecoService {
  public async execute({
    codigoEndereco,
    rua,
    cep,
    status,
    numero,
    complemento,
  }: IRequest): Promise<Endereco> {
    const enderecoRepository = getCustomRepository(EnderecoRepository);

    const endereco = await enderecoRepository.findOne(codigoEndereco);

    if (endereco == undefined) {
      throw new AppError('Esse id não existe.');
    }

    endereco.rua = rua;
    endereco.status = status;
    endereco.complemento = complemento;
    endereco.cep = cep;
    endereco.numero = numero;

    await enderecoRepository.save(endereco);

    return endereco;
  }
}

export default UpdateEnderecoService;
