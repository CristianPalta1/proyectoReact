import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css';

// import './styles/Navbar.css';
// import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
          role="navigation"
        >
          <a className="navbar-brand" href="#">
            IRRIGATIC
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quienes Somos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contactanos
                </a>
              </li>
            </ul>
            {/* <span className="navbar-text">Navbar text with an inline element</span> */}
          </div>
        </nav>
        <br />
      </div>
    );
  }
}

export default Navbar;
