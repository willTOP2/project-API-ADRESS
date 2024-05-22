import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Bairro from '../typeorm/entities/Bairro';
import { BairroRepository } from '../typeorm/repositories/BairroRepository';

interface IRequest {
  nome: string;
  status: number;
  codigoMunicipio: string;
}

class CreateBairroService {
  public async execute({
    nome,
    status,
    codigoMunicipio,
  }: IRequest): Promise<Bairro> {
    const bairroRepository = getCustomRepository(BairroRepository);

    const bairro = bairroRepository.create({
      nome,
      status,
      codigoMunicipio,
    });

    await bairroRepository.save(bairro);

    return bairro;
  }
}

export default CreateBairroService;
