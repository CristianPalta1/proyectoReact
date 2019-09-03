import React from "react";

import Navbar from "./Navbar";
// import InicioContainer from "./InicioContainer";

function Layout(props) {
  // const children = props.children;

  return (
    // <div className="container">
      <React.Fragment>
        <Navbar />
        {/* {props.children} */}
        {/* <InicioContainer /> */}
      </React.Fragment>
    // </div>
  );
}

export default Layout;
