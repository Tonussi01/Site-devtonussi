import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alterado para uma disposição em coluna em telas menores */
  background-color: #12291A; /* Cor de fundo de destaque */
  border: 2px solid  #00DB0E; /* Bordas pretas */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h2`
  color:white;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Content = styled.p`
  color:white;
  font-size: 16px;
`;

export const Link = styled.a`
  color:#85DB4F; /* Cor azul para links */
  text-decoration: none; /* Removendo sublinhado padrão */
  font-size: 16px;
  margin-top: 10px; /* Espaçamento superior */
  &:hover {
    text-decoration: underline; /* Adicionando sublinhado ao passar o mouse */
  }
`;

// Adicionando media query para telas menores
export const ResponsiveContainer = styled(CardContainer)`
  @media (max-width: 768px) {
    flex-direction: row; /* Alterado para uma disposição em linha em telas menores */
    align-items: center; /* Alinhamento centralizado em telas menores */
  }
`;

