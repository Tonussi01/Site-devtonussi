
import React, {useState, useCallback, useEffect} from 'react';
import {Container, Form, Header, Footer } from './styles';
import logoLt from '../../Images/Logo.png';
import iconeGit from '../../Images/github.png';
import iconeInst from '../../Images/instagram.png';
import iconeLink from '../../Images/linkedin.png';

export default function Contato(){
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

        <br />
        <br />

        <Form>
            <h1>Aba de Contato</h1>
        </Form>   
        
        <br />
        <br />

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
