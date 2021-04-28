import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/home'
import Browse from './pages/browse'
import Signin from './pages/signin'
import  Signup from './pages/signup'


function App() {
  return (
    <Router>
      <Route exact path={ROUTES.Home}>
        <Home/>
      </Route>
      <Route exact path={ROUTES.Signin}>
        <Signin/>
      </Route>
      <Route exact path={ROUTES.Signup}>
        <Signup/>
      </Route>
      <Route exact path={ROUTES.Browse}>
        <Browse/>
      </Route>
    </Router>
  );
}

export default App;
