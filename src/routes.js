import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Cursos from './pages/Cursos';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Apis from "./pages/Apis"
import PagTestes from "./pages/PagTestes"

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/cursos" component={Cursos} />
        <Route exact path="/projetos" component={Projetos} />
        <Route exact path="/contato" component={Contato} />
        <Route exact path="/apis" component={Apis} />
        <Route exact path="/testes" component={PagTestes} />
      </Switch>
    </BrowserRouter>
  );
}