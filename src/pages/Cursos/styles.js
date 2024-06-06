import styled from 'styled-components';

export const MidBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #020617;
  max-width: 1200px;
  width: 85%;
  margin: 10px auto;
  padding: 40px;
  border: 2px solid #a3e635;
  border-radius: 10px;
`;

export const MainTitle = styled.h1`
  font-size: 25px;
  color: white;
  text-align: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Espaço entre os cards */
  padding: 20px;
  background: #12291A;
  border-radius: 8px;
  border: 1px solid #00DB0E;
  margin-bottom: 20px;
`;

export const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  background-color: ${props => (props.selected ? '#00DB0E' : 'rgba(255, 255, 255, 0.1)')};
  border: 2px solid #00DB0E;
  border-radius: 8px;
  padding: 10px;
  color: ${props => (props.selected ? '#12291A' : 'white')};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #00DB0E;
    color: #12291A;
  }
`;

export const CardCursosMiniContainer = styled.div`
  flex: 1 1 calc(33.333% - 40px); /* Cada card ocupará aproximadamente 1/3 da linha menos o espaço de gap */
  max-width: calc(33.333% - 40px); /* Garantir que a largura máxima do card seja 1/3 da linha menos o espaço de gap */
  min-width: 250px; /* Largura mínima para os cards */
`;
