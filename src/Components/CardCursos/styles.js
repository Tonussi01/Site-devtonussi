// styles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alterado para uma disposição em coluna em telas menores */
  background-color: #fffbeb; /* Cor de fundo de destaque */
  border: 2px solid #000; /* Bordas pretas */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Content = styled.p`
  color: #666;
  font-size: 16px;
`;

export const ImageWrapper = styled.div`
  margin-right: 20px; /* Espaço entre a imagem e o texto */
  height: auto; /* A imagem ocupará a altura necessária */
  width: 100%; /* A largura da imagem ocupará 100% do wrapper */
  margin-bottom: 10px; /* Espaçamento inferior entre a imagem e o texto */
`;

export const Image = styled.img`
  width: 100%; /* A imagem ocupará 100% da largura do wrapper */
  height: auto; /* A altura da imagem se ajustará automaticamente */
  border-radius: 8px; /* Adicionando borda arredondada */
`;

// Adicionando media query para telas menores
export const ResponsiveContainer = styled(CardContainer)`
  @media (max-width: 768px) {
    flex-direction: row; /* Alterado para uma disposição em linha em telas menores */
    align-items: center; /* Alinhamento centralizado em telas menores */
  }
`;

export const ResponsiveImageWrapper = styled(ImageWrapper)`
  @media (max-width: 768px) {
    margin-right: 20px; /* Espaço entre a imagem e o texto */
    height: auto; /* A imagem ocupará a altura necessária */
    width: 30%; /* Largura definida para a imagem em telas menores */
    margin-bottom: 0; /* Removendo o espaçamento inferior */
  }
`;
