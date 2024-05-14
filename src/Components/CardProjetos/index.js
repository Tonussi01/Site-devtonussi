import React from 'react';
import { CardContainer, Title, Content, Link } from './styles'; // Adicionando Link aos imports

const CardProjetos = ({ title, description, link }) => { // Adicionando link aos parâmetros
  return (
    <CardContainer>
      <div>
        <Title>{title}</Title>
        <Content>Descrição: {description}</Content>
        <Link href={link} target="_blank" rel="noopener noreferrer">Repositório do Projeto</Link> {/* Adicionando o link */}
      </div>
    </CardContainer>
  );
};

export default CardProjetos;
