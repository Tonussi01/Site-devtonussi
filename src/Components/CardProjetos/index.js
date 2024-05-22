import React from 'react';
import { CardContainer, Title, Content, Link } from './styles'; 

const CardProjetos = ({ title, description, link }) => {
  return (
    <CardContainer>
      <div>
        <Title>{title}</Title>
        <Content>Descrição: {description}</Content>
        <Link href={link} target="_blank" rel="noopener noreferrer">Repositório do Projeto</Link>
      </div>
    </CardContainer>
  );
};

export default CardProjetos;
