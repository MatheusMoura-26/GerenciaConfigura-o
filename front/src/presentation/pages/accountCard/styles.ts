import styled from 'styled-components';

// Paleta de Cores
const deepPurple = '#6C5CE7';
const mintGreen = '#00CEC9';
const lightGray = '#F2F2F2';
const white = '#FFFFFF';
const electricBlue = '#0984E3';
const darkText = '#333333'; // Para texto geral, similar ao #1e293b
const placeholderGray = '#A0A0A0'; // Para inputs placeholders e textos cinzas claros
const lightBlueGradient = '#60a5fa'; // Um azul mais claro para o gradiente do cartão
const cardDarkBlue = '#2563eb'; // Azul escuro original do cartão

export const Container = styled.div`
    max-width: 450px; /* Levemente aumentado para melhor espaçamento */
    margin: 20px auto; /* Adicionado margem superior/inferior para espaçamento */
    padding: 2rem 1.5rem; /* Ajustado padding */
    font-family: 'Inter', sans-serif;
    background-color: ${lightGray}; /* Fundo geral da página */
    border-radius: 8px; /* Borda arredondada para o container principal */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05); /* Sombra suave para o container */
`;

// Componentes para o Header (reutilizados da página de metas financeiras)
export const HeaderContainer = styled.header`
    display: flex;
    align-items: center; /* Alinha os itens verticalmente no centro */
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e0e0e0; /* Borda sutil no header */
`;

export const Logo = styled.img`
    height: 50px; /* Tamanho da logo, ajuste conforme necessário */
    margin-right: 15px; /* Espaço entre a logo e o texto do título */
`;

export const UserName = styled.div`
    font-size: 1.2rem; /* Levemente maior */
    color: ${deepPurple}; /* Cor primária: Roxo profundo para o nome do usuário */
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: left;
`;

export const Title = styled.h1`
<<<<<<< HEAD
    font-size: 2.2rem; /* Ajustado para se adequar ao lado da logo */
    font-weight: 700;
    color: ${deepPurple}; /* Roxo profundo para o título principal */
    margin-bottom: 0; /* Removido margin-bottom para alinhar com a logo */
    text-align: left; /* Alinhado à esquerda dentro do HeaderContainer */
`;

export const Section = styled.section`
    background: ${white}; /* Fundo das seções: Branco */
=======
    font-size: 2.2rem; 
    font-weight: 700;
    color: ${deepPurple}; 
    margin-bottom: 0; 
    text-align: center; 
`;

export const Section = styled.section`
    background: ${white}; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
    border-radius: 0.7rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
    padding: 1.5rem 1.2rem;
    margin-bottom: 2rem;
<<<<<<< HEAD
    border: 1px solid #e0e0e0; /* Borda sutil para as seções */

    h2 {
        font-size: 1.3rem; /* Levemente maior e mais visível */
        font-weight: 600;
        color: ${electricBlue}; /* Azul elétrico para os subtítulos */
        margin-bottom: 1.2rem;
        letter-spacing: 0.5px;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${lightGray}; /* Linha abaixo dos subtítulos */
=======
    border: 1px solid #e0e0e0; 

    h2 {
        font-size: 1.3rem; 
        font-weight: 600;
        color: ${electricBlue}; 
        margin-bottom: 1.2rem;
        letter-spacing: 0.5px;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${lightGray}; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
    }
`;

export const AccountBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
`;

export const AccountRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
<<<<<<< HEAD
    padding-bottom: 0.5rem; /* Adicionado um pouco de padding-bottom para separar as linhas */
    border-bottom: 1px dashed ${lightGray}; /* Linha pontilhada para separar informações */

    &:last-child {
        border-bottom: none; /* Remove a borda da última linha */
=======
    padding-bottom: 0.5rem; 
    border-bottom: 1px dashed ${lightGray}; 

    &:last-child {
        border-bottom: none; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
    }
`;

export const Label = styled.span`
<<<<<<< HEAD
    color: ${darkText}; /* Texto das labels em cinza escuro */
=======
    color: ${darkText}; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
    font-weight: 500;
    font-size: 1rem;
`;

