import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #cffafe;
    border: 2px solid black;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const Title = styled.h2`
    color: black;
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
`;

export const TopDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ImgCondition = styled.img`
    width: 128px;
    height: 128px;
    @media (max-width: 768px) {
      width: 64px;
      height: 64px;
    }
`;

export const Content = styled.p`
    color: black;
    font-size: 16px;
    padding: 10px;
    font-weight: bold;
`;

export const ResponsiveContainer = styled(CardContainer)`
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ContentItem = styled.p`
    color: black;
    font-size: 15px;
    padding: 10px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
