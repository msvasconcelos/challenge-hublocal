import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../models/User';

interface Request {
  name: string;
  email: string;
  senha: string;
}

export default class CreateUserService {
  public async execute({ name, email, senha }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const checkUserExist = await userRepository.findOne({ where: { email } });

    if (checkUserExist) {
      throw Error('Email do usuário já está sendo usado.');
    }

    const hashedSenha = await hash(senha, 7);

    const user = userRepository.create({
      name,
      email,
      senha: hashedSenha,
    });

    await userRepository.save(user);

    return user;
  }
}
