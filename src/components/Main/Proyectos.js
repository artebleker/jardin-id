import React from "react";
import "./proyectos.css"
import {proyectosData} from "../../utils/proyectosData.js"

 function Proyectos() {
  return (
    <>
    <article id="proyectos" className="container-fluid container proyectos">
    <h2  className='fs-2 border border-5 border-light text-center container container-fluid'> <b>Proyectos</b></h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide d-flex p-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className=" imgDesc">
            <p className="descripcion text-wrap fs-6">{proyectosData[0].description}</p>
            <img src={proyectosData[0].photo} className="d-block w-70 img-fluid" alt="..." />
            </div>
            </div>
          <div className="carousel-item">
          <div className=" imgDesc">
            <p className="descripcion text-wrap fs-6">{proyectosData[1].description}</p>
            <img src={proyectosData[1].photo} className="d-block w-70 img-fluid" alt="..." />
            </div>
          </div>
          <div className="carousel-item">
          <div className=" imgDesc">
            <p className="descripcion text-wrap fs-6">{proyectosData[2].description}</p>
            <img src={proyectosData[2].photo} className="d-block w-70 img-fluid" alt="..." />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </article>
      
    </>
  );
}
export default Proyectos
