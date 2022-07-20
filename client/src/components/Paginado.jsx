import React from "react";

export default function Paginado({ characterPerPage, newState, paginado }){
  let page = [];

  for (let i = 0; i < Math.ceil(newState / characterPerPage); i++) {
    page.push(i + 1)
  }
  
  return <div>
    {page?.map(e => (
      <button onClick={() => paginado(e)} key={e}>{e}</button>

    ))}
  </div>;
};
