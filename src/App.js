import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
<<<<<<< HEAD
import Inicio from './pages/Inicio'
=======
import Inicio from './pages/Inicio';
import Contactanos from './pages/Contactanos';
>>>>>>> 573e71f9126840e6b804ddfbab13a1397a1e4e00
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout />
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/contactanos" component={Contactanos} />

          </Switch>
        {/* </Layout> */}
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
