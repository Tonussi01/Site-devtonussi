import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';
import CardApis from './../../Components/CardApis/index.js';

export default function Apis() {
  return (
    <MidBody>
      <MainTitle>Api's</MainTitle>
      <br />
      <MainContent>
        <CardApis
          title="API Meu CEP + API Advisor "
          description="Digite o Cep desejado e será retornado a você o endereço ligado ao cep e tambem algumas informações climaticas"
          
        />
        <br />
          
      </MainContent>
    </MidBody>
  );
}
