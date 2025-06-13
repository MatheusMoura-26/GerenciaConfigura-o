import React from 'react'
import { useFinancialGoalsViewModel } from './view-model'
import {
    Container,
    Title,
    Section,
    Form,
    Placeholder,
    ErrorMsg,
    GoalItem,
    Progress,
    Bar,
    Fill,
    Actions,
} from './styles'

export function FinancialGoalsPage() {
    const {
        goal,
        form,
        error,
        editingId,
        handleChange,
        handleSubmit,
        handleDelete,
        handleCancel,
    } = useFinancialGoalsViewModel()

    return (

        <div style={{ position: 'relative' }}>
            <img
                src="LOGO-removebg-preview.png"
                alt="logo"
                style={{
                    position: 'absolute',
                    top: '-70px',      // ajuste vertical
                    left: '150px',    // "fora" do container à esquerda
                    width: '250px',   // tamanho da logo
                }}
            />
        <Container>
            <Title>Metas Financeiras</Title>
            <Section>
                <h2>{editingId ? 'Editar Meta' : 'Nova Meta'}</h2>
                <Form onSubmit={handleSubmit}>
                    <input
                        name="goalAmount"
                        type="number"
                        placeholder="Valor da meta"
                        value={form.goalAmount}
                        onChange={handleChange}
                        required
                        min={0}
                    />
                    <input
                        name="savedAmount"
                        type="number"
                        placeholder="Valor poupado"
                        value={form.savedAmount}
                        onChange={handleChange}
                        required
                        min={0}
                    />
                    <button type="submit">{editingId ? 'Salvar' : 'Criar'}</button>
                    {editingId && (
                        <button type="button" onClick={handleCancel}>
                            Cancelar
                        </button>
                    )}
                </Form>
                {error && <ErrorMsg>{error}</ErrorMsg>}
            </Section>
            <Section>
                <h2>Metas criadas</h2>
                {!goal && <Placeholder>Nenhuma meta cadastrada.</Placeholder>}
                {goal && (
                    <GoalItem>
                        <div>
                            <strong>Meta financeira</strong>
                            <Progress>
                                <span>
                                    R$ {goal.savedAmount} / R$ {goal.goalAmount}
                                </span>
                                <Bar>
                                    <Fill
                                        width={goal.goalAmount > 0 ? Math.min(100, (goal.savedAmount / goal.goalAmount) * 100) : 0}
                                    />
                                </Bar>
                            </Progress>
                        </div>
                        <Actions>
                            <button onClick={() => handleDelete(goal.id)}>Excluir</button>
                        </Actions>
                    </GoalItem>
                )}
            </Section>
        </Container>
        </div>
    )
}
