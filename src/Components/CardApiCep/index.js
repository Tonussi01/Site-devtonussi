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

  const handleClear = () => {
    setCep('');
    setCepDetails(null);
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
            <p><strong>CEP:</strong> {cepDetails.cep}</p>
            <p><strong>Logradouro:</strong> {cepDetails.logradouro}</p>
            <p><strong>Complemento:</strong> {cepDetails.complemento}</p>
            <p><strong>Bairro:</strong> {cepDetails.bairro}</p>
            <p><strong>Localidade:</strong> {cepDetails.localidade}</p>
            <p><strong>UF:</strong> {cepDetails.uf}</p>
            <p><strong>IBGE:</strong> {cepDetails.ibge}</p>
            <p><strong>DDD:</strong> {cepDetails.ddd}</p>
            <p><strong>SIAFI:</strong> {cepDetails.siafi}</p>
            <Button onClick={handleClear} style={{ backgroundColor: 'gray' }}>Limpar</Button>

          </CardContainerSecundario>
        )}        
      </div>
    </CardContainer>
  );
};

export default CardApiCep;
