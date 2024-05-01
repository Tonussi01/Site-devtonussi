import styled from 'styled-components';

export const MidBody = styled.div`
    display: flex;
    flex-direction: column; /* Empilha os elementos verticalmente */
    justify-content: center;
    align-items: center;
    background: #F5DEB3;
    max-width: 800px;
    margin: 10px auto;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin-bottom: 250px;
`;


export const MainTitle = styled.h1`
    font-size: 24px; /* Tamanho da fonte */
    color: #333; /* Cor do texto */
    text-align: center; /* Alinhamento do texto */
`;

export const MainContent = styled.div`
    flex: 1; /* Ocupa todo o espaço restante */
    font-size: 16px; /* Tamanho da fonte */
    color: #666; /* Cor do texto */
    line-height: 1.6; /* Espaçamento entre linhas */
    text-align: center; /* Alinha o texto ao centro horizontalmente */
    align-self: center; /* Alinha o conteúdo ao centro verticalmente */
`;