import { User } from '../entities/User';
import { UserRepository } from '../../infra/api/userApi';

export async function CreateUser(user: User) {
  return await UserRepository.create(user);
}
