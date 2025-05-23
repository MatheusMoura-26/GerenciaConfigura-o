import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logando com: ${form.email}`);
    navigate('/dashboard'); // redireciona após "login"
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Input name="password" type="password" placeholder="Senha" onChange={handleChange} />
        <Button type="submit">Entrar</Button>

        <Text>
          Não tem uma conta?{' '}
          <StyledLink to="/register">Criar conta</StyledLink>
        </Text>
      </Form>
    </Container>
  );
}

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
  background-color: #3b82f6;
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
