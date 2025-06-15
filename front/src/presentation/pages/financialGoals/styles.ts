import styled from 'styled-components';

const deepPurple = '#6C5CE7';
const mintGreen = '#00CEC9';
const lightGray = '#F2F2F2';
const white = '#FFFFFF';
const electricBlue = '#0984E3';
const darkText = '#333333'; 
const placeholderGray = '#A0A0A0'; 

export const Container = styled.div`
    max-width: 800px;
    margin: 20px auto; /* Adicionado margem superior/inferior para espaçamento */
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    background-color: ${lightGray}; /* Fundo geral da página */
    border-radius: 8px; /* Borda arredondada para o container principal */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Sombra suave para o container */
`;

export const Title = styled.h1`
    font-size: 2.5rem; /* Aumentado um pouco para destaque */
    font-weight: 700;
    color: ${deepPurple}; /* Cor primária: Roxo profundo */
    margin-bottom: 2rem;
    text-align: center;
    border-bottom: 2px solid ${deepPurple}; /* Adicionado linha abaixo do título */
    padding-bottom: 1rem;
`;

export const Section = styled.section`
    background: ${white}; /* Fundo das seções: Branco */
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid #e0e0e0; /* Borda sutil para as seções */

    h2 {
        font-size: 1.5rem; /* Aumentado para destaque */
        font-weight: 600;
        color: ${electricBlue}; /* Cor de acento: Azul elétrico para subtítulos */
        margin-bottom: 0.75rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${lightGray}; /* Linha abaixo dos subtítulos */
    }
`;

export const Form = styled.form`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    input {
        flex: 1 1 150px;
        padding: 0.75rem; /* Aumentado padding */
        border: 1px solid #cbd5e1;
        border-radius: 0.25rem;
        font-size: 1rem;
        color: ${darkText}; /* Cor do texto dentro do input */

        &::placeholder {
            color: ${placeholderGray}; /* Cor do placeholder */
        }
    }

    button {
        padding: 0.75rem 1.5rem; /* Aumentado padding */
        background: ${electricBlue}; /* Botão principal: Azul elétrico */
        color: ${white};
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0667b3; /* Tom mais escuro de azul para hover */
        }

        /* Removendo o estilo de 'não-primeiro-filho' se todos os botões forem iguais ou se o primeiro for o principal */
        /* Se houver outros botões com funções diferentes, pode reintroduzir com cores da paleta */
        /* &:not(:first-child) {
            background: #64748b; // Manter este se for um botão secundário
        } */
    }
`;

export const Placeholder = styled.p`
    color: ${placeholderGray}; /* Cinza para placeholders */
    font-size: 1rem;
    text-align: center; /* Centralizar texto de placeholder */
    padding: 20px; /* Adicionar um pouco de padding */
`;

export const ErrorMsg = styled.p`
    color: #ef4444; /* Vermelho de erro padrão, pode ser ajustado para algo da paleta se houver */
    margin-top: 1rem;
    font-size: 0.95rem; /* Levemente menor para erro */
    font-weight: 600;
`;

export const GoalItem = styled.div`
    display: flex;
    flex-direction: column; /* Alterado para coluna para melhor organização em telas menores */
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
    background-color: ${lightGray}; /* Fundo para cada item da meta */
    border-radius: 0.25rem;
    margin-bottom: 10px; /* Espaçamento entre os itens */

    &:last-child {
        border-bottom: none; /* Remover borda do último item */
    }
`;

export const GoalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 0.5rem;

    strong {
        font-size: 1.1rem;
        color: ${deepPurple}; /* Título da meta: Roxo profundo */
    }

    span {
        font-size: 0.95rem;
        color: ${darkText};
    }
`;

export const Progress = styled.div`
    margin-top: 0.5rem;
    width: 100%; /* Para que a barra de progresso ocupe toda a largura */

    span {
        font-size: 0.9rem; /* Um pouco menor para o texto de progresso */
        color: ${darkText};
        margin-bottom: 5px;
        display: block;
    }
`;

export const Bar = styled.div`
    background: #e2e8f0; /* Fundo da barra de progresso */
    border-radius: 0.25rem;
    height: 10px; /* Aumentado a altura da barra */
    width: 100%; /* Ocupar toda a largura disponível */
    margin-top: 0.25rem;
    overflow: hidden;
`;

export const Fill = styled.div<{ width: number }>`
    background: ${mintGreen}; /* Preenchimento da barra: Verde menta (cor secundária/acento) */
    height: 100%;
    width: ${({ width }) => width}%;
    transition: width 0.3s ease-in-out; /* Transição suave */
    border-radius: 0.25rem; /* Borda arredondada para o preenchimento */
`;

export const Actions = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem; /* Espaçamento superior para os botões de ação */
    justify-content: flex-end; /* Alinhar botões à direita */
    width: 100%;

    button {
        background: ${electricBlue}; /* Botões de ação: Azul elétrico */
        color: ${white};
        border: none;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0667b3;
        }

        &:last-child {
            background: #ef4444; /* Botão de exclusão (vermelho de erro) */
            &:hover {
                background-color: #d82b2b;
            }
        }
    }
`;

// Adicionar um componente para a logo se ela for um ícone ou imagem
export const Logo = styled.img`
    height: 50px; /* Tamanho da logo, ajuste conforme necessário */
    margin-right: 15px;
    align-self: flex-start; /* Alinha a logo no início do header */
`;


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${lightGray}; /* Borda sutil no header */
`;