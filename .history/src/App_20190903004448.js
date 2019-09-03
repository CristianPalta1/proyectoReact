import React from 'react';
import logo from './logo.svg';
import Inicio from './pages/inicio'
import './App.css';

function App() {
  return (
    <BrowserRouter>
          {/* <Layout> */}
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/Inicio_Sesion" component={InicioSesion} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Registro_Usuarios" component={Registro} />
            <Route exact path="/Dashboard/Ingreso_Documentos" component={IngresoDoc} />
            <Route exact path="/Dashboard/Notificacion_Documentos" component={NotificDoc} />
            <Route exact path="/Dashboard/Datos_Api" component={Loader} />
            <Route component={NotFound} />
          </Switch>
          {/* </Layout> */}
        </BrowserRouter>
  );
}

export default App;
