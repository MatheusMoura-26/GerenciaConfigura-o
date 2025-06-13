import { useDashboardViewModel } from './view-model'
import {
  DashboardContainer,
  MainContent,
  Title,
  Card,
  NewsList,
  NewsItem,
} from './styles'
import { Sidebar } from '../../components/sideBar'

export function DashboardPage() {
  const { user } = useDashboardViewModel()

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Title>Bem-vindo, {user?.name}!</Title>

        <Card>
          <h3>Saldo da conta</h3>
          <p>R$ {user?.account?.balance ?? 0}</p>
        </Card>

        <Card>
          <h3>Limite disponível do cartão</h3>
          <p>R$ {user?.card?.limit ?? 0}</p>
        </Card>

        {user?.financialGoal && (
          <Card>
            <h3>Meta financeira</h3>
            <p>
              {user.financialGoal.name}: R$ {user.financialGoal.savedAmount} / R$ {user.financialGoal.goalAmount}
            </p>
          </Card>
        )}

        <Card>
          <h3>Notícias recentes</h3>
          <NewsList>
            {user?.news?.length > 0 ? (
              user.news.map((n: any, i: number) => (
                <NewsItem key={i}>{n}</NewsItem>
              ))
            ) : (
              <p>Nenhuma notícia recente.</p>
            )}
          </NewsList>
        </Card>
      </MainContent>
    </DashboardContainer>
  )
}
