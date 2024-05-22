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
  margin-top: 20px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  /* Alinhar itens em linha para telas maiores */
  display: flex;
  flex-direction: column;

  /* Estilo para os parágrafos */
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin: 5px 0;
    width: calc(50% - 10px);

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Content = styled.p`
  color: white;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 70%;
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
