import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';
import CardProjetos from './../../Components/CardProjetos/index.js';

const projectImages = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/SiteDevTonussi1.png?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/SiteDevTonussi2.png?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/SiteDevTonussi3.png?raw=true'
];

export default function Projetos() {
    return (
        <MidBody>
            <MainTitle>Projetos Desenvolvidos</MainTitle>
            <br />
            <MainContent>
                <CardProjetos
                    title="Site-devtonussi"
                    description="Site portfólio desenvolvido em ReactJs para exposição de cursos, projetos e algumas habilidades. Possui aplicação de padrão MVC para consumo de Api's"
                    link="https://github.com/Tonussi01/Site-devtonussi"
                    images={projectImages}
                />
                <br />
            </MainContent>
            <MainContent>
                <CardProjetos
                    title="TNSTool"
                    description={`
Sistema ERP para gerenciamento de estoque e controle de vendas.
- Possui Front-end ReactJs com aplicação de MVC;
- Possui Back-end Node/Express para desenvolver as Apis em padrão MVC com linguagem C#;
- Consome um banco de dados SQL que era Hospedado através do teste free da GoogleClouds
                    `}
                    link="https://github.com/Tonussi01/Site-devtonussi"
                    images={projectImages}
                />
                <br />
            </MainContent>
        </MidBody>
    );
}
