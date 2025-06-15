import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Title,
  Section,
  UserName,
  Placeholder,
  ActionButtons,
  Label,
  Value,
  Row,
} from './styles'
import { useDashboardViewModel } from './view-model'

export function DashboardPage() {
  const navigate = useNavigate()
  const { user, loading } = useDashboardViewModel()

  return (
    <Container>
      <UserName>Bem-vindo(a), {user?.name ?? 'Usuário'}!</UserName>

      <Section>
        <h1>Acesso Rápido</h1>

        <ActionButtons>
          <button onClick={() => navigate('/user-profile')}>
            Perfil do Usuário
          </button>
          <button onClick={() => navigate('/account-card')}>
            Conta e Cartão
          </button>
          <button onClick={() => navigate('/financial-goals')}>
            Meta Financeira
          </button>
        </ActionButtons>
      </Section>

      <Section>
        <h2>Resumo</h2>

        {loading || !user ? (
          <Placeholder>Carregando dados...</Placeholder>
        ) : (
          <>
            <Row>
              <Label>Nome:</Label>
              <Value>{user.name}</Value>
            </Row>
            <Row>
              <Label>Telefone:</Label>
              <Value>{user.phone}</Value>
            </Row>
            <Row>
              <Label>Meta Financeira:</Label>
              <Value>
                R${' '}
                {user.financialGoal?.goalAmount?.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                }) ?? '0,00'}
              </Value>
            </Row>
            <Row>
              <Label>Número do Cartão:</Label>
              <Value>{user.card?.number ?? '---'}</Value>
            </Row>
          </>
        )}
      </Section>
    </Container>
  )
}
