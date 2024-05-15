import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
  flex-direction: column; /* Alterado para uma disposição em coluna em telas menores */
  background-color: #12291A; /* Cor de fundo de destaque */
  border: 2px solid  #00DB0E; /* Bordas pretas */
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center; /* Centraliza o título */
`;

export const Content = styled.p`
  color:white;
  font-size: 16px;
  text-align: left; /* Alinha os conteúdos à esquerda */
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

export const DivWrapper = styled.div`
  display: flex;
  align-items: center; /* Centraliza os elementos verticalmente */

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Altera a direção da pilha e inverte a ordem */
  }
`;

export const FullScreenButton = styled.button`
  background-color: #85DB4F;
  color: #000;
  border-radius: 8px;
  border: 2px solid #000;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  
  &:hover {
    background-color: #72BD44;
  }
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

