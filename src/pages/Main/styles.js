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


  
    > * {
        flex: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const MainTitle = styled.h1`
    font-size: 30px;
    color: white;
    text-align: center;
`;

export const MainContent = styled.div`
    font-size: 16px;
    color: white;    
    background:  #12291A;
    line-height: 1.6;
    text-align: left;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #00DB0E;
    margin-bottom: 20px;
    
`;
