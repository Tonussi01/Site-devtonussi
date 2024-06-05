import React, { useState } from 'react';
import { CardContainer, Title, Content, Bar, Button, CardCursosMiniContainer } from './styles';
import CardCursos from './../CardCursos/index.js'; // Importe o componente de detalhamento

const CardCursosMini = ({ title, content, school, conclusion, description, image, tecnology, barColor }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(prev => !prev); // Toggle para mostrar ou esconder os detalhes
  };

  return (
    <CardCursosMiniContainer>
      <CardContainer>
        <Bar color={barColor} />
        <Title>{title}</Title>
        <div>
          <Content>Tecnologia: {tecnology}</Content>
          <Content>Carga Horária: {content}</Content>
        </div>
        <Button onClick={handleToggleDetails}>
          {showDetails ? 'Fechar Detalhamento' : 'Saiba Mais'}
        </Button>
      </CardContainer>
      {showDetails && (
        <CardCursos
          title={title}
          content={content}
          school={school}
          conclusion={conclusion}
          description={description}
          image={image}
          tecnology={tecnology}
          onClose={handleToggleDetails} // Passando a função de toggle para fechar o detalhamento
        />
      )}
    </CardCursosMiniContainer>
  );
};

export default CardCursosMini;
