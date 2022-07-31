/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { useParams } from "react-router-dom";
import { updateEmbarcacionEnV, Categorias} from '../../actions/admin-action';
import { productosDetail, /*getAllTypes */} from '../../actions/actions'
import { useNavigate } from 'react-router-dom';

export function UpdateEmbarcacionVenta(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let { id } = useParams()

    
    const detail = useSelector(state => state.detail)
    const allCat = useSelector(state => state.categorias)

    function validate(input){
        let errors = {}

        if(!input.tipo){
            errors.marca = 'Falta ingresar el marca'
        }

        return errors
    }
    
    useEffect ( () => {
        dispatch(productosDetail(id))
    },[])
    useEffect( () => {
        dispatch(Categorias())
    }, [])

   

    const [input, setInput] = useState({
        tipo: '',
        modelo: '',
        precio: "",
        astillero: '',
        fabricacion: 0,
        localizacion: '',
        numero_de_pasajeros: 0,
        eslora:"",
        manga:"",
        calado:"",
        numero_de_motores:0,
        marca_de_motor: "",
        potencia_total: "",
        descripcion: "",
        combustible: "",
        categorias: detail.categorias
    })

    const [errors, setErrors] = useState({});

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
    function handleCat(e){
        if(!input.categorias.includes(e.target.value)){
            setInput({
                ...input,
                categorias: [...input.categorias, e.target.value]
            })
        }
    }

    function handleDelete(d){
        setInput({
            ...input,
            categorias: input.categorias.filter(e => e !== d)
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        
        if(Object.keys(errors).length === 0){
            if(input.precio){parseInt(input.precio)}
            dispatch(updateEmbarcacionEnV(id, input))
            return (
                alert(`La embarcacion fue actualizada con éxito.`), navigate(`/admin`)
                ) 
            
        }
        

        
    }

    function cancel(e){
        e.preventDefault()
        navigate(`/admin`)
    }
    
    
    

    return (

        
        <div className="cont-form">
            {!allCat  ? 
                <>
                    <div>
                        <h1>LOADING</h1>
                    </div>
                </>:
                
                <>
            <div className="create_detail">
                        <form className="form" onSubmit={handleSubmit}>
                            <h1>Actualiza tu Embarcacion</h1>
                            
                            <div >
                                <label>Tipo de la Embarcacion: </label>
                                <input 
                                    
                                    type='text' 
                                    name='tipo' 
                                    placeholder={detail.tipo}
                                    value={input.tipo}
                                    onChange={handleChange}
                                    
                                >
                                </input>

                            </div>
                            
                            <div>
                                <label>Descripcion: </label>
                                <textarea 
                                    type='text' 
                                    name='descripcion'
                                    placeholder={detail.descripcion} 
                                    value={input.descripcion}
                                    onChange={handleChange}> 
                                </textarea>
                               
                            </div>

                            <div>
                                <label>Modelo:</label>
                                <input 
                                    type='text' 
                                    name='modelo'
                                    placeholder={detail.modelo}
                                    value={input.modelo} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Precio:</label>
                                <input
                                    type='text' 
                                    name='precio'
                                    placeholder={detail.precio} 
                                    value={input.precio} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Astillero:</label>
                                <input
                                    type='text' 
                                    name='astillero' 
                                    placeholder={detail.astillero}
                                    value={input.astillero} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Fabricacion:</label>
                                <input
                                    type='number' 
                                    name='fabricacion' 
                                    placeholder={detail.fabricacion}
                                    value={input.fabricacion} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Localizacion:</label>
                                <input 
                                    type='text' 
                                    name='localizacion' 
                                    placeholder={detail.localizacion}
                                    value={input.localizacion} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Numero de Pasajeros:</label>
                                <input 
                                    type='number' 
                                    name='numero_de_pasajeros'
                                    placeholder={detail.numero_de_pasajeros} 
                                    value={input.numero_de_pasajeros} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Eslora:</label>
                                <input 
                                    type='text' 
                                    name='eslora' 
                                    placeholder={detail.eslora}
                                    value={input.eslora} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Manga:</label>
                                <input 
                                    type='text' 
                                    name='manga' 
                                    placeholder={detail.manga}
                                    value={input.manga} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Calado:</label>
                                <input 
                                    type='text' 
                                    name='calado'
                                    placeholder={detail.calado} 
                                    value={input.calado} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Numero de Motores:</label>
                                <input 
                                    type='number' 
                                    name='numero_de_motores'
                                    placeholder={detail.numero_de_motores} 
                                    value={input.numero_de_motores} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Marca de Motor:</label>
                                <input 
                                    type='text' 
                                    name='marca_de_motor' 
                                    placeholder={detail.marca_de_motor}
                                    value={input.marca_de_motor} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Potencia Total:</label>
                                <input 
                                    type='text' 
                                    name='potencia_total'
                                    placeholder={detail.potencia_total} 
                                    value={input.potencia_total} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Combustible:</label>
                                <input 
                                    type='text' 
                                    name='combustible' 
                                    placeholder={detail.combustible}
                                    value={input.combustible} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div className="class-select">
                                <label>Categorias</label>
                                <select onChange={handleCat} value='Onetype' >
                                    <option>Eligir Categorias</option>
                                    {
                                        allCat && allCat?.map(e => {
                                            return (
                                                <option key={e} value={e} name={e}>{e}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            
                         

                                <button className="button-submit" onClick={cancel}>Cancelar</button>
                                <button className="button-submit" type="submit">Enviar Embarcacion</button>
                            
                        </form>
                        <div className="my-categ">
                            <h3>Mis Categorias</h3>
                            <div className="cat">
                                {input.categorias.map(d => {
                                    return (
                                    <div key={d} className="tipo_cat">
                                        <button className="cerrar" onClick={() => handleDelete(d)}>X</button>
                                        <p>{d}</p> 
                                    </div>
                                    )
                                }
                            )}
                            </div>
                        </div>

                       
                    </div>
                    </>
      }
        </div>
    )
}

export default UpdateEmbarcacionVenta;