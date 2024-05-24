import React, { useState } from 'react';
import { CardContainer, CardContainerSecundario, Title, Content, Button } from './styles';
import ClimaController from './../../Controller/ClimaController';

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


const CardApiClima = ({ title, description }) => {
    const [climaDetails, setClimaDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const handlerSearcher = async () => {
        try {
            setLoading(true);
            await ClimaController.fetchClima();
            const climaDetails = ClimaController.getLastSearchedClima();
            setClimaDetails(climaDetails);
            setShowDetails(true);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    // Função para obter a URL da imagem com base na condição climática
    const getConditionImageUrl = (conditionCode) => {
        return conditionImageMap[conditionCode] || 'url_padrao_para_condicao_desconhecida';
    };

    return (
        <CardContainer>
            <div>
                <Title>{title}</Title>
                <Content>{description}</Content>
                {showDetails ? (
                    <Button onClick={handleCloseDetails}>Fechar</Button>
                ) : (
                    <Button onClick={handlerSearcher}>Mostrar os dados climáticos de Cuiabá</Button>
                )}
                <br /><br />
                {loading && <p>Carregando...</p>}
                {showDetails && climaDetails && (
                    <CardContainerSecundario>
                       
                        <p>Nome: {climaDetails.name}</p>
                        <p>Estado: {climaDetails.state}</p>
                        <p>País: {climaDetails.country}</p>
                        <p>Temperatura: {climaDetails.data.temperature}°C</p>
                        <p>Direção do Vento: {climaDetails.data.wind_direction}</p>
                        <p>Velocidade do Vento: {climaDetails.data.wind_velocity} km/h</p>
                        <p>Umidade: {climaDetails.data.humidity}%</p>
                        <p>Condição: {climaDetails.data.condition}</p>
                        <p>Pressão: {climaDetails.data.pressure} hPa</p>
                        <p>Sensação Térmica: {climaDetails.data.sensation}°C</p>
                        <p>Data: {climaDetails.data.date}</p>
                        {climaDetails.data.condition && (
                            <img src={getConditionImageUrl(climaDetails.data.condition)} alt="Condição climática" style={{ textAlign: 'center', alignItems: 'center' , padding: '10px' }} />
                        )}
                    </CardContainerSecundario>
                )}
            </div>
        </CardContainer>
    );
};

export default CardApiClima;
