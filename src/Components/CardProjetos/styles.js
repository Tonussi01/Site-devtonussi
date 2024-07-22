import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 900px; 
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
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: ${props => props.expanded ? 'center' : 'space-between'};
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
`;

export const Title = styled.h2`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    text-align: ${props => props.expanded ? 'center' : 'left'};
    flex: 1; 
`;

export const Button = styled.button`
    background: #00DB0E; 
    border: none;
    color: #12291A; 
    font-size: 28px;
    font-weight: bold;
    width: 40px; 
    height: 40px;
    border-radius: 50%; 
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
    transition: background 0.3s ease, transform 0.3s ease; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    
    &:hover {
        background: #00b300; 
        transform: scale(1.1); 
    }

    &:active {
        background: #009900; 
        transform: scale(1); 
    }
`;

export const CarouselContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 100%;
    max-height: 400px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain; 
`;

export const ThumbnailContainer = styled.div`
    display: flex;
    justify-content: center; 
    margin-top: 10px;
    width: 100%;
    overflow-x: auto;
`;

export const Thumbnail = styled.img`
    width: 80px;
    height: 60px;
    object-fit: cover;
    margin: 0 5px;
    border: 2px solid ${props => props.isActive ? '#00DB0E' : 'transparent'};
    cursor: pointer;
    transition: border 0.3s ease;
`;

export const Content = styled.div`
    color: white;
    font-size: 16px;
    margin-top: 20px;
    text-align: center;

    /* Estilo para a tag pre dentro do Content */
    pre {
        white-space: pre-wrap; 
        word-break: break-word; 
        margin: 0;
        font-size: 16px;
        color: white;
    }
`;

export const Link = styled.a`
    color: #85DB4F;
    text-decoration: none;
    font-size: 16px;
    margin-top: 10px;
    &:hover {
        text-decoration: underline;
    }
`;
