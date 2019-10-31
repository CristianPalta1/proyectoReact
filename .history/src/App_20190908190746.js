import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Inicio from './pages/Inicio'
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout />
          <Switch>
            <Route exact path="/" component={Inicio} />

          </Switch>
        {/* </Layout> */}
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;