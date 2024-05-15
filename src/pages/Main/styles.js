import styled from 'styled-components';

export const MidBody = styled.div`
    display: flex;
    height: 96%;
    flex-direction: column; /* Empilha os elementos verticalmente */
    justify-content: center;
    align-items: center;
    background: black;
    max-width: 800px;
    margin: 10px auto;
    padding: 40px;
    border: 2px solid #a3e635;
    border-radius: 10px;
`;


export const MainTitle = styled.h1`
    font-size: 24px; /* Tamanho da fonte */
    color: white; /* Cor do texto */
    text-align: center; /* Alinhamento do texto */
`;

export const MainContent = styled.div`
    flex: 1; /* Ocupa todo o espaço restante */
    font-size: 16px; /* Tamanho da fonte */
    color:white; /* Cor do texto */
    line-height: 1.6; /* Espaçamento entre linhas */
    text-align: center; /* Alinha o texto ao centro horizontalmente */
    align-self: center; /* Alinha o conteúdo ao centro verticalmente */
    padding: 20px;
    border-radius: 8px; 
    border: 1px solid #00DB0E;
`;