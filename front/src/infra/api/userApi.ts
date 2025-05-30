import { api } from './axios';
import { User } from '../../domain/entities/User';

export const UserRepository = {
  async create(user: User & { confirmPassword: string }) {
    return api.post('/users', {
      name: user.name,
      cpf: user.cpf,
      email: user.email,
      password: user.password,
      phone: user.phone,
      birthdate: `${user.birthdate}T00:00:00Z`,
      account: {
        id: 0,
        userId: 0,
        number: '',
        agency: '',
        balance: 0,
        limit: 0,
      },
      card: {
        id: 0,
        userId: 0,
        number: '',
        limit: 0,
      },
      limitManagement: {
        id: 0,
        userId: 0,
        maxLimitAllowed: 0,
        requestedIncrease: 0,
      },
      news: [],
    });
  },
};
