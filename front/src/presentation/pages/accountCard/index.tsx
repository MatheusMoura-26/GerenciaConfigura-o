import React from 'react'
import { useAccountCardViewModel } from './view-model'
import {
    Container,
    Title,
    Section,
    UserName,
    AccountBox,
    AccountRow,
    Label,
    Value,
    Balance,
    Placeholder,
    CardBox,
    CardNumber,
    CardDetails,
    SmallLabel,
    CardValue,
} from './styles'

export function AccountCardPage() {
    const { data } = useAccountCardViewModel()

    return (
        <div style={{ position: 'relative' }}>
            <img
                src="LOGO-removebg-preview.png"
                alt="logo"
                style={{
                    position: 'absolute',
                    top: '-70px',      // ajuste vertical
                    left: '220px',    // "fora" do container à esquerda
                    width: '250px',   // tamanho da logo
                }}
            />
            <Container>
                {data && <UserName>Olá, {data.name}!</UserName>}
                <Title>Conta e Cartão</Title>

                <Section>
                    <h2>Informações da Conta</h2>
                    {data ? (
                        <AccountBox>
                            <AccountRow>
                                <Label>Agência</Label>
                                <Value>{data.agency}</Value>
                            </AccountRow>
                            <AccountRow>
                                <Label>Conta</Label>
                                <Value>{data.accountNumber}</Value>
                            </AccountRow>
                            <AccountRow>
                                <Label>Saldo</Label>
                                <Balance>
                                    R$ {data.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                </Balance>
                            </AccountRow>
                        </AccountBox>
                    ) : (
                        <Placeholder>Carregando informações...</Placeholder>
                    )}
                </Section>

                <Section>
                    <h2>Informações do Cartão</h2>
                    {data ? (
                        <CardBox>
                            <CardNumber>{data.cardNumber}</CardNumber>
                            <CardDetails>
                                <div>
                                    <SmallLabel>Validade</SmallLabel>
                                    <CardValue>07/30</CardValue>
                                </div>
                                <div>
                                    <SmallLabel>Limite</SmallLabel>
                                    <CardValue>
                                        R$ {data.cardLimit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                                    </CardValue>
                                </div>
                            </CardDetails>
                        </CardBox>
                    ) : (
                        <Placeholder>Carregando informações...</Placeholder>
                    )}
                </Section>
            </Container>
        </div>
    )
}
