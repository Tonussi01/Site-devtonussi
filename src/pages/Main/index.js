
import React, {useState, useCallback, useEffect} from 'react';
import {Container, Form, FormAlert, Footer,Header } from './styles';
import logoLt from '../../Images/Logo.png';
import iconeGit from '../../Images/github.png';
import iconeInst from '../../Images/instagram.png';
import iconeLink from '../../Images/linkedin.png';


export default function Main(){
   return(

        
        <Container>
            
            <Header>
            <div><img src={logoLt}/></div>
            <ul>
                <li><a href='/'> Home </a></li>
                <li><a href='/cursos'> Cursos </a></li>
                <li><a href='/projetos'> Projetos </a></li>
                <li><a href='/contato'> Contato </a></li>
            </ul>
            </Header>

            <Form>
                <h1>
                    Sobre Mim
                </h1>
                <br />
                <div>
                Meu nome é Lucas Tonussi Moura Fortuna. Engenheiro Eletricista, pós-graduando em Engenharia de Software pela PUC-Minas. Possuo 6 meses de experiência 
                como programador de sistemas na empresa Zeus Solutions, onde trabalhava com sistemas desenvolvidos em PowerBuilder e
                C# que utilizavam bancos de dados SQL. Após essa experiencia intensifiquei meus estudos na programação de sistemas, 
                realizando cursos em diversas áreas como C#, python, Sql, Html, Css, Scrum entre outros. Buscando agora com a pós-graduação
                uma maior especialização na área.
                </div>
            </Form>

           
            

            <Footer>
                <h1>Me encontre nas redes sociais.</h1>
                <ul>
                    <li> <img src= {iconeInst} /> <a href='https://www.instagram.com/tonussi01/'> Instagran </a></li>
                    <li> <img src= {iconeLink} /> <a href='https://www.linkedin.com/in/lucas-tonussi-a7501b220/'> Linkedin </a></li>
                    <li> <img src= {iconeGit} /> <a href='https://github.com/Tonussi01'> GitHub </a></li>
                </ul>
                <p>© 2023 Lucas Tonussi M. Fortuna Engenheiro de Software. Todos direitos reservados.</p>
            </Footer>
        </Container>
        
    )
}
