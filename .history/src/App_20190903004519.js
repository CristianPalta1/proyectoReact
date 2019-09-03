import React from 'react';
import logo from './logo.svg';
import Inicio from './pages/inicio'
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
