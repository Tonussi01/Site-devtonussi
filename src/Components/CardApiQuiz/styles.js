// src/Components/CardQuiz/styles.js
import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #12291A;
  border: 2px solid #00DB0E;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 100%;
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

export const Content = styled.p`
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Option = styled.div`
  border: 2px solid #00DB0E;
  border-radius: 8px;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  position: relative;

  ${({ selected, feedback }) =>
    selected &&
    css`
      border-color: ${feedback === 'correct' ? '#00b30b' : feedback === 'incorrect' ? '#b30000' : 'yellow'};
      background-color: ${feedback === 'correct' ? '#00b30b' : feedback === 'incorrect' ? 'black' : 'black'};
      color: white;
    `}
`;

export const Button = styled.button`
  background-color: ${props => props.green ? '#00DB0E' : props.gray ? '#ccc' : '#00DB0E'};
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.green ? '#00B30B' : props.gray ? '#aaa' : '#00B30B'};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const FeedbackText = styled.p`
  color: #b30000;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

export const ResponsiveContainer = styled(CardContainer)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
