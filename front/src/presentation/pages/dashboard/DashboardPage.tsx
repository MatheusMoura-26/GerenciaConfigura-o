import styled from 'styled-components';
import { Container, Title, Section, Placeholder } from './styles';

export function DashboardPage() {
  return (
    <Container>
      <Title>Bem-vindo ao Dashboard</Title>

      <Section>
        <h2>Cartões</h2>
        <Placeholder>Você ainda não adicionou cartões.</Placeholder>
      </Section>

      <Section>
        <h2>Metas financeiras</h2>
        <Placeholder>Você ainda não criou metas.</Placeholder>
      </Section>

      <Section>
        <h2>Notificações</h2>
        <Placeholder>Sem notificações no momento.</Placeholder>
      </Section>
    </Container>
  );
}


