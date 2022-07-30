

/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {postEmbarcacionEnV, Categorias } from '../../actions/admin-action';
import { barcosEnVenta, /*getAllTypes */} from '../../actions/actions';
import form from '../../styles/form.css';
import { Link } from 'react-router-dom';




export function EmbarcacionCreateEnV(){

    const dispatch = useDispatch()
    const navigate = useNavigate();

    function validate(input){

       /* {
            "_id": "62d8b46f497e920550b6f123",
            "tipo": "Catamaran a motor",
            "categorias": [],
            "modelo": "A10",
            "precio": "238386 usd",
            "astillero": "Aventura Catamarans",
            "fabricacion": 2022,
            "localizacion": "España",
            "imagenes": [
              "https://imagenes.cosasdebarcos.com/barcosOcasion/9/0/4/6/a10-aventura-catamarans-70789100210854487068545254684570x.jpg"
            ],
            "numero_de_pasajeros": 10,
            "eslora": "9.98 m",
            "manga": "5.3 m",
            "calado": "0.8 m",
            "numero_de_motores": 2,
            "marca_de_motor": "Yanmar",
            "potencia_total": "200 CV",
            "descripcion": "",
            "combustible": "Diesel",
            "__v": 0
          }*/
        let errors = {}

        if(!input.tipo){
            errors.tipo = 'Falta ingresar el tipo'
        }
        if(!input.modelo){
            errors.modelo='No ingresaste el modelo'
        }
        if(!input.precio){
            errors.precio = 'no ingresaste el precio.'
        }
        if(!input.astillero){
            errors.astillero = 'no ingresaste astillero'
        }
        if (!input.fabricacion){
            errors.fabricacion = "no ingresaste fabricacion"
        }
        if (!input.localizacion){
            errors.localizacion = "no ingresaste localizacion"
        }
        if (!input.numero_de_pasajeros){
            errors.numero_de_pasajeros = "no ingresaste numero_de_pasajeros"
        }
        if (!input.eslora){
            errors.eslora = "no ingresaste eslora"
        }
        if (!input.manga){
            errors.manga = "no ingresaste manga"
        }
        if (!input.calado){
            errors.calado = "no ingresastecalado"
        }
       
         if (!input.numero_de_motores){
            errors.numero_de_motores = "no ingresaste numero_de_motores"
        }
        if (!input.marca_de_motor){
            errors.marca_de_motor = "no ingresaste marca_de_motor"
        }
        if (!input.potencia_total){
            errors.potencia_total = "no ingresaste potencia_total"
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
        dispatch(barcosEnVenta())
    }, [dispatch])

    const [input, setinput] = useState({
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
        imagenes: [],
        categorias: [],

    })

    
    const [errors, setErrors] = useState({});

    function handleCat(e){
        if(!input.categorias.includes(e.target.value)){
            setinput({
                ...input,
                categorias: [...input.categorias, e.target.value]
            })
        }
    }

    function handleDelete(d){
        setinput({
            ...input,
            categorias: input.categorias.filter(e => e !== d)
        })
    }

    function handleChange(e){
        setinput({
            ...input,
            [e.target.name]:e.target.value
        })
       setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
        
    }
    const handleChangeArray=(e)=>{
        setinput({
          ...input,
          [e.target.name] : [e.target.value]
      })
    }
    const allCat = useSelector(state => state.categorias)
    const allEmbarcacionVenta = useSelector((state) => state.saleVessels);
    
    function handleSubmit(e) {   
        e.preventDefault(); 
        
        try {
            let findproducto = allEmbarcacionVenta.find((e) => e.tipo.toLowerCase() === input.tipo.toLowerCase()
            )
            if (findproducto) {
              return alert("Ya existe un producto con este nombre. ¡Cambialo!");
            }else if(Object.keys(errors).length === 0 && (input.tipo!=='')){
            
            
            dispatch(postEmbarcacionEnV(input))
            setinput({
                tipo: '',
                modelo: '',
                precio: "",
                astillero: '',
                fabricacion: 0,
                localizacion:'' ,
                numero_de_pasajeros: 0,
                eslora: "",
                manga: "",
                calado:"",
                numero_de_motores:0,
                marca_de_motor: "",
                potencia_total: "",
                descripcion: "",
                combustible: "",
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
            
            
            { !allCat ? 
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
                                <label>Tipo de la Embarcacion: </label>
                                <input 
                                    type='text' 
                                    name='tipo' 
                                    placeholder='Tipo de la embarcacion' 
                                    value={input.tipo}
                                    onChange={handleChange}
                                    className="input"
                                >
                                </input>
                                {errors.tipo && <p className="danger">{errors.tipo}</p>}
                            </div>
                            
                            <div>
                                <label>Descripcion: </label>
                                <textarea 
                                    type='text' 
                                    name='descripcion' 
                                    value={input.descripcion}
                                    className="input" 
                                    onChange={handleChange}> 
                                </textarea>
                                {errors.tipo && <p className="danger">{errors.tipo}</p>}
                            </div>

                            <div>
                                <label>Modelo:</label>
                                <input 
                                    type='text' 
                                    name='modelo' 
                                    value={input.modelo} 
                                    onChange={handleChange}
                                    className="input"
                                    >
                                </input>
                                {errors.modelo && <p className="danger">{errors.modelo}</p>}
                            </div>
                            <div>
                                <label>precio:</label>
                                <input
                                    type='text' 
                                    name='precio' 
                                    value={input.precio} 
                                    onChange={handleChange}
                                    className="input"
                                    >
                                </input>
                                {errors.precio && <p className="danger">{errors.precio}</p>}
                            </div>
                            <div>
                                <label>Astillero:</label>
                                <input
                                    type='text' 
                                    name='astillero' 
                                    value={input.astillero} 
                                    onChange={handleChange}
                                    className={errors.astillero && 'danger'}
                                    >
                                </input>
                                {errors.astillero && <p className="danger">{errors.astillero}</p>}
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
                                <label>Localizacion:</label>
                                <input 
                                    type='text' 
                                    name='localizacion' 
                                    value={input.localizacion} 
                                    onChange={handleChange}
                                    className={errors.localizacion && 'danger'}
                                    >
                                </input>
                                {errors.localizacion && <p className="danger">{errors.localizacion}</p>}
                            </div>
                            <div>
                                <label>Numero de Pasajeros:</label>
                                <input 
                                    type='number' 
                                    name='numero_de_pasajeros' 
                                    value={input.numero_de_pasajeros} 
                                    onChange={handleChange}
                                    className={errors.numero_de_pasajeros && 'danger'}
                                    >
                                </input>
                                {errors.numero_de_pasajeros && <p className="danger">{errors.numero_de_pasajeros}</p>}
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
                                <label>Calado:</label>
                                <input 
                                    type='text' 
                                    name='calado' 
                                    value={input.calado} 
                                    onChange={handleChange}
                                    className={errors.calado && 'danger'}
                                    >
                                </input>
                                {errors.calado && <p className="danger">{errors.calado}</p>}
                            </div>
                            <div>
                                <label>Numero de Motores:</label>
                                <input 
                                    type='number' 
                                    name='numero_de_motores' 
                                    value={input.numero_de_motores} 
                                    onChange={handleChange}
                                    className={errors.numero_de_motores && 'danger'}
                                    >
                                </input>
                                {errors.numero_de_motores && <p className="danger">{errors.numero_de_motores}</p>}
                            </div>
                            <div>
                                <label>Marca de Motor:</label>
                                <input 
                                    type='text' 
                                    name='marca_de_motor' 
                                    value={input.marca_de_motor} 
                                    onChange={handleChange}
                                    className={errors.marca_de_motor && 'danger'}
                                    >
                                </input>
                                {errors.marca_de_motor && <p className="danger">{errors.marca_de_motor}</p>}
                            </div>
                            <div>
                                <label>Potencia Total:</label>
                                <input 
                                    type='text' 
                                    name='potencia_total' 
                                    value={input.potencia_total} 
                                    onChange={handleChange}
                                    className={errors.potencia_total && 'danger'}
                                    >
                                </input>
                                {errors.potencia_totalr && <p className="danger">{errors.potencia_total}</p>}
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

                            <button id='buttonSubmitForm' className="button-submitev" type="submit">Create Product</button>
                            <Link to='/dashboard'>
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

export default EmbarcacionCreateEnV;
