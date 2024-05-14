import styled from 'styled-components'; 

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  padding: 10px; /* Aumentei o padding para melhorar a aparência em telas menores */
  width: 100%; 

  img {
    width: 100px; 
    height: auto; 
  }

  ul {
    display: flex;
    justify-content: space-around;    
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: #FFF;
    font-size: 15px;
    padding: 5px;
  }

  a {
    color: #FFF;
    text-decoration: none;
    padding: 5px;
  }

  a:hover {
    background-color: #bef264;
    color: black;
  }

  @media screen and (max-width: 768px) {
    /* Estilos para telas menores que 768px de largura */
    flex-direction: column; /* Altera a direção do flex para coluna */
    padding: 5px; /* Ajusta o padding */
    align-items: flex-start; /* Alinha os itens à esquerda */
    
    ul {
      flex-direction: row; /* Retorna a direção da lista para linha */
      flex-wrap: wrap; /* Permite que os itens da lista quebrem para a próxima linha */
      justify-content: center; /* Centraliza os itens horizontalmente */
    }

    li {
      padding: 10px; /* Aumenta o espaço entre os itens da lista */
    }
  }
`;
