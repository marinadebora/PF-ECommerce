

/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {postEmbarcacionRT, Categorias } from '../../actions/admin-action';
import { barcosEnAlquiler, /*getAllTypes */} from '../../actions/actions';
import form from '../../styles/form.css';
import { Link } from 'react-router-dom';



export function EmbarcacionCreateRT(){

    const dispatch = useDispatch()
    const navigate = useNavigate();

    function validate(input){

       /* {
            {
    "_id": "62d8ae81d780cdfae6405235",
    "marca": "Genesis",
    
    "modelo": "Genesis290",
    "fabricacion": "2018",
    "fabricacionDelMotor": 2018,
    "motor": "4 tiempos",
    
    "eslora": "9.05 m",
    "manga": "2.6 m",
    "puntal": "1. 72 m",
    "cantMotores": "1",
    "hp": "300",
    "marcamotor": "VOLVO PENTA",
    "descripcion": "",
    "combustible": "Nafta",
    "horas": "40",
    "transmision": "Pata Duo Prop.-",
    "createdAt": "2022-07-21T01:40:17.567Z",
    "updatedAt": "2022-07-21T01:40:17.567Z"
  }
          }*/
        let errors = {}

        if(!input.marca){
            errors.marca = 'Falta ingresar el marca'
        }
        if(!input.modelo){
            errors.modelo='No ingresaste el modelo'
        }
        if(!input.fabricacionDelMotor){
            errors.fabricacionDelMotor = 'no ingresaste el fabricacionDelMotor.'
        }
        if(!input.motor){
            errors.motor = 'no ingresaste motor'
        }
        if (!input.fabricacion){
            errors.fabricacion = "no ingresaste fabricacion"
        }
        if (!input.marcamotor){
            errors.marcamotor = "no ingresaste marcamotor"
        }
        if (!input.puntal){
            errors.puntal = "no ingresaste puntal"
        }
        if (!input.eslora){
            errors.eslora = "no ingresaste eslora"
        }
        if (!input.manga){
            errors.manga = "no ingresaste .manga"
        }
        if (!input.hp){
            errors.hp = "no ingresaste hp"
        }
        if (!input.cantMotores){
            errors.cantMotores = "no ingresaste cantMotores"
        }
        
        if (!input.transmision){
            errors.transmision = "no ingresaste transmision"
        }
        if (!input.horas){
            errors.horas = "no ingresaste horas"
        }
        if (!input.descripcion){
            errors.descripcion = "no ingresaste descripcion"
        }
        if (!input.combustible){
            errors.combustible = "no ingresaste combustible"
        }




        
        return errors
    }

    //const allRecipes = useSelector((state) => state.all_recipes); FIJARSE STORE ALL PRODUCTS
    //const allCategories = useSelector(state => state.types) FIJARSE EN EL STORE LAS CATEGORIAS

    useEffect( () => {
        dispatch(Categorias())
        dispatch(barcosEnAlquiler())
    }, [dispatch])

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
        transmision:" ",
        horas: " ",
        descripcion: " ",
        combustible: " ",
        categorias: [],
        imagenes: [],


    })

    
    const [errors, setErrors] = useState({});

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
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        }) //LAS DIETAS VENDRIAN A SER LAS CATEGORIAS, TODAVI NO SE DEFINIO NOMBRE NI MODELO

        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
    }
    const handleChangeArray=(e)=>{
        setInput({
          ...input,
          [e.target.name] : [e.target.value]
      })
    }

    const allEmbarcacionRenta = useSelector((state) => state.rentVessels);
    const allCat = useSelector(state => state.categorias)
    
    function handleSubmit(e) {    
        e.preventDefault();
        try  {
            let findName = allEmbarcacionRenta.find((e) => e.marca.toLowerCase() === input.marca.toLowerCase()
            )
            if (findName) {
              return alert("Ya existe una embarcacion con este nombre. ¡Cambialo!");
            }else if(Object.keys(errors).length === 0 && (input.marca!=='')){
              
              dispatch(postEmbarcacionRT(input))
              setInput({
                  marca: '',
                  modelo: '',
                  fabricacionDelMotor:0,
                  motor: '',
                  fabricacion: 0,
                  marcamotor:'' ,
                  puntal: 0,
                  eslora:0,
                  manga:0,
                  hp:0,
                  cantMotores:0,
                  transmision:" ",
                  horas: " ",
                  descripcion: " ",
                  combustible: " ",
                  categorias: [],
                  imagenes: [],
              })
              return (
                  alert(`La Embarcacion fue creada con éxito.`), navigate(`/admin`)
                  ) 
            
         } } catch (error) {
            console.log(error);
            return alert(
              "Algo falló al crear la embarcacion. "
            );
          }
      };
    
    return (
        <div className="cont-form">
            
            
            {!allCat ? 
                <>
                    <div>
                        <h1>LOADING</h1>
                    </div>
                </>:
                
                <>
                    <div className="create_embarcacionEnv">
                        <form className="form" onSubmit={handleSubmit}>
                            <h1>Crea tu Embarcacion</h1>
                            
                            <div >
                                <label>Nombre de la Embarcacion: </label>
                                <input 
                                    type='text' 
                                    name='marca' 
                                    placeholder='marca de la embarcacion' 
                                    value={input.marca}
                                    onChange={handleChange}
                                    className={errors.marca && 'danger'}
                                >
                                </input>
                                {errors.marca && <p className="danger">{errors.marca}</p>}
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
                                {errors.marca && <p className="danger">{errors.marca}</p>}
                            </div>

                            <div>
                                <label>Modelo:</label>
                                <input 
                                    type='text' 
                                    name='modelo' 
                                    value={input.modelo} 
                                    onChange={handleChange}
                                    className={errors.modelo && 'danger'}
                                    >
                                </input>
                                {errors.modelo && <p className="danger">{errors.modelo}</p>}
                            </div>
                            <div>
                                <label>fabricacionDelMotor:</label>
                                <input 
                                    type='number' 
                                    name='fabricacionDelMotor' 
                                    value={input.fabricacionDelMotor} 
                                    onChange={handleChange}
                                    className={errors.fabricacionDelMotor && 'danger'}
                                    >
                                </input>
                                {errors.fabricacionDelMotor && <p className="danger">{errors.fabricacionDelMotor}</p>}
                            </div>
                            <div>
                                <label>motor:</label>
                                <input 
                                    type='text' 
                                    name='motor' 
                                    value={input.motor} 
                                    onChange={handleChange}
                                    className={errors.motor && 'danger'}
                                    >
                                </input>
                                {errors.motor && <p className="danger">{errors.motor}</p>}
                            </div>
                            <div>
                                <label>Fabricacion:</label>
                                <input 
                                    type='number' 
                                    name='fabricacion' 
                                    value={input.fabricacion} 
                                    onChange={handleChange}
                                    className={errors.fabricacion && 'danger'}
                                    >
                                </input>
                                {errors.fabricacion && <p className="danger">{errors.fabricacion}</p>}
                            </div>
                            <div>
                                <label>marcamotor:</label>
                                <input 
                                    type='text' 
                                    name='marcamotor' 
                                    value={input.marcamotor} 
                                    onChange={handleChange}
                                    className={errors.marcamotor && 'danger'}
                                    >
                                </input>
                                {errors.marcamotor && <p className="danger">{errors.marcamotor}</p>}
                            </div>
                            <div>
                                <label>Puntal:</label>
                                <input 
                                    type='text' 
                                    name='puntal' 
                                    value={input.puntal} 
                                    onChange={handleChange}
                                    className={errors.puntal && 'danger'}
                                    >
                                </input>
                                {errors.puntal && <p className="danger">{errors.puntal}</p>}
                            </div>
                            <div>
                                <label>Eslora:</label>
                                <input 
                                    type='text' 
                                    name='eslora' 
                                    value={input.eslora} 
                                    onChange={handleChange}
                                    className={errors.eslora && 'danger'}
                                    >
                                </input>
                                {errors.eslora && <p className="danger">{errors.eslora}</p>}
                            </div>
                            <div>
                                <label>Manga:</label>
                                <input 
                                    type='text' 
                                    name='manga' 
                                    value={input.manga} 
                                    onChange={handleChange}
                                    className={errors.manga && 'danger'}
                                    >
                                </input>
                                {errors.manga && <p className="danger">{errors.manga}</p>}
                            </div>
                            <div>
                                <label>hp:</label>
                                <input 
                                    type='text' 
                                    name='hp' 
                                    value={input.hp} 
                                    onChange={handleChange}
                                    className={errors.hp && 'danger'}
                                    >
                                </input>
                                {errors.hp && <p className="danger">{errors.hp}</p>}
                            </div>
                            <div>
                                <label>Cantidad De Motores:</label>
                                <input 
                                    type='text' 
                                    name='cantMotores' 
                                    value={input.cantMotores} 
                                    onChange={handleChange}
                                    className={errors.cantMotores && 'danger'}
                                    >
                                </input>
                                {errors.cantMotores && <p className="danger">{errors.cantMotores}</p>}
                            </div>
                            <div>
                                <label>Transmision:</label>
                                <input 
                                    type='text' 
                                    name='transmision' 
                                    value={input.transmision} 
                                    onChange={handleChange}
                                    className={errors.transmision && 'danger'}
                                    >
                                </input>
                                {errors.transmision && <p className="danger">{errors.transmision}</p>}
                            </div>
                            <div>
                                <label>Horas:</label>
                                <input 
                                    type='text' 
                                    name='horas' 
                                    value={input.horas} 
                                    onChange={handleChange}
                                    className={errors.horas && 'danger'}
                                    >
                                </input>
                                {errors.horas && <p className="danger">{errors.horas}</p>}
                            </div>
                            <div>
                                <label>Combustible:</label>
                                <input 
                                    type='text' 
                                    name='combustible' 
                                    value={input.combustible} 
                                    onChange={handleChange}
                                    className={errors.combustible && 'danger'}
                                    >
                                </input>
                                {errors.combustible && <p className="danger">{errors.combustible}</p>}
                            </div>
                            <div >
                           <label >Imagen</label>
                           <input  type="url" value={input.imagenes} name="imagenes" onChange={(e)=>handleChangeArray(e)}></input> 
                           {/*<button name="imagenes" onClick={(e)=>handleChangeArray(e)}>SUBIR FOTO</button>*/}
       
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

                            <button id='buttonSubmitForm' className="button-submit" type="submit">Create Product</button>
                            <Link to='/admin'>
                                <button id='buttonBackForm'>Back</button>
                            </Link>

                            {/* {
                                ((errors.summary) || (errors.steps) || (errors.healthScore) || (!input.name)) ?
                                <button disabled className="button-submit" type="submit">Enviar Receta</button>:
                                
                            } */}
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

export default EmbarcacionCreateRT;
