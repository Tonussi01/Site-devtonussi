
import React from 'react';
import {MidBody,MainTitle,MainContent} from './styles';


export default function Main(){
   return(       
          
        <MidBody>            
            <MainContent>
            <MainTitle>Sobre Mim</MainTitle>
                Meu nome é Lucas Tonussi Moura Fortuna. Engenheiro Eletricista, pós-graduando em Engenharia de Software pela PUC-Minas. Possuo 6 meses de experiência como programador de sistemas na empresa Zeus Solutions, onde trabalhava com sistemas desenvolvidos em PowerBuilder e C# que utilizavam bancos de dados SQL. Após essa experiência intensifiquei meus estudos na programação de sistemas, realizando cursos em diversas áreas como C#, python, Sql, Html, Css, Scrum entre outros. Buscando agora com a pós-graduação uma maior especialização na área.
            </MainContent>
            <br />

            <MainContent>
            <MainTitle>Experiência</MainTitle>       
            
            Empresa: Zeus Rio Solutions LTDA Cargo: Programador de Sistemas de Informação Nível 4 
            Função: Durante meu tempo de trabalho, estive envolvido no desenvolvimento e 
            manutenção de sistemas de gestão empresarial (ERP) no ambiente .NET, utilizando 
            principalmente a linguagem C#. Também tive experiência com a linguagem PowerBuilder, 
            onde utilizei o SQL Server para criar scripts de integração, realizar alterações e consultas, 
            além de desenvolver stored procedures no banco de dados. Meu foco principal era
            assegurar que os sistemas fossem robustos, eficientes e capazes de atender às necessidades 
            de nossos clientes, propiciando uma boa qualidade de UX.
            </MainContent>
            <br />

            <MainContent>
            <MainTitle>Informações complementares</MainTitle>         
            
            Inglês - Avançado
            <br />
            Espanhol – Intermediario
            <br />
            Excel – Avançado
            
            </MainContent>
            <br />
            <a href="https://drive.google.com/file/d/1zdHSgpWHO5u0mPXdHVLll9OaI0iQsA61/view?usp=sharing" target="_blank" rel="noreferrer" style={{ color: 'green', 
                backgroundColor: "white", fontSize: '40px', padding:'10px' }} >Currículo em PDF</a>



        </MidBody>
        
    )
}
