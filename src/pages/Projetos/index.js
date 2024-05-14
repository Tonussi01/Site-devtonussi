import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';
import CardProjetos from './../../Components/CardProjetos/index.js';

export default function Projetos() {
    return (
        <MidBody>
            <MainTitle>Projetos Desenvolvidos</MainTitle>
            <br />
            <MainContent>
                <CardProjetos
                    title="WebSocketsApi"
                    description="Atividade prática de desenvolvimento de uma Web API WebSocket."
                    link="https://github.com/Tonussi01/WebSocketsApi" /> {/* Adicionando link */}
                    <br />
                <CardProjetos
                    title="Site-devtonussi"
                    description="Site portfólio desenvolvido em ReactJs."
                    link="https://github.com/Tonussi01/Site-devtonussi" /> {/* Adicionando link */}
                    <br />
                <CardProjetos
                    title="Scripts-Gary-s-Adventure"
                    description="Scripts utilizados em um projeto pessoal de jogo 2D para estudo da plataforma Unity e aplicação da linguagem C# para jogos Mobile."
                    link="https://github.com/Tonussi01/Scripts-Gary-s-Adventure" /> {/* Adicionando link */}
                    <br />
                <CardProjetos
                    title="Scripts-Jogo2D-C-"
                    description="Scripts utilizados em um projeto pessoal de jogo 2D para estudo da plataforma Unity e aplicação da linguagem C# para jogos para computador."
                    link="https://github.com/Tonussi01/Scripts-Jogo2D-C-" /> {/* Adicionando link */}
                    <br />
                <CardProjetos
                    title="Sistema_Gestao"
                    description="Sistema de gestão de vendas e controle de estoque."
                    link="https://github.com/Tonussi01/Sistema_Gestao" /> {/* Adicionando link */}
                    <br />
                <CardProjetos
                    title="App-Cadastro-ReactNativ"
                    description="Aplicação desenvolvida em React Native com TypeScript para cadastro."
                    link="https://github.com/Tonussi01/App-Cadastro-ReactNativ" /> {/* Adicionando link */}
                    <br />
                <CardProjetos
                    title="API-CEP"
                    description="Aplicação utilizando API CEP no padrão MVC."
                    link="https://github.com/Tonussi01/API-CEP" /> {/* Adicionando link */}
                    <br />
                <CardProjetos
                    title="Exercicio-ReactNative"
                    description="Exercício desenvolvido em React Native com TypeScript."
                    link="https://github.com/Tonussi01/Exercicio-ReactNative" /> {/* Adicionando link */}
            </MainContent>
        </MidBody>
    );
}
