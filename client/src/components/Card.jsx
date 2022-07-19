import React from 'react';


export default function Card({ tipo, Marca, modelo, Motor, precio, astillero, fabricacion, localizacion, imagen, producto, descripcion, Tamaño })
{

    return (
        <div>
            {
                Marca ? <p>Marca: {Marca}</p> : ''
            }
            {
                modelo ? <p>modelo: {modelo}</p> : ''
            }
            {
                fabricacion ? <p>fabricacion: {fabricacion}</p> : ''
            }
            {
                astillero ? <p>astillero: {astillero}</p> : ''
            }
            {
                Motor ? <p>Motor: {Motor}</p> : ''
            }
            {
                localizacion ? <p>localizacion: {localizacion}</p> : ''
            }
            {
                tipo ? <p>tipo: {tipo}</p> : ''
            }
            {
                precio ? <p>precio: {precio}</p> : ''
            }
            {
                producto ? <p>producto: {producto}</p> : ''
            }
            {
                descripcion ? <p>descripcion: {descripcion}</p> : ''
            }
            {
                Tamaño ? <p>Tamaño: {Tamaño}</p> : ''
            }
            {
                imagen?.map(e =>
                    <img src={e} alt='img' />
                )
            }

        </div>
    )
}

