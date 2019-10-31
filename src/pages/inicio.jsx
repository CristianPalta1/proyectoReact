import React from "react";
<<<<<<< HEAD
// import Slider1 from '../assets/images/fondo4.jpg';
// import img1 from '../assets/images/3dprint.jpg';
// import img2 from '../assets/images/hardware.jpg';
// import img3 from '../assets/images/automatizacion.jpg';
// import img4 from '../assets/images/ecommerce.jpg';
=======
import './styles/Inicio.css';
import Slider1 from '../assets/images/fondo4.jpg';
import img1 from '../assets/images/3dprint.jpg';
import img2 from '../assets/images/hardware.jpg';
import img3 from '../assets/images/automatizacion.jpg';
import img4 from '../assets/images/ecommerce.jpg';
>>>>>>> 573e71f9126840e6b804ddfbab13a1397a1e4e00

class Inicio extends React.Component {
  render() {
    return (
      <div className=" container text-center">
      
        {/* <img src={Slider1} alt="First slide" height="auto" widht="100%" /> */}
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
<<<<<<< HEAD
              {/* <img src={img1} alt="First slide" height="auto" widht="50%" /> */}
            </div>
            <hr />
            <div className="col-6">
              {/* <img src={img2} alt="First slide" height="auto" widht="100%" /> */}
=======
              <img className="Col_inicio" src={img1} alt="First slide"  />
            </div>
            <hr />
            <div className="col-6">
              <img className ="Col_inicio" src={img2} alt="First slide"  />
>>>>>>> 573e71f9126840e6b804ddfbab13a1397a1e4e00
            </div>
            <div className="col-6">
<<<<<<< HEAD
              {/* <img src={img3} alt="First slide" height="auto" widht="100%" /> */}
            </div>
            <hr />
            <div className="col-6">
              {/* <img src={img4} alt="First slide" height="auto" widht="100%" /> */}
=======
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
>>>>>>> 573e71f9126840e6b804ddfbab13a1397a1e4e00
            </div>
            <div className="col-6">
              <h1>E - COMMERCE</h1>
              <p>
                Manejo de herramientas de diseño web. Facil integracion de pluggins de dieseño e interaccion con el usuario, logrando
                intercomunicacion con redes sociales, articulos favoritos y carrito de compras 

              </p>
              <button className="btn btn-primary">
                  Ver más ...
              </button></div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Inicio;
