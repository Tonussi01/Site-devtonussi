import styled from 'styled-components';

export const MidBody = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    background: #020617;
    max-width: 1200px;
    width: 85%;
    margin: 10px auto;
    padding: 40px;
    border: 2px solid #a3e635;
    border-radius: 10px;
`;


export const MainTitle = styled.h1`
    font-size: 30px; 
    color: #f8fafc; 
    text-align: center; 
`;

export const MainContent = styled.div`
    flex: 1; 
    font-size: 16px; 
    color: #f8fafc; 
    line-height: 1.6; 
    text-align: center; 
    align-self: center; 
`;