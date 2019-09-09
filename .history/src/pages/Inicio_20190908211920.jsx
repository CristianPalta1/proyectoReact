import React from "react";
import './styles/Inicio.css';
import Slider1 from '../assets/images/fondo4.jpg';
import img1 from '../assets/images/3dprint.jpg';
import img2 from '../assets/images/hardware.jpg';
import img3 from '../assets/images/automatizacion.jpg';
import img4 from '../assets/images/ecommerce.jpg';

class Inicio extends React.Component {
  render() {
    return (
      <div className=" container text-center">
      
        <img src={Slider1} alt="First slide" height="auto" widht="100%" />
        <div className="text-center">
          <h1>SERVICIO</h1>
          <div className="row">
            <div className="col-6">
              <h1>Impresion 3d</h1>
              <p className="text-justify">
                Ayudamos a darle reconocmiento a tu marca personal u
                organizacion, te Ayudamos a regalar creatividad u obtener un
                objeto personalizado. Precios flexifles
              </p>
              <button className="btn btn-primary">
                  Ver más ...
              </button>
            </div>
            <div className="col-6">
              <img className="Col_inicio" src={img1} alt="First slide"  />
            </div>
            <hr />
            <div className="col-6">
              <img className ="Col_inicio" src={img2} alt="First slide"  />
            </div>
            <div className="col-6">
              <h1>Desarollo Hardaware y software</h1>
              <p>
                Tenemos conocimiento en desarrollo de PCB y elecetrónica en general. Además de manejo de herramientas de desarrollo
                web e IoT usando Arduino.  

              </p>
              <button className="btn btn-primary">
                  Ver más ...
              </button>
            </div>
            <hr />
            <div className="col-6">
              <img className="Col_inicio" src={img4} alt="First slide"  />
            </div>
            <div className="col-6">E - COMMERCE</div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Inicio;
