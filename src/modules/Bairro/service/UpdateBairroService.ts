import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Bairro from '../typeorm/entities/Bairro';
import { BairroRepository } from '../typeorm/repositories/BairroRepository';

interface IRequest {
  codigoBairro: string;
  nome: string;

  status: number;
}

class UpdateBairroService {
  public async execute({
    codigoBairro,
    nome,

    status,
  }: IRequest): Promise<Bairro> {
    const bairroRepository = getCustomRepository(BairroRepository);

    const bairro = await bairroRepository.findOne(codigoBairro);
    //const ufName = await municipioRepository.findByName(nome);

    if (bairro == undefined) {
      throw new AppError('Esse id não existe.');
    }

    // if (ufName && nome != municipio?.nome) {
    //    throw new AppError('Ja existe uf com este nome');
    //   }

    bairro.nome = nome;

    bairro.status = status;

    await bairroRepository.save(bairro);

    return bairro;
  }
}

export default UpdateBairroService;
