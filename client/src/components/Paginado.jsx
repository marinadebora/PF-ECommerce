import React from "react";
import "../styles/paginado.css";


export default function Paginado({ characterPerPage, newState, paginado }){
  let page = [];

  for (let i = 0; i < Math.ceil(newState / characterPerPage); i++) {
    page.push(i + 1)
  }
  
  return  <div id='mainPaginado'>
    {page?.map(e => (
      <button onClick={() => paginado(e)} key={e} id='buttonPage'>{e}</button>

    ))}
  </div>;
};
