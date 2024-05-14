// CardCursos.js
import React from 'react';
import { CardContainer, Title, Content, ImageWrapper, Image } from './styles';

const CardCursos = ({ title, content, school, conclusion, description, image }) => {
  return (
    <CardContainer>
        <Title>{title}</Title>
      <ImageWrapper>
        <Image src={image}/>
      </ImageWrapper>
      <div>
        
        <Content>Carga Horária: {content}</Content>
        <Content>Instituição de Ensino: {school}</Content>
        <Content>Data de conclusão: {conclusion}</Content>
        <Content>Descrição: {description}</Content>
      </div>
    </CardContainer>
  );
};

export default CardCursos;
