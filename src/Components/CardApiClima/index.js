import React, { useState } from 'react';
import { CardContainer, Title, Content, Button } from './styles';
import ClimaController from './../../Controller/ClimaController';

import CardApiClimaDetalhe from '../../Components/CardApiClimaDetalhe/index.js';



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
                    <CardApiClimaDetalhe
                        title={climaDetails.name +" - "+ climaDetails.state +" - "+ climaDetails.country}
                        Temperatura={climaDetails.data.temperature}
                        DirecaoVento={climaDetails.data.wind_direction}
                        VelocidadeVento={climaDetails.data.wind_velocity}
                        Umidade={climaDetails.data.humidity}
                        Condicao={climaDetails.data.condition}
                        Pressao={climaDetails.data.pressure}
                        SensacaoTermica={climaDetails.data.sensation}
                        Data={climaDetails.data.date}
                    />
                )}
            </div>
        </CardContainer>
    );
};

export default CardApiClima;
