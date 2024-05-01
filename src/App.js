import React from 'react';
import Routes from './routes';
import HeaderSite from './Components/HeaderSite/index'; 
import FooterSite from './Components/FooterSite/index';

function App() {
  return (
    <>
    <HeaderSite />
    
    <Routes/>
    <FooterSite />
    </>
  );
}

export default App;