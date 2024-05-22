import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';

const Main = () => {
    return (
        <MidBody>
            <MainTitle>Sobre Mim</MainTitle><br />
            <MainContent>
                <p>
                    Meu nome é Lucas Tonussi Moura Fortuna. Engenheiro Eletricista, pós-graduando em Engenharia de Software pela PUC-Minas. Possuo 6 meses de experiência como programador de sistemas na empresa Zeus Solutions, onde trabalhava com sistemas desenvolvidos em PowerBuilder e C# que utilizavam bancos de dados SQL. Após essa experiência intensifiquei meus estudos na programação de sistemas, realizando cursos em diversas áreas como C#, Python, SQL, HTML, CSS, Scrum, entre outros. Buscando agora, com a pós-graduação, uma maior especialização na área.
                </p>
            </MainContent>

            <MainContent>
                <MainTitle>Experiência Profissional</MainTitle>
                <p>
                    Empresa: Zeus Rio Solutions LTDA<br />
                    Cargo: Programador de Sistemas de Informação Nível 4<br />
                    Função: Durante meu tempo de trabalho, estive envolvido no desenvolvimento e manutenção de sistemas de gestão empresarial (ERP) no ambiente .NET, utilizando principalmente a linguagem C#. Também tive experiência com a linguagem PowerBuilder, onde utilizei o SQL Server para criar scripts de integração, realizar alterações e consultas, além de desenvolver stored procedures no banco de dados. Meu foco principal era assegurar que os sistemas fossem robustos, eficientes e capazes de atender às necessidades de nossos clientes, propiciando uma boa qualidade de UX.
                </p>
            </MainContent>

            <MainContent>
                <MainTitle>Experiência</MainTitle>
                <p>
                    Com seis anos de experiência dedicados ao estudo e prática das diversas áreas do desenvolvimento de software, estou comprometido em construir uma carreira sólida e impactante na Engenharia de Software. Minha jornada tem sido marcada pela exploração e domínio de tecnologias essenciais para o desenvolvimento moderno, com habilidades robustas em .NET, C#, SQL, e implementação de padrões como MVC.
                </p>

                <ul>
                    <li><strong>Habilidades Principais:</strong></li>
                    <ul>
                        <li>.NET e C#: Minha base sólida em .NET e C# permite desenvolver aplicações robustas e escaláveis, aplicando princípios de orientação a objetos para garantir código limpo e de fácil manutenção.</li>
                        <li>SQL: Proficiente em design e otimização de bancos de dados relacionais utilizando SQL, assegurando que as aplicações tenham acesso eficiente aos dados.</li>
                        <li>Padrão MVC: Experiência prática na implementação do padrão Model-View-Controller para separação clara de responsabilidades e melhor organização do código-fonte.</li>
                        <li>APIs: Conhecimento extenso em desenvolvimento e integração de APIs, facilitando a comunicação entre sistemas e serviços de forma eficiente e segura.</li>
                    </ul>
                    <li><strong>Também consigo trabalhar com:</strong></li>
                    <ul>
                        <li>Python: Desenvolvimento eficaz em projetos diversos.</li>
                        <li>React.js e React Native: Construção de interfaces dinâmicas e responsivas.</li>
                        <li>MySQL: Administração e modelagem de dados para integridade e desempenho.</li>
                        <li>Unity, C e C++: Desenvolvimento de jogos e aplicações de alto desempenho.</li>
                        <li>Métodos Ágeis (Scrum e Kanban): Experiência em entregas contínuas e colaborativas.</li>
                        <li>Testes de Software: Garantia de qualidade e integridade das funcionalidades.</li>
                        <li>Análise de Requisitos, UX e UI: Tradução de requisitos em soluções intuitivas e bem projetadas.</li>
                        <li>HTML + CSS: Desenvolvimento front-end para interfaces atrativas e responsivas.</li>
                    </ul>
                </ul>
            </MainContent>

            <MainContent>
                <MainTitle>Informações complementares</MainTitle>
                <p style={{ textAlign: 'center'}}>
                    Inglês - Avançado<br />
                    Espanhol – Intermediário<br />
                    Excel – Avançado 
                </p><br />                
            </MainContent>
            <a href="https://drive.google.com/file/d/1zdHSgpWHO5u0mPXdHVLll9OaI0iQsA61/view?usp=sharing" target="_blank" rel="noreferrer" style={{ color: 'green',textAlign: 'center', backgroundColor: "white", fontSize: '40px', padding: '10px' }}>Currículo em PDF</a>
        </MidBody>
    );
}

export default Main;
