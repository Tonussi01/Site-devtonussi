import styled from 'styled-components';

export const MidBody = styled.div`
    display: flex;
    flex-direction: column; /* Empilha os elementos verticalmente */
    justify-content: center;
    align-items: center;
    background: black;
    max-width: 1200px;
    width: 85%;
    margin: 10px auto;
    padding: 40px;
    border: 2px solid #a3e635;
    border-radius: 10px;
`;


export const MainTitle = styled.h1`
    font-size: 30px; /* Tamanho da fonte */
    color: #f8fafc; /* Cor do texto */
    text-align: center; /* Alinhamento do texto */
`;

export const MainContent = styled.div`
    flex: 1; /* Ocupa todo o espaço restante */
    font-size: 16px; /* Tamanho da fonte */
    color: #f8fafc; /* Cor do texto */
    line-height: 1.6; /* Espaçamento entre linhas */
    text-align: center; /* Alinha o texto ao centro horizontalmente */
    align-self: center; /* Alinha o conteúdo ao centro verticalmente */
`;