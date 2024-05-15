import React from 'react';
import Routes from './routes';
import HeaderSite from './Components/HeaderSite/index'; 
import FooterSite from './Components/FooterSite/index';
import GlobalStyles from './GlobalStyles';


function App() {
  return (
    <>
     <GlobalStyles />
    <HeaderSite />    
    <Routes/>
    <FooterSite />
    </>
  );
}

export default App;