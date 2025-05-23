import styled from 'styled-components';

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

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.section`
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
  }
`;

const Placeholder = styled.p`
  color: #64748b;
  font-size: 1rem;
`;
