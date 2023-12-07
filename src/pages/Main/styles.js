import styled, {keyframes, css} from 'styled-components';

export const Container = styled.div`
  max-width: 50%;
  background: #F5DEB3;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  `;

  
  export const Header = styled.div`
   img{
      padding: 20px;      
      display:flex;      
      width: 30%; 
      margin: 10px auto;
      align-content: center;
      
    }

    ul{
      display: flex;
      max-width: 100%;
      list-style-type: none;   
      background:	#000000;
    }
      
    li{
      display: flex;
      color: #FFF;
      font-size: 30px;     
      padding: 10px;
      align-items: center;
      
      margin: 5px auto;
      
    }

    a{        
      color: #FFF;
      text-align: center;
      padding: 20px;
      text-decoration: none;
      
    }

    a:hover {
      background-color:	#98FB98;
      color: black;
    }
  `;


export const Form = styled.form`
  max-width: 80%;
  background: #DEB887;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0,0,0, 0.2);
  padding: 30px;
  margin: 80px auto;

  h1{
    font-size: 30px;
    display:flex;
    justify-content: center;
    padding: 20px;
    }
    div{
      font-size: 25px;      
      display:flex;
      text-align:justify;
      padding: 30px;
    }


`;



export const Footer = styled.div`
  width: 100%;
  background: #000;
  padding: 30px; 


  h1{
    font-size: 25px;
    color: #fff;
    text-align: center;
  }

  ul{
      list-style-type: none;
      width: 100%;         
      display:flex;            
      flex-direction:column;          
      margin: 10px auto;      
    }

  li{
    font-size: 20px; 
    width: 100%;  
    padding: 15px; 
    display:flex;   
    justify-content: center; 
    align-items: center;
  }

  img{
    width: 3%;
    margin: 2px;
  }

  a{
    color: #fff;
    display:flex;  
    width: 15%;
    text-decoration: none;
  }

  p{
    display:flex; 
    font-size: 12px;
    color: #800000;
    justify-content: center; 
  }  
`;



