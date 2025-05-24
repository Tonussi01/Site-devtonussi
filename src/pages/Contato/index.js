import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles'; 

export default function Contato() {
    return (
        <MidBody>
            <MainTitle>Contato</MainTitle>
            <br />
            <MainContent>
                Endereço atual:
                <br />
                Juiz de Fora - MG
                <br />
                CEP: 36026 - 315
                <br />                
                <br />
                Celular (WhatsApp): (32) 9 8466–7566
                <br />
                <br />
                Celular 2: (32) 9 9918–5261
                <br />
                <br />
                E-mails:
                <br />
                tonussi01@gmail.com
                <br />
                tonussi@hotmail.com
                <br />
                <br />
                <a  href="https://wa.me/qr/JUITKFXPEVQMI1" target="_blank" rel="noopener noreferrer" style={{ color: 'green', fontSize: '30px' }} >Me chame no WhatsApp</a > 
                <br />                
                <br /><a href="https://www.linkedin.com/in/lucas-tonussi" target="_blank" rel="noopener noreferrer" style={{ color: 'green', fontSize: '30px' }} >Linkedin</a>
                <br />
                <br /><a href="https://github.com/Tonussi01" target="_blank" rel="noopener noreferrer" style={{ color: 'green', fontSize: '30px' }} >GitHub</a>                
                <br />
                <br /><a href="https://devtonussi-tonussi01s-projects.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'green', fontSize: '30px' }} >Site Portfólio</a>
                <br />
            </MainContent>
        </MidBody>
    );
}
