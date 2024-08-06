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

const TnsImagesQuiz = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/DevQuiz1.png?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/DevQuiz2.png?raw=true'
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

const DiscografiaFe = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/Discografia1.png?raw=true',  
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/Discografia2.png?raw=true'  
];

const DiscografiaBe = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/Discografia3.png?raw=true'
];

const ApiCaixaEletronico = [
    'https://png.pngtree.com/png-vector/20220909/ourmid/pngtree-cashier-machine-png-image_6144991.png'
];

const GarryAdventure = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/GarryAdventure1.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/GarryAdventure2.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/GarryAdventure3.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/GarryAdventure4.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/GarryAdventure5.jpg?raw=true'
];
const MyFinance = [
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/MyFinance1.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/MyFinance2.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/MyFinance3.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/MyFinance4.jpg?raw=true',
    'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/Projetos/MyFinance5.jpg?raw=true'
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
                    title="Api - DevQuiz"
                    description="Api em padrão MVC. Retorna uma questão aleatoria de um banco de questões organizadas em Json"
                    link="https://github.com/Tonussi01/ApiDevQuiz_NET6.0"
                    images={TnsImagesQuiz}
                />
                <br />
            </MainContent>
            <MainContent>
                <CardProjetos
                    title="Discografia Front-end"
                    description="O Front-end Discografia é uma aplicação React desenvolvida para interagir com a API Discografia, oferecendo uma interface para gerenciar e visualizar álbuns e músicas."
                    link="https://github.com/Tonussi01/discografia-fe"
                    images={DiscografiaFe}
                />
                <br />
            </MainContent>
            <MainContent>
                <CardProjetos
                    title="Discografia Back-end"
                    description="A API Discografia é uma API REST desenvolvida para gerenciar informações sobre álbuns e músicas. A API fornece endpoints para CRUD (Criar, Ler, Atualizar, Deletar) operações em álbuns e músicas."
                    link="https://github.com/Tonussi01/Discografia_BE"
                    images={DiscografiaBe}
                />
                <br />
            </MainContent>

            <MainContent>
                <CardProjetos
                    title="ApiCaixaEletronico"
                    description="A ApiCaixaEletronico é uma API RESTful desenvolvida para simular o funcionamento de um caixa eletrônico. O principal objetivo desta API é fornecer a quantidade mínima de cédulas necessárias para atender um valor de saque solicitado pelo usuário."
                    link="https://github.com/Tonussi01/ApiCaixaEletronico"
                    images={ApiCaixaEletronico }
                />
                <br />
            </MainContent>

            <MainContent>
                <CardProjetos
                    title="Garry's Adventure"
                    description="Garry's Adventure é um jogo 2d estilo Mario, desenvolvido com Unity e C#. O projeto foi desenvolvido com intuito de expor habilidades com o motor gráfico e suas possibilidades com C#"
                    link="https://github.com/Tonussi01/Scripts-Gary-s-Adventure"
                    images={GarryAdventure}
                />
                <br />
            </MainContent>

            <MainContent>
                <CardProjetos
                    title="MyFinance-Web-Dotnet"
                    description="Este sistema permite gerenciar planos de conta e registrar transações associadas a esses planos. Desenvolvido em C# para a matéria de Implementação e Evolução de Software."
                    link="https://github.com/Tonussi01/MyFinance-Web-Dotnet"
                    images={MyFinance}
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
