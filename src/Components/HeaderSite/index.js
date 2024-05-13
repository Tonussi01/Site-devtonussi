
import React from 'react';
import logoLt from '../../Images/Logo.png';
import {Header} from './styles';


function HeaderSite() {
    return (
        <Header>
            
            <ul>
                <li><a href='/'>
                <img src={logoLt} alt="Logo" />
            </a></li>
                <li><a href='/'>Home</a></li>
                <li><a href='/cursos'>Cursos</a></li>
                <li><a href='/projetos'>Projetos</a></li>                
                <li><a href='/apis'>Api's</a></li>
                <li><a href='/contato'>Contato</a></li>
            </ul>
        </Header>
        
    );
}

export default HeaderSite;