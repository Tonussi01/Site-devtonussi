
import React from 'react';
import {Footer} from './styles';
import iconeGit from '../../Images/github.png';
import iconeInst from '../../Images/instagram.png';
import iconeLink from '../../Images/linkedin.png';


function FooterSite() {
    return (
        <Footer>
            <h1>Me encontre nas redes sociais.</h1>
            <ul>
                <li> <img src={iconeInst} alt="Instagram" /> <a href='https://www.instagram.com/tonussi01/'> Instagram </a></li>
                <li> <img src={iconeLink} alt="LinkedIn" /> <a href='https://www.linkedin.com/in/lucas-tonussi-a7501b220/'> LinkedIn </a></li>
                <li> <img src={iconeGit} alt="GitHub" /> <a href='https://github.com/Tonussi01'> GitHub </a></li>
            </ul>
            <p>© 2024 Lucas Tonussi M. Fortuna Engenheiro de Software. Todos direitos reservados.</p>
        </Footer>        
    );
}

export default FooterSite;