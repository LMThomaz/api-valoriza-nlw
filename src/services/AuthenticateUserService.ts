import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) throw new Error('Email/Password incorrect');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error('Email/Password incorrect');

    const token = sign({ email }, 'c4d0af61a48b395ea65c0ca599b17227', {
      subject: user.id,
      expiresIn: '1d',
    });

    return token;
  }
}
