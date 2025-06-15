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
    )
}
