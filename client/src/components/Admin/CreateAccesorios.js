/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {postAccesorio } from '../../actions/admin-action';
import { accesorios, /*getAllTypes */} from '../../actions/actions';




export function AccesoriosCreate(){

    const dispatch = useDispatch()
    const navigate = useNavigate();

    function validate(input){
        let errors = {}

        /*{
            "_id": "62d8a6b52029a4c825e23ed4",
            "producto": "Bote inflable",
            "categorias": [
              "seguridad"
            ],
            "imagenes": [
              "https://http2.mlstatic.com/D_NQ_NP_821055-MLA41327582058_042020-O.webp"
            ],
            "descripcion": "Inflables de remolque OBRIEN deluxe nylon-wrapped con asas y neopreno nudillos. Cubierta de nylon de doble costura y alta resistencia PVC virgen vejiga. Velocidad Válvula De Seguridad",
            "dimensiones": "Rider, 54 de diámetro, (desinflado)",
            "precio": "US$96.61",
            "stock": "5",
            "createdAt": "2022-07-21T01:07:01.988Z",
            "updatedAt": "2022-07-21T01:07:01.988Z"
          }*/

        if(!input.producto){
            errors.producto = 'Falta ingresar el nombre'
        }

        if(!input.descripcion){
            errors.descripcion='No ingresaste el resumen de la receta!'
        }

        if(((input.precio < 1) || (input.precio >100)) || isNaN(input.precio)){
            errors.precio = 'Ingresaste un precio invalido.'
        }

        if(!input.dimensiones){
            errors.dimensiones = 'Hace falta agregar una dimension.'
        }
       /* if (input.producto.charAt(0) !== input.producto.charAt(0).toUpperCase()){
            errors.producto = "La primera letra debe ser mayúscula"
        }*/
        if(!input.stock){
            errors.stock = 'Hace falta agregar el stock.'
        }

        
        return errors
    }

    const allAccesories = useSelector((state) => state.Allaccesories);
    console.log(allAccesories)
    
    //const allCategories = useSelector(state => state.types) FIJARSE EN EL STORE LAS CATEGORIAS

    useEffect( () => {
        //dispatch(getAllTypes())
        dispatch(accesorios())
    }, [dispatch])

    const [input, setInput] = useState({
        producto: '',
        descripcion: '',
        precio:0,
        dimensiones: '',
        stock: 0
        
        
    })

    
    const [errors, setErrors] = useState({});

   /* function handleDiet(e){
        if(!input.diets.includes(e.target.value)){
            setInput({
                ...input,
                diets: [...input.diets, e.target.value]
            })
        }
    }

    function handleDelete(d){
        setInput({
            ...input,
            diets: input.diets.filter(e => e !== d)
        })
    }*/

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
    }

    
    function handleSubmit(e) {    
        e.preventDefault();
        try {
          let findproducto = allAccesories.find((e) => e.producto.toLowerCase() === input.producto.toLowerCase()
          )
          if (findproducto) {
            return alert("Ya existe un producto con este nombre. ¡Cambialo!");
          }else if(Object.keys(errors).length === 0 && (input.producto!=='')){
            if(input.precio){parseInt(input.precio)}
            dispatch(postAccesorio(input))
            setInput({
                producto: '',
                descripcion: '',
                precio:0,
                dimensiones: '',
                stock:0
                
            })
            return (
                alert(`El Accesorio fue creado con exito.`), navigate(`/admin`)
                ) 
          
       } } catch (error) {
          console.log(error);
          return alert(
            "Algo falló al crear el accesorio."
          );
        }
      };
    
    return (
        <div classproducto="cont-form">
            
            
            {
                !allAccesories ? 
                <>
                    <div>
                        <h1>LOADING</h1>
                    </div>
                </>:
                <>
                    <div classproducto="create_recipe">
                        <form classproducto="form" onSubmit={handleSubmit}>
                            <h1>Crea el Accesorio</h1>
                            
                            <div >
                                <label>Nombre del Producto: </label>
                                <input 
                                    type='text' 
                                    name='producto' 
                                    placeholder='producto of recipe...' 
                                    value={input.producto}
                                    onChange={handleChange}
                                    className={errors.producto && 'danger'}
                                >
                                </input>
                                {errors.producto && <p classproducto="danger">{errors.producto}</p>}
                            </div>
                            
                            <div>
                                <label>Descripcion: </label>
                                <textarea 
                                    type='text' 
                                    name='descripcion' 
                                    value={input.descripcion}
                                    className={errors.descripcion && 'danger'} 
                                    onChange={handleChange}> 
                                </textarea>
                                {errors.descripcion && <p classproducto="danger">{errors.descripcion}</p>}
                            </div>

                            <div>
                                <label>Precio:</label>
                                <input 
                                    type='text' 
                                    name='precio' 
                                    value={input.precio} 
                                    onChange={handleChange}
                                    classnameo={errors.precio && 'danger'}
                                    >
                                </input>
                                {errors.precio && <p classproducto="danger">{errors.precio}</p>}
                            </div>
                            <div>
                                <label>Stock:</label>
                                <input 
                                    type='text' 
                                    name='stock' 
                                    value={input.stock} 
                                    onChange={handleChange}
                                    classnameo={errors.stock && 'danger'}
                                    >
                                </input>
                                {errors.stock && <p classproducto="danger">{errors.stock}</p>}
                            </div>

                           

                            <div>
                                <label>Dimensiones: </label>
                                <textarea 
                                    type='text' 
                                    name='dimensiones' 
                                    value={input.dimensiones} 
                                    onChange={handleChange}
                                    className={errors.dimensiones && 'danger'}
                                    >

                                </textarea>
                                {errors.dimensiones && <p classproducto="danger">{errors.dimensiones}</p>}
                            </div>
                            
                            

                            <button classproducto="button-submit" type="submit">Enviar Accesorio</button>
                            {/* {
                                ((errors.descripcion) || (errors.dimensiones) || (errors.healthScore) || (!input.producto)) ?
                                <button disabled classproducto="button-submit" type="submit">Enviar Receta</button>:
                                
                            } */}
                        </form>

                        
                    </div>
                </>
            }
            
        </div>
    )
}

export default AccesoriosCreate;