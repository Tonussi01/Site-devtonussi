import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';
import CardProjetos from './../../Components/CardProjetos/index.js';

const SiteImages = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/SiteDevTonussi1.png?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/SiteDevTonussi2.png?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/SiteDevTonussi3.png?raw=true'
];
const TnsImages = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSTool1.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSTool2.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSTool3.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSTool4.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSTool5.jpg?raw=true'
];
const TnsImagesBE = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSTool6.jpg?raw=true'
];

const TnsOldImages = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSToolOld1.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSToolOld2.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSToolOld3.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSToolOld4.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSToolOld5.jpg?raw=true',    
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/TNSToolOld6.jpg?raw=true'
];

const Git = [
    'https://miro.medium.com/v2/resize:fit:1100/1*CWFkh5z8oa6dZfn5_gkKKQ.jpeg'    
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
                    images={SiteImages}
                />
                <br />
            </MainContent>
            <MainContent>
                <CardProjetos
                    title="Front-end TNSTool"
                    description={`
Sistema ERP para gerenciamento de estoque e controle de vendas.
(Desenvolvido como opção de evolução e modernização do meu "Sistema de Gestao Windows Form")
- Possui Front-end ReactJs com aplicação de MVC;
- Possui Back-end Node/Express para desenvolver as Apis em padrão MVC com linguagem C#;
- Consome um banco de dados SQL que era Hospedado através do teste free da GoogleClouds
                    `}
                    link="https://github.com/Tonussi01/TnsTool/tree/master"
                    Link="https://github.com/Tonussi01/nodetns/tree/main/backendtns"
                    images={TnsImages}
                />
                <br />
            </MainContent>
            <MainContent>
                <CardProjetos
                    title="Back-end TNSTool"
                    description={`
Sistema ERP para gerenciamento de estoque e controle de vendas.
(Desenvolvido como opção de evolução e modernização do meu "Sistema de Gestao Windows Form")
- Possui Front-end ReactJs com aplicação de MVC;
- Possui Back-end Node/Express para desenvolver as Apis em padrão MVC com linguagem C#;
- Consome um banco de dados SQL que era Hospedado através do teste free da GoogleClouds
                    `}
                    Link="https://github.com/Tonussi01/nodetns/tree/main/backendtns"
                    images={TnsImagesBE}
                />
                <br />
            </MainContent>
            <MainContent>
                <CardProjetos
                    title="Sistema de Gestão Windows Form"
                    description="Sistema para realizar controle de vendas e gerenciamento de estoque. Sistema windows form, consome um banco de dados Sql."
                    link="https://github.com/Tonussi01/Sistema_Gestao"
                    images={TnsOldImages}
                />
                <br />
            </MainContent>

            <MainContent>
                <CardProjetos
                    title="Demais projetos"
                    description="Todos meus projetos são mantidos publicos no meu perfil do GitHub"
                    link="https://github.com/Tonussi01"
                    images={Git}
                />
                <br />
            </MainContent>
        </MidBody>
    );
}
