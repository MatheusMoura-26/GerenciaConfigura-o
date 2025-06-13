import React from 'react'
import {
    Container,
    Title,
    Section,
    Form,
    Label,
    Input,
    Button,
    ErrorMsg,
    Placeholder,
} from './styles'
import { useUserProfileViewModel } from './view-model'

export function UserProfilePage() {
    const {
        form,
        error,
        loading,
        handleChange,
        handleSubmit,
    } = useUserProfileViewModel()

    return (

        <div style={{ position: 'relative' }}>
            <img
                src="LOGO-removebg-preview.png"
                alt="logo"
                style={{
                    position: 'absolute',
                    top: '-40px',      // ajuste vertical
                    left: '280px',    // "fora" do container à esquerda
                    width: '250px',   // tamanho da logo
                }}
            />
            <Container>
                <Title>Perfil do Usuário</Title>

                <Section>
                    <h2>Informações Pessoais</h2>

                    <Form onSubmit={handleSubmit}>
                        <Label>Nome</Label>
                        <Input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nome completo"
                        />
                        <Label>Email</Label>
                        <Input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="E-mail"
                        />
                        <Label>Telefone</Label>
                        <Input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Telefone"
                        />
                        <Label>Senha</Label>
                        <Input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Senha"
                        />

                        <Button type="submit" disabled={loading}>
                            {loading ? 'Salvando...' : 'Salvar Alterações'}
                        </Button>

                        {error && <ErrorMsg>{error}</ErrorMsg>}
                    </Form>
                </Section>
            </Container>
        </div>
    )
}
