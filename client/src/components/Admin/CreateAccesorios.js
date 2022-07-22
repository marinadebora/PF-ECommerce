/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {postAccesorio } from '../../actions/admin-action';
import { todosLosProductos, /*getAllTypes */} from '../../actions/actions';




export function AccesoriosCreate(){

    const dispatch = useDispatch()
    const navigate = useNavigate();

    function validate(input){
        let errors = {}

        if(!input.name){
            errors.name = 'Falta ingresar el nombre'
        }

        if(!input.summary){
            errors.summary='No ingresaste el resumen de la receta!'
        }

        if(((input.healthScore < 1) || (input.healthScore >100)) || isNaN(input.healthScore)){
            errors.healthScore = 'Ingresaste un HealthScore invalido.'
        }

        if(!input.steps){
            errors.steps = 'Hace falta agregar el paso a paso de la receta.'
        }
        if (input.name.charAt(0) !== input.name.charAt(0).toUpperCase()){
            errors.name = "La primera letra debe ser mayúscula"
        }

        
        return errors
    }

    const allRecipes = useSelector((state) => state.all_recipes);
    //const allCategories = useSelector(state => state.types) FIJARSE EN EL STORE LAS CATEGORIAS

    useEffect( () => {
        dispatch(getAllTypes())
        dispatch(getAllRecipes())
    }, [dispatch])

    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore:0,
        image: '',
        steps: '',
        diets: []
    })

    
    const [errors, setErrors] = useState({});

    function handleDiet(e){
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
    }

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
          let findName = allRecipes.find((e) => e.name.toLowerCase() === input.name.toLowerCase()
          )
          if (findName) {
            return alert("Ya existe una receta con este nombre. ¡Cambialo!");
          }else if(Object.keys(errors).length === 0 && (input.name!=='')){
            if(input.healthScore){parseInt(input.healthScore)}
            dispatch(postRecipe(input))
            setInput({
                name: '',
                summary: '',
                healthScore:0,
                image: '',
                steps: '',
                diets: []
            })
            return (
                alert(`La receta fue creada con éxito.`), navigate(`/home`)
                ) 
          
       } } catch (error) {
          console.log(error);
          return alert(
            "Oh no! Algo falló al crear la receta. ¡Intentalo de nuevo!"
          );
        }
      };
    
    return (
        <div className="cont-form">
            <NavBar />
            
            {
                !allDiets ? 
                <>
                    <div>
                        <img src={Loader} alt='loader'></img>
                    </div>
                </>:
                <>
                    <div className="create_recipe">
                        <form className="form" onSubmit={handleSubmit}>
                            <h1>Crea tu propia receta!</h1>
                            
                            <div >
                                <label>Name of recipe: </label>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Name of recipe...' 
                                    value={input.name}
                                    onChange={handleChange}
                                    className={errors.name && 'danger'}
                                >
                                </input>
                                {errors.name && <p className="danger">{errors.name}</p>}
                            </div>
                            
                            <div>
                                <label>Summary: </label>
                                <textarea 
                                    type='text' 
                                    name='summary' 
                                    value={input.summary}
                                    className={errors.summary && 'danger'} 
                                    onChange={handleChange}> 
                                </textarea>
                                {errors.summary && <p className="danger">{errors.summary}</p>}
                            </div>

                            <div>
                                <label>HealthScore:</label>
                                <input 
                                    type='text' 
                                    name='healthScore' 
                                    value={input.healthScore} 
                                    onChange={handleChange}
                                    className={errors.healthScore && 'danger'}
                                    >
                                </input>
                                {errors.healthScore && <p className="danger">{errors.healthScore}</p>}
                            </div>

                            <div>
                                <label>Image: </label>
                                <input type='text' name='image'value={input.image} onChange={handleChange}></input>
                            </div>

                            <div>
                                <label>Steps: </label>
                                <textarea 
                                    type='text' 
                                    name='steps' 
                                    value={input.steps} 
                                    onChange={handleChange}
                                    className={errors.steps && 'danger'}
                                    >

                                </textarea>
                                {errors.steps && <p className="danger">{errors.steps}</p>}
                            </div>
                            
                            <div className="class-select">
                                <label>Tipos de dieta</label>
                                <select onChange={handleDiet} Value='Onetype' >
                                    <option disabled>Eligir tipos de dietas</option>
                                    {
                                        allDiets && allDiets?.map(e => {
                                            return (
                                                <option key={e.name} value={e.name} name={e.name}>{e.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <button className="button-submit" type="submit">Enviar Receta</button>
                            {/* {
                                ((errors.summary) || (errors.steps) || (errors.healthScore) || (!input.name)) ?
                                <button disabled className="button-submit" type="submit">Enviar Receta</button>:
                                
                            } */}
                        </form>

                        <div className="my-diets">
                            <h3>MIS DIETAS</h3>
                            <div className="dietitas">
                                {input.diets.map(d => {
                                    return (
                                    <div key={d} className="tipo_dieta">
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

export default RecipeCreate;