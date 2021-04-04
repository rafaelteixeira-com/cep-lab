import React from 'react';
import Start from './pages/start/start.jsx';
import FindAddress from './pages/find-address';
import page404 from './pages/errors/404.jsx';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function MainApp() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" exact={true} component={Start} />
            <Route path="/buscar-endereco" component={FindAddress} />
            <Route path='*' component={page404} />
         </Switch>
      </BrowserRouter>
   );
}

export default MainApp;
