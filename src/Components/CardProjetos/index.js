import React, { useState } from 'react';
import { 
    CardContainer, 
    TitleContainer, 
    Title, 
    Button, 
    CarouselContainer, 
    ImageContainer, 
    Image, 
    ThumbnailContainer, 
    Thumbnail, 
    Content, 
    Link 
} from './styles';

const CardProjetos = ({ title, description, link, images }) => {
    const [expanded, setExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleToggle = () => setExpanded(!expanded);

    return (
        <CardContainer>
            <TitleContainer expanded={expanded}>
                <Title expanded={expanded}>{title}</Title>
                <Button onClick={handleToggle}>
                    {expanded ? '−' : '+'}
                </Button>
            </TitleContainer>
            {expanded && (
                <>
                    <CarouselContainer>
                        <ImageContainer>
                            <Image src={selectedImage} alt="Project" />
                        </ImageContainer>
                        <ThumbnailContainer>
                            {images.map((img, index) => (
                                <Thumbnail 
                                    key={index}
                                    src={img} 
                                    alt={`Thumbnail ${index + 1}`}
                                    onClick={() => setSelectedImage(img)}
                                    isActive={img === selectedImage}
                                />
                            ))}
                        </ThumbnailContainer>
                    </CarouselContainer>
                    <Content>
                        <pre>{description}</pre>
                    </Content>
                    <Link href={link} target="_blank" rel="noopener noreferrer">Repositório do Projeto</Link>
                </>
            )}
        </CardContainer>
    );
};

export default CardProjetos;