export const Value = styled.span`
<<<<<<< HEAD
    color: ${deepPurple}; /* Valores em roxo profundo para destaque */
=======
    color: ${deepPurple}; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
    font-weight: 600;
    font-size: 1.05rem;
`;

export const Balance = styled(Value)`
<<<<<<< HEAD
    color: ${mintGreen}; /* Saldo em verde menta para indicar valor positivo */
    font-size: 1.15rem;
    font-weight: 700; /* Mais negrito para o saldo */
`;

export const CardBox = styled.div`
    background: linear-gradient(90deg, ${deepPurple} 60%, ${electricBlue} 100%); /* Gradiente com roxo e azul elétrico */
    border-radius: 1rem;
    padding: 1.5rem 1.8rem; /* Aumentado padding */
    color: ${white};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); /* Sombra mais pronunciada */
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem; /* Espaço acima do cartão */
`;

export const CardNumber = styled.div`
    font-size: 1.4rem; /* Um pouco maior para clareza */
    letter-spacing: 2.5px; /* Mais espaçamento para os números do cartão */
    font-family: 'Roboto Mono', monospace; /* Fonte monospace para números de cartão */
=======
    color: ${mintGreen}; 
    font-size: 1.15rem;
    font-weight: 700; 
`;

export const CardBox = styled.div`
    background: linear-gradient(90deg, ${deepPurple} 60%, ${electricBlue} 100%); 
    border-radius: 1rem;
    padding: 1.5rem 1.8rem; 
    color: ${white};
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); 
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem; 
`;

export const CardNumber = styled.div`
    font-size: 1.4rem; 
    letter-spacing: 2.5px; 
    font-family: 'Roboto Mono', monospace; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
    margin-bottom: 0.7rem;
    font-weight: 500;
`;

export const CardDetails = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`;

export const SmallLabel = styled.div`
    font-size: 0.85rem;
<<<<<<< HEAD
    color: #e0e0e0; /* Um cinza bem claro para labels pequenas do cartão */
=======
    color: #e0e0e0; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
    font-weight: 400;
`;

export const CardValue = styled.div`
    font-size: 1.05rem;
    font-weight: 600;
    color: ${white};
`;

export const Placeholder = styled.p`
<<<<<<< HEAD
    color: ${placeholderGray}; /* Cinza para placeholders */
    font-size: 1rem;
    text-align: center;
    padding: 20px; /* Adicionado um pouco de padding */
=======
    color: ${placeholderGray}; 
    font-size: 1rem;
    text-align: center;
    padding: 20px; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
`;

// Se você tiver botões de ação para a conta/cartão:
export const ActionButtons = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
<<<<<<< HEAD
    justify-content: center; /* Centraliza os botões */
    flex-wrap: wrap; /* Permite que os botões quebrem a linha */
=======
    justify-content: center; 
    flex-wrap: wrap; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168

    button {
        background-color: ${electricBlue};
        color: ${white};
        padding: 0.75rem 1.5rem;
        border: none;
<<<<<<< HEAD
        border-radius: 0.5rem; /* Um pouco mais arredondado */
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        flex-grow: 1; /* Faz com que os botões preencham o espaço */
        min-width: 150px; /* Largura mínima para cada botão */
=======
        border-radius: 0.5rem; 
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s ease;
        flex-grow: 1; 
        min-width: 150px; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168

        &:hover {
            background-color: #0667b3;
        }

<<<<<<< HEAD
        /* Exemplo de um botão secundário (se houver) */
        &.secondary {
            background-color: ${lightGray}; /* Fundo cinza claro */
            color: ${deepPurple}; /* Texto roxo */
=======
        
        &.secondary {
            background-color: ${lightGray}; 
            color: ${deepPurple}; 
>>>>>>> c0105a2caa2b84030a43eb1321e3d2222a808168
            border: 1px solid ${deepPurple};
            &:hover {
                background-color: #e0e0e0;
            }
        }
    }
`;