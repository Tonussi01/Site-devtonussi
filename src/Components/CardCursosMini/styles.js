import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #12291A;
  border: 2px solid #00DB0E;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardCursosMiniContainer = styled.div``;

export const Bar = styled.div`
  background-color: ${props => props.color};
  height: 5px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px 8px 0 0;
`;

export const Title = styled.h2`
  color: white;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

export const Content = styled.p`
  color: white;
  font-size: 12px;
  text-align: left;
`;

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid #00DB0E;
  border-radius: 8px;
  padding: 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    background-color: #00DB0E;
    color: #12291A;
  }
`;
