import React, { useState } from 'react';
import { CardContainer, CardContainerSecundario, Title, Content, Input, Button } from './styles';
import { CepController } from '../../Controller/CepController';
import { ClimaController } from '../../Controller/ClimaController';

const CardApis = ({ title, description }) => {
  const [cep, setCep] = useState('');
  const [cepDetails, setCepDetails] = useState(null);
  const [climaDetails, setClimaDetails] = useState(null);
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

      if (newCepDetails) {
        const climaData = {
          name: newCepDetails.localidade,
          state: newCepDetails.uf,
        };
        console.log("Dados para climaData:", climaData);

        await ClimaController.fetchClima(climaData);
        const climaDetails = ClimaController.getLastSearchedClima();
        setClimaDetails(climaDetails);
        
        console.log("Detalhes do clima encontrado:", climaDetails);
      }
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
        {climaDetails && (
          <CardContainerSecundario>
            <h2>Dados Climáticos</h2>
            <div>
              <p>ID do Clima: {climaDetails.id}</p>
              {/* Renderize outros detalhes do clima conforme necessário */}
            </div>
          </CardContainerSecundario>
        )}
      </div>
    </CardContainer>
  );
};

export default CardApis;