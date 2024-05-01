import styled from 'styled-components'; 

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px;
  width:max;
  margin-bottom: 20px;

  img {
    width: 50px;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
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
    background-color: #696969;
    color: black;
  }
`;