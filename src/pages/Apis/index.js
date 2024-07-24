import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';
import CardApiCep from '../../Components/CardApiCep/index.js';
import CardApiClima from '../../Components/CardApiClima/index.js';
import CardApiQuiz from '../../Components/CardApiQuiz/index.js';

export default function Apis() {
  return (
    <MidBody>
      <MainTitle>Api's</MainTitle>
      <br />
      <MainContent>
        <CardApiCep
          title="API Via CEP"
          description="Digite o Cep desejado e será retornado a você o endereço ligado ao cep "          
        />
        <br />
        <CardApiClima
          title="API de Dados climáticos - API Advisor"
          description="Demonstração de requisição de dados da ApiAdvisor e apresentação dos dados relativos á cidade de Cuiabá-MT" 
        />
         <br />
          <CardApiQuiz />
      </MainContent>
    </MidBody>
  );
}
