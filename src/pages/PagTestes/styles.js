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
