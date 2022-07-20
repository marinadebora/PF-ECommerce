import React from 'react';


export default function Card({ tipo, marca, modelo, motor, precio, astillero, fabricacion, localizacion, imagen, producto, descripcion, Tamaño })
{

    return (
        <div>
            {
                marca ? <p>Marca: {marca}</p> : ''
            }
            {
                tipo ? <p>tipo: {tipo}</p> : ''
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
                motor ? <p>Motor: {motor}</p> : ''
            }
            {
                localizacion ? <p>localizacion: {localizacion}</p> : ''
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

