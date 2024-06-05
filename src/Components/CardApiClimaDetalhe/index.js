import React from 'react';
import { CardContainer, Title, Content, TopDiv, ImgCondition } from './styles';

const conditionImageMap = {
    'Sol': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png?raw=true',
    'Noite sem nuvens': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/1n.png?raw=true',
    'Sol com algumas nuvens': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/2.png?raw=true',      // Sol com algumas nuvens
    'Sol com muitas nuvens': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/2r.png?raw=true', // Sol com muitas nuvens
    'Noite com algumas nuvens': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/2n.png?raw=true', // Noite com algumas nuvens
    'Noite com muitas nuvens': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/2rn.png?raw=true', // Noite com muitas nuvens
    'Nublado': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/3.png?raw=true',      // Nublado
    'Nublado à noite': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/3n.png?raw=true', // 
    'Sol e chuva': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/4.png?raw=true',      // Sol e chuva
    'Sol com muitas nuvens e chuva': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png4r.png?raw=true', // Sol com muitas nuvens e chuva
    'Noite chuvosa': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/4n.png?raw=true', // Noite chuvosa
    'Noite nublada e chuvosa': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/4rn.png?raw=true', // Noite nublada e chuvosa
    'Sol entre nuvens e pancadas de chuva, com trovoadas': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/4t.png?raw=true', // Sol entre nuvens e pancadas de chuva, com trovoadas
    'Pancadas de chuva durante a noite': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/4tn.png?raw=true', // Pancadas de chuva durante a noite
    'Chuvoso': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/5.png?raw=true',      // Chuvoso
    'Chuvoso à noite': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/5n.png?raw=true', // Chuvoso à noite
    'Chuva e trovoadas': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/6.png?raw=true',      // Chuva e trovoadas
    'Chuva e trovoadas à noite': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/6n.png?raw=true', // Chuva e trovoadas à noite
    'Geada': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/7.png?raw=true',      // Geada
    'Geada à noite': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/7n.png?raw=true', // Geada à noite
    'Neve': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/8.png?raw=true',      // Neve
    'Nevoeiro': 'https://github.com/Tonussi01/Site-devtonussi/blob/master/src/Images/128px/1.png/9.png?raw=true',      // Nevoeiro    
};

const getConditionImageUrl = (conditionCode) => {
    return conditionImageMap[conditionCode] || 'url_padrao_para_condicao_desconhecida';
};

const CardApiClima = ({ title, Temperatura, DirecaoVento, VelocidadeVento, Umidade, Condicao, Pressao, SensacaoTermica, Data }) => {
    return (
        <CardContainer>
            <br />
            <TopDiv>
                <Title>{title}</Title>
                {Condicao && (
                    <ImgCondition src={getConditionImageUrl(Condicao)} alt="Condição climática" style={{ width: '128px', height: '128px' }} />
                )}
            </TopDiv><br/><br/>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px' }}>
                <Content>Temperatura: {Temperatura}º C</Content>
                <Content>Direção do Vento: {DirecaoVento}</Content>
                <Content>Velocidade do Vento: {VelocidadeVento}km/h</Content>
                <Content>Umidade: {Umidade}%</Content>
                <Content>Condição: {Condicao}</Content>
                <Content>Pressão: {Pressao} hPa</Content>
                <Content>Sensação Térmica: {SensacaoTermica}º C</Content>
                <Content>Data: {Data}</Content>
                <br />
            </div>
        </CardContainer>
    );
};

export default CardApiClima;