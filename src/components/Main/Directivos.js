import React from "react";
import { directivosData } from "../../utils/directivosData";
import "./directivos.css"

export default function Directivos() {
  return (
    <article id="directivos" >
      <h2 className='fs-2 border border-5 border-light text-center container container-fluid'> <b>Directivos</b></h2>
      {directivosData.map((p) => {
        return (
          <div className="directivo container container-fluid">
            <img src={p.photo} alt={p.name} className="img-fluid" />
            <div className="titulo">
              <h3 className="fs-4"><b>{p.cargo}</b></h3>
              <h3 className="fs-4">{p.name}</h3>
            </div>
            <p className="description fs-6">{p.description}</p>
          </div>
        );
      })}
    </article>
  );
}
