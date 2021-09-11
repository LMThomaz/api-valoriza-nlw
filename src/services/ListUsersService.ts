import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';

export class ListUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}
