import React from 'react';
import { MidBody, MainTitle, MainContent } from './styles';
import CardProjetos from './../../Components/CardProjetos/index.js';

export default function Projetos() {
    return (
        <MidBody>
            <MainTitle>Projetos Desenvolvidos</MainTitle>
            <br />
            <MainContent>                
                <CardProjetos
                    title="Site-devtonussi"
                    description="Site portfólio desenvolvido em ReactJs."
                    link="https://github.com/Tonussi01/Site-devtonussi" /> {/* Adicionando link */}
                    <br />
            </MainContent>
        </MidBody>
    );
}
