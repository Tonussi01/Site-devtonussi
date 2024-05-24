import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #12291A;
  border: 2px solid #00DB0E;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardContainerSecundario = styled.div`
  background-color: #f9fafb;
  border-radius: 8px;
  color: black;
  padding: 20px;
  margin-top: 20px; /* Espaço superior entre os cards */

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center; /* Centralizar o título */
  }

  /* Layout de grade para os itens */
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Colunas fixas */
  gap: 10px; /* Espaço entre os itens */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas para telas menores */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 coluna para telas bem pequenas */
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    padding: 10px;
    background-color: #fff; /* Fundo branco para melhor visibilidade */
    border-radius: 4px; /* Cantos arredondados */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra para destaque */
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center; /* Centralizar o título */
`;

export const Content = styled.p`
  color: white;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #00DB0E;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #00B30B;
  }
`;

export const ResponsiveContainer = styled(CardContainer)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
