import styled from 'styled-components';

export const MidBody = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    background: #020617;
    max-width: 1200px;
    width: 90%; 
    margin: 10px auto;
    padding: 40px;
    border: 2px solid #a3e635;
    border-radius: 10px;

    @media (max-width: 768px) {
        padding: 20px;
    }

    @media (max-width: 480px) {
        padding: 15px;
    }
`;

export const MainTitle = styled.h1`
    font-size: 30px; 
    color: white;
    text-align: center; 
`;

export const MainContent = styled.div`
    width: 100%; 
    flex: 1; 
    font-size: 16px; 
    color: white; 
    line-height: 1.6; 
    text-align: center; 
    align-self: center; 
`;

export const CardContainer = styled.div`
    width: 90%; 
    max-width: 900px; 
    margin: 0 auto;
    background-color: #12291A;
    border: 2px solid #00DB0E;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;
