import { api } from './axios';
import { User } from '../../domain/entities/User';

export const UserRepository = {
  async create(user: User) {
    return api.post('/users', user);
  },
};
