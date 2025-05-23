import { useState } from 'react';
import { CreateUser } from '../../domain/usecases/CreateUser';
import { User } from '../../domain/entities/User';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  const [user, setUser] = useState<User & { confirmPassword: string }>({
    name: '',
    cpf: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert('Senhas não coincidem!');
      return;
    }
    await CreateUser(user);
    alert('Usuário criado!');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>

        <Input name="name" onChange={handleChange} placeholder="Nome completo" />
        <Input name="cpf" onChange={handleChange} placeholder="CPF" />
        <Input name="email" type="email" onChange={handleChange} placeholder="Email" />
        <Input name="password" type="password" onChange={handleChange} placeholder="Senha" />
        <Input name="confirmPassword" type="password" onChange={handleChange} placeholder="Confirmar senha" />

        <Button type="submit">Cadastrar</Button>

        <Text>
          Já tem uma conta? <StyledLink to="/">Fazer login</StyledLink>
        </Text>
      </Form>
    </Container>
  );
}

// 🎨 Estilização
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8fafc;
  font-family: 'Inter', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #1e293b;
  font-weight: 600;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #cbd5e1;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 0.75rem;
`;

const Text = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #475569;
`;

const StyledLink = styled(Link)`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
