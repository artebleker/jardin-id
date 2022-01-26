import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"

export default function NavBar() {
  return (
    <>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="btn nav-item">
          <a className="nav-link active fs-4" aria-current="page" href="#">Inicio</a>
        </li>
        <li className=" btn nav-item">
          <a className="nav-link active fs-4" href="#proyectos">Proyectos</a>
        </li>
        <li className="btn nav-item">
          <a className="nav-link active fs-4"  href="#directivos">Directivos</a>
        </li>
        <li className="btn nav-item">
          <a className="nav-link active fs-4"  href="#contactenos">Contactenos</a>
        </li>
      </ul>
    </div>
          </div>
        </nav>
    
       

    </>
  );
}
