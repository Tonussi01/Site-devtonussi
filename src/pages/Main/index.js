import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';

const Main = () => {
    return (
        <MidBody>
            <MainTitle>Sobre Mim</MainTitle><br />
            <MainContent>
                <p>
                Sou Lucas Tonussi Moura Fortuna, Engenheiro Eletricista e pós-graduado em Engenharia de Software pela PUC-Minas. Com um foco constante em evolução e aprendizado, venho construindo uma carreira na área de desenvolvimento de software. Minha jornada começou na Zeus Rio Solutions LTDA, onde atuei como Programador de Sistemas de Informação , contribuindo para o desenvolvimento de soluções empresariais robustas e eficientes. Após essa experiência, intensifiquei meus estudos em programação, aprofundando meus conhecimentos em diversas áreas, incluindo C#, Python, SQL, React, e metodologias ágeis como Scrum. Meu objetivo é continuar expandindo meus conhecimentos e habilidades na área de desenvolvimento de sistemas, aplicando o que aprendi ao longo de minha carreira e estudos.
                </p>
                <p>
                Tenho oito anos de dedicação ao estudo e prática do desenvolvimento de software, com uma sólida base em diversas tecnologias. Estou em constante evolução, buscando novas oportunidades para aplicar meu conhecimento em projetos desafiadores e inovadores.
                </p>
            </MainContent>            

            <MainContent>
                
                <ul>
                    <li><strong>Habilidades Principais:</strong></li>
                    <ul>
                        <li>.NET e C#: Desenvolvimento de aplicações robustas e escaláveis, com ênfase em código limpo e boas práticas de programação.</li>
                        <li>SQL e MySQL: Design, otimização e administração de bancos de dados relacionais, garantindo acesso eficiente e seguro aos dados.</li>
                        <li>Padrão MVC: Implementação do padrão Model-View-Controller para uma clara separação de responsabilidades e melhor organização do código-fonte.</li>
                        <li>APIs REST: Desenvolvimento e integração de APIs para comunicação eficiente entre sistemas e serviços.</li>
                    </ul>
                    <li><strong>Outras Competências:</strong></li>
                    <ul>
                        <li>Maui C#: Desenvolvimento de projetos front end, permitindo geração de aplicação para IOS ou Android.</li>
                        <li>Java/Kotlin: Desenvolvimento de projetos front end interoperação entre as tecnologias.</li>
                        <li>Python: Desenvolvimento de projetos variados, incluindo aplicações com machine learning.</li>
                        <li>PHP e Laravel: Criação e manutenção de backends eficientes utilizando PHP e o framework Laravel.</li>
                        <li>React.js e React Native: Desenvolvimento de interfaces dinâmicas e responsivas para web e mobile.</li>
                        <li>Unity, C#: Desenvolvimento de jogos e aplicações de alto desempenho.</li>
                        <li>Métodos Ágeis (Scrum e Kanban): Conhecimento academico.</li>
                        <li>Testes de Software: Garantia de qualidade e integridade das funcionalidades.</li>
                        <li>Análise de Requisitos, UX e UI: Tradução de requisitos em soluções intuitivas e bem projetadas.</li>
                        <li>HTML + CSS: Desenvolvimento front-end para interfaces atrativas e responsivas.</li>
                    </ul>
                </ul>
            </MainContent>

            <MainContent>
                <MainTitle>Experiência Profissional</MainTitle>
                 <p>
                    Empresa: UNION Sistemas de Gestão<br />
                    Cargo: Desenvolvedor de Software Full Stack Pleno<br />
                    Sou responsável pelo desenvolvimento, manutenção e evolução do ERP SSSoluções e dos demais sistemas integrados ao ecossistema da empresa. <br /><br />
                    ERP Desktop:<br />
                    Sistema desenvolvido em .NET (C# e VB.NET), com interface em DevExpress e banco de dados SQL Server. Atuação em rotinas críticas e de alta complexidade, incluindo integrações bancárias (Bradesco, Sicoob, Itaú, Banco do Brasil), registro e baixa automática de boletos, pagamentos via código de barras e PIX (QR Code), além de módulos fiscais (NFe, CT-e, MDFe, DF-e, SPED Fiscal e SPED Benefícios).<br /><br />
                    Aplicativo Força de Vendas (Mobile):<br />
                    App híbrido (online/offline) utilizado por vendedores, com sincronização quando conectado. Frontend em Java/Kotlin e backend (WCF) em .NET C# hospedado em cloud. Responsável por novas funcionalidades, melhorias, correções e integrações.<br /><br />
                   Canhoto Eletrônico:<br />
                    Aplicativo para confirmação digital de entregas. Frontend em .NET MAUI e backend em API RESTful .NET C# hospedada em cloud. Atuação ponta a ponta: arquitetura, codificação, deploy e manutenção.
                </p>
                <br />
        
                <p>
                    Empresa: UNION Sistemas de Gestão<br />
                    Cargo: Desenvolvedor de Software Jr <br />
                    Atuo no desenvolvimento, manutenção e evolução do ERP SSSoluções, utilizando tecnologias .NET (C# e VB.NET) e SQL. Minhas responsabilidades incluem:<br />
                    - Realizar correções, melhorias e novas implementações no sistema;<br />
                    - Desenvolver e integrar o sistema com APIs de parceiros e serviços externos;<br />
                    - Colaborar no desenvolvimento do novo módulo de Comércio Exterior;<br />
                    - Criar soluções utilizando DevExpress para otimização de interfaces e relatórios.<br />
                    <br />
                    Estou comprometido em entregar soluções robustas e de alta performance que atendam às necessidades do cliente e aprimorem a experiência do usuário.
                </p>
                <br />
                <p>
                    Empresa: Zeus Rio Solutions LTDA<br />
                    Cargo: Programador de Sistemas de Informação Nível 4<br />
                    Função: Durante meu tempo de trabalho, estive envolvido no desenvolvimento e manutenção de sistemas de gestão empresarial (ERP) no ambiente .NET, utilizando principalmente a linguagem C#. Também tive experiência com a linguagem PowerBuilder, onde utilizei o SQL Server para criar scripts de integração, realizar alterações e consultas, além de desenvolver stored procedures no banco de dados. Meu foco principal era assegurar que os sistemas fossem robustos, eficientes e capazes de atender às necessidades de nossos clientes, propiciando uma boa qualidade de UX.
                </p>
            </MainContent>

            <MainContent>
                <MainTitle>Informações complementares</MainTitle>
                <p style={{ textAlign: 'center'}}>
                    Inglês - Avançado<br />
                    Espanhol – Intermediário<br />
                    Excel – Avançado 
                </p><br />                
            </MainContent>
            <a href="https://drive.google.com/file/d/1A1extnfiwyjEpDPehnuFM_mI8mjULuut/view?usp=drive_link" target="_blank" rel="noreferrer" style={{ color: 'green',textAlign: 'center', backgroundColor: "white", fontSize: '40px', padding: '10px' }}>Currículo em PDF</a>
        </MidBody>
    );
}

export default Main;
