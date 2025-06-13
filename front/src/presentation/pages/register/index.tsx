// 📁 src/presentation/pages/Register/index.tsx
import { useRegisterViewModel } from './view-model';
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  Text,
  StyledLink,
} from './styles';

export function RegisterPage() {
  const { user, handleChange, handleSubmit } = useRegisterViewModel();

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <Input name="name" onChange={handleChange} placeholder="Nome completo" />
        <Input name="cpf" onChange={handleChange} placeholder="CPF" />
        <Input name="email" type="email" onChange={handleChange} placeholder="Email" />
        <Input name="phone" onChange={handleChange} placeholder="Telefone" />
        <Input name="birthdate" type="date" onChange={handleChange} />
        <Input name="password" type="password" onChange={handleChange} placeholder="Senha" />
        <Input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          placeholder="Confirmar senha"
        />
        <Button type="submit">Cadastrar</Button>
        <Text>
          Já tem uma conta? <StyledLink to="/">Fazer login</StyledLink>
        </Text>
      </Form>
    </Container>
  );
}


