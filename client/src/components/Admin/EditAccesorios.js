/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { useParams } from "react-router-dom";
import { updateAccesorio, Categorias} from '../../actions/admin-action';
import { productosDetail, /*getAllTypes */} from '../../actions/actions'
import { useNavigate } from 'react-router-dom';

export function UpdateAccesorio(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let { id } = useParams()

    const allCat = useSelector(state => state.categorias)
    const detail = useSelector(state => state.detail)

    function validate(input){
        let errors = {}

        if(((input.precio < 1) || (input.precio >10000)) || isNaN(input.precio)){
            errors.precio = 'Ingresaste un precio invalido.'
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
        producto: '',
        descripcion: '',
        precio: "",
        dimensiones: '',
        stock: "",
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
            dispatch(updateAccesorio(id, input))
            return (
                alert(`El accesorio fue actualizado con éxito.`), navigate(`/admin`)
                ) 
            
        }
        

        
    }

    function cancel(e){
        e.preventDefault()
        navigate(`/admin`)
    }
    

    return (
        <div className="cont-form">
            { !allCat ? 
                <>
                    <div>
                        <h1>LOADING</h1>
                    </div>
                </>:
                <>
            <div className="create_detail">
                        <form className="form" onSubmit={handleSubmit}>
                            <h1>Actualiza tu Accesorio</h1>
                            
                            <div >
                                <label>Nombre del accesorio: </label>
                                <input 
                                    type='text' 
                                    name='producto' 
                                    placeholder= {detail.producto}
                                    value={input.producto}
                                    onChange={handleChange}
                                >
                                </input>

                            </div>
                            
                            <div>
                                <label>Descripcion: </label>
                                <textarea 
                                    type='text' 
                                    name='descripcion'
                                    placeholder= {detail.descripcion}
                                    value={input.descripcion}
                                    onChange={handleChange}
                                > 
                                </textarea>
                            </div>

                            <div>
                                <label>Precio:</label>
                                <input 
                                    type='text' 
                                    name='precio'
                                    placeholder= {detail.precio}
                                    value={input.precio}
                                    onChange={handleChange}
                                    className={errors.precio && 'danger'}
                                    >
                                </input>
                                {errors.precio && <p className="danger">{errors.precio}</p>}
                            </div>

                            <div>
                                <label>Stock:</label>
                                <input 
                                    type='text' 
                                    name='stock' 
                                    placeholder= {detail.stock}
                                    value={input.stock} 
                                    onChange={handleChange}
                                    className={errors.stock && 'danger'}
                                    >
                                </input>
                                {errors.stock && <p className="danger">{errors.stock}</p>}
                            </div>

                            <div>
                                <label>Dimensiones: </label>
                                <textarea 
                                    type='text' 
                                    name='dimensiones'
                                    placeholder= {detail.dimensiones}
                                    value={input.dimensiones}
                                    onChange={handleChange}
                                >

                                </textarea>
                                
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
                                <button className="button-submit" type="submit">Enviar Accesorio</button>
                            
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

export default UpdateAccesorio;