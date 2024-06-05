import React, { useState } from 'react';
import { CardContainer, Title, Content, ImageWrapper, Image, DivWrapper, FullScreenButton } from './styles';

const CardCursos = ({ title, content, school, conclusion, description, image, tecnology, onClose }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <CardContainer>
      <Title>{title}</Title>
      <DivWrapper>
        <div>
          <Content>Descrição: {description}</Content>
          <Content>Carga Horária: {content}</Content>
          <Content>Instituição de Ensino: {school}</Content>
          <Content>Data de conclusão: {conclusion}</Content>
          <Content>Tecnologia: {tecnology}</Content>
          {!isFullScreen && (
            <FullScreenButton onClick={handleToggleFullScreen}>Ver Certificado</FullScreenButton>
          )}
        </div>
      </DivWrapper>
      {isFullScreen && (
        <div>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
          <FullScreenButton onClick={handleToggleFullScreen}>Fechar Certificado</FullScreenButton>
        </div>
      )}
    </CardContainer>
  );
};

export default CardCursos;
