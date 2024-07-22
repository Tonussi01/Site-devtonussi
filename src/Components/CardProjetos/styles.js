import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #12291A;
  border: 2px solid #00DB0E;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  margin-bottom: 10px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.p`
  color: white;
  font-size: 16px;
`;

export const Link = styled.a`
  color: #85DB4F;
  text-decoration: none;
  font-size: 16px;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  margin: 10px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 4px;
`;

// Adicionando media query para telas menores
export const ResponsiveContainer = styled(CardContainer)`
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;
