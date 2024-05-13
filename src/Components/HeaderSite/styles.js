import styled from 'styled-components'; 

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
  padding: 5px;
  width:max;

  img {
    width: 100%;
    max-width: 100px;
    min-width: 40px;
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
`;