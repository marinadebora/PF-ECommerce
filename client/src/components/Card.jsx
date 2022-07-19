import React from 'react';


export default function Card({tipo, modelo, precio, astillero, fabricacion, localizacion, imagen}){
    
    return(
        <div>
                <p>{tipo}</p>
               <p>{modelo},</p> 
               <p>{precio}</p> 
               <p>{astillero}</p> 
               <p>{fabricacion}</p> 
               <p>{localizacion}</p> 
               <img src={imagen} alt='img'/>
        </div>
    )
}

