import React, { useState } from 'react';
import { CardContainer, CardContainerSecundario, Title, Content, Button } from './styles';
import ClimaController from './../../Controller/ClimaController';

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

            console.log("Detalhes do clima encontrado:", climaDetails);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    return (
        <CardContainer>
            <div>
                <Title>{title}</Title>
                <Content>{description}</Content>
                {showDetails ? (
                    <Button onClick={handleCloseDetails}>Fechar</Button>
                ) : (
                    <Button onClick={handlerSearcher}>Mostrar os dados climáticos de São Paulo</Button>
                )}
                <br /><br />
                {loading && <p>Carregando...</p>}
                {showDetails && climaDetails && (
                    <CardContainerSecundario>
                        <h2>Dados Climáticos</h2>
                        <div>
                            <p>ID da Cidade: {climaDetails.id}</p>
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
                        </div>
                    </CardContainerSecundario>
                )}
            </div>
        </CardContainer>
    );
};

export default CardApiClima;
