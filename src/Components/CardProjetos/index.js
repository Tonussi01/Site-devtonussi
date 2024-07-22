import React, { useState } from 'react';
import { 
  CardContainer, 
  Title, 
  Content, 
  Link, 
  ToggleButton, 
  CarouselContainer, 
  CarouselImage 
} from './styles'; 
import { FaPlus, FaMinus } from 'react-icons/fa';

const CardProjetos = ({ title, description, link, images }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <CardContainer>
      <div>
        <Title>
          {title}
          <ToggleButton onClick={toggleExpand}>
            {expanded ? <FaMinus /> : <FaPlus />}
          </ToggleButton>
        </Title>
        {expanded && (
          <>
            <CarouselContainer>
              {images.map((img, index) => (
                <CarouselImage key={index} src={img} alt={`Imagem ${index + 1}`} />
              ))}
            </CarouselContainer>
            <Content>Descrição: {description}</Content>
            <Link href={link} target="_blank" rel="noopener noreferrer">Repositório do Projeto</Link>
          </>
        )}
      </div>
    </CardContainer>
  );
};

export default CardProjetos;
