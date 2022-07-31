/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { useParams } from "react-router-dom";
import { updateEmbarcacionRT, Categorias} from '../../actions/admin-action';
import { productosDetail, /*getAllTypes */} from '../../actions/actions'
import { useNavigate } from 'react-router-dom';

export function UpdateEmbarcacionRenta(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let { id } = useParams()

    const allCat = useSelector(state => state.categorias)
    const detail = useSelector(state => state.detail)

    function validate(input){
        let errors = {}

        if(!input.marca){
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
        marca: '',
        modelo: '',
        fabricacionDelMotor:0,
        motor: '',
        fabricacion: 0,
        marcamotor:'' ,
        puntal: "",
        eslora:"",
        manga:"",
        hp:"",
        cantMotores:"",
        transmision:"",
        horas: "",
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
            dispatch(updateEmbarcacionRT(id, input))
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
                                <label>Nombre de la Embarcacion: </label>
                                <input 
                                    
                                    type='text' 
                                    name='marca' 
                                    placeholder={detail.marca}
                                    value={input.marca}
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
                                    placeholder= {detail.modelo}
                                    value={input.modelo} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>fabricacionDelMotor:</label>
                                <input 
                                    type='number' 
                                    name='fabricacionDelMotor' 
                                    placeholder= {detail.fabricacionDelMotor}
                                    value={input.fabricacionDelMotor} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>motor:</label>
                                <input 
                                    type='text' 
                                    name='motor' 
                                    placeholder= {detail.motor}
                                    value={input.motor} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Fabricacion:</label>
                                <input 
                                    type='number' 
                                    name='fabricacion' 
                                    placeholder= {detail.fabricacion}
                                    value={input.fabricacion} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>marcamotor:</label>
                                <input 
                                    type='text' 
                                    name='marcamotor' 
                                    placeholder= {detail.marcamotor}
                                    value={input.marcamotor} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Puntal:</label>
                                <input 
                                    type='text' 
                                    name='puntal'
                                    placeholder= {detail.puntal} 
                                    value={input.puntal} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Eslora:</label>
                                <input 
                                    type='text' 
                                    name='eslora'
                                    placeholder= {detail.eslora} 
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
                                    placeholder= {detail.manga} 
                                    value={input.manga} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>hp:</label>
                                <input 
                                    type='text' 
                                    name='hp' 
                                    placeholder= {detail.hp}
                                    value={input.hp} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Cantidad De Motores:</label>
                                <input 
                                    type='text' 
                                    name='cantMotores' 
                                    placeholder= {detail.cantMotores}
                                    value={input.cantMotores} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Transmision:</label>
                                <input 
                                    type='text' 
                                    name='transmision' 
                                    placeholder= {detail.transmision}
                                    value={input.transmision} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Horas:</label>
                                <input 
                                    type='text' 
                                    name='horas' 
                                    placeholder= {detail.horas}
                                    value={input.horas} 
                                    onChange={handleChange}
                                    
                                    >
                                </input>
                                
                            </div>
                            <div>
                                <label>Combustible:</label>
                                <input 
                                    type='text' 
                                    name='combustible'
                                    placeholder= {detail.combustible} 
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

export default UpdateEmbarcacionRenta;