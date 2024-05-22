import React, { useState } from 'react';
import { CardContainer, CardContainerSecundario, Title, Content, Input, Button } from './styles';
import { CepController } from '../../Controller/CepController';

const CardApiCep = ({ title, description }) => {
  const [cep, setCep] = useState('');
  const [cepDetails, setCepDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const handlerSearcher = async () => {
    try {
      setLoading(true);
      console.log("CEP digitado:", cep);

      await CepController.fetchCep(cep);
      const newCepDetails = CepController.getLastSearchedCep();
      console.log("Detalhes do CEP encontrado:", newCepDetails);
      setCepDetails(newCepDetails);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardContainer>
      <div>
        <Title>{title}</Title>
        <Content>{description}</Content>
        <Input
          type="text"
          value={cep}
          onChange={handleCepChange}
          placeholder="Digite o CEP"
        />
        <Button onClick={handlerSearcher}>Pesquisar</Button>
        <br /><br />
        {loading && <p>Carregando...</p>}
        {cepDetails && (
          <CardContainerSecundario>
            <h2>Endereço Encontrado</h2>
            <div>
              <p>{cepDetails.logradouro}</p>
              <p>{cepDetails.bairro}</p>
              <p>{cepDetails.localidade} - {cepDetails.uf}</p>
            </div>
          </CardContainerSecundario>
        )}        
      </div>
    </CardContainer>
  );
};

export default CardApiCep;