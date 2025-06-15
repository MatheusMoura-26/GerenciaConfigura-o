import { useLoginViewModel } from './view-model'
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  Text,
  StyledLink,
} from './styles'

export function LoginPage() {
  const { form, handleChange, handleSubmit, error } = useLoginViewModel()

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
        <Button type="submit">Entrar</Button>
        <Text>
          Não tem uma conta? <StyledLink to="/register">Criar conta</StyledLink>
        </Text>
      </Form>
    </Container>
  )
}
