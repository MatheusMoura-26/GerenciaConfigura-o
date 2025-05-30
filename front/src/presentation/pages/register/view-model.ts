import { useState } from 'react';
import { UserRepository } from '../../../infra/api/userApi';
import { User } from '../../../domain/entities/User';

export function useRegisterViewModel() {
    const [user, setUser] = useState<User>({
        name: '',
        cpf: '',
        email: '',
        phone: '',
        birthdate: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            await UserRepository.create(user);
            alert('Usuário cadastrado com sucesso!');
        } catch (error: any) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário.');
        }
    };

    return {
        user,
        handleChange,
        handleSubmit,
    };
}
