/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {postAccesorio, Categorias } from '../../actions/admin-action';
import { accesorios, /*getAllTypes */} from '../../actions/actions';
import form from '../../styles/form.css';
import { Link } from 'react-router-dom';
import * as MdIcons from 'react-icons/md'
import axios from "axios"




export function AccesoriosCreate(){

    const dispatch = useDispatch()
    const navigate = useNavigate();

    function validate(input){
        let errors = {}

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

    const allAccesories = useSelector((state) => state.allAccesories);
    const allCat = useSelector(state => state.categorias)
    const arrayimage = allAccesories.find(e => e.producto)
    
   
    
    //console.log(allAccesories)
    
    //const allCategories = useSelector(state => state.types) FIJARSE EN EL STORE LAS CATEGORIAS

    useEffect( () => {
        dispatch(Categorias())
        dispatch(accesorios())
    }, [dispatch])
    
    const [imgSrc, setImgSrc] = useState("");
    const [imgFile, setImgFile] = useState("");
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        producto: '',
        descripcion: '',
        precio:0,
        dimensiones: '',
        stock: 0,
        imagenes: [],
        categorias: [],
        
        
        
    })
    

    
    console.log(input.imagenes)

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
        })

        setErrors(validate({
            ...input,
            [e.target.name]:e.target.value
        }))
    }
    const handleDeleteImage = (e) => {
        setInput({
          ...input,
          imagenes: input.imagenes.filter((tag) => tag !== e)
          
        });
        
      };
      //const asd = short_screenshots: input.short_screenshots.filter((tag) => tag !== e),
   
      const cloudinaryUpload2 = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", imgFile);
        formData.append("upload_preset", "upload-images");
    
        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/browsingyate/image/upload",
            formData
          );
          
          
          setInput({ ...input, imagenes: [...input.imagenes.concat(response.data.url)] });
          console.log("todo ok");
        } catch (error) {
          console.log(error);
        }
      };

      
     
      const previewFile2 = (e) => {
        const file = e.target.files[0]
        setImgFile(file);
        console.log(file)
        
        const reader = new FileReader();
    
        reader.onload = function () {
          setImgSrc(reader.result);
        };
    
        if (file) {
          reader.readAsDataURL(file);
        }
      };
      
      

    
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
                  stock:0,
                  imagenes: [],
                  categorias: [],
                  
                  
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
                !allCat ? 
                <>
                    <div>
                        <h1>LOADING</h1>
                    </div>
                </>:
                <>
                    <div classproducto="create_recipe">
                        <form className="form" onSubmit={handleSubmit}>
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
                            <div className="component_rigth_form">
                {/* MAIN IMAGE INPUT */}

             
               { input.imagenes.length < 5? <div>
                  <label>Main image</label>
                  
                  <input
                    className="inputImage"
                    type="file" 
                    placeholder="Main Image"
                    name="image"
                    id="main_image"
                    
                    onChange={previewFile2} 
                  />
                       <button
                        bgColor={"#1884BE"}
                        borderRadius={"none"}
                        boxShadow="xl"
                        color={"white"}
                        fontSize={"1rem"}
                        onClick={cloudinaryUpload2}
                        isDisabled={imgSrc ? false : true}
                        _hover={{
                          background: "white",
                          color: "#1884BE",
                        }}
                      >
                        Save
                      </button>


                 
                </div>
                : <div>
                  <h1>Alcanzaste el maximo de imagenes permitidas</h1>
                   </div>
                
                      }
                {/* 4 screenshots */}
                <div >

                  
                  <div className="screenShots_Image">

                    <div >
                      <img src={input.imagenes[0]} id="image1" className="image_form" />
                       {input.imagenes.length > 0 && <button
      className="botonX"
      onClick={(e) => handleDeleteImage(input.imagenes[0])}
      type="reset"
    >
      X
    </button>
    } 
                      <img src={input.imagenes[1]} id="image2" className="image_form" />
                      {input.imagenes.length > 1 && <button
      className="botonX"
      onClick={(e) => handleDeleteImage(input.imagenes[1])}
      type="reset"
    >
      X
    </button>
    } 
                      <img src={input.imagenes[2]} id="image3" className="image_form" />
                       {input.imagenes.length > 2 && <button
      className="botonX"
      onClick={(e) => handleDeleteImage(input.imagenes[2])}
      type="reset"
    >
      X
    </button>
    } 
                      <img src={input.imagenes[3]} id="image4" className="image_form" />
                      {input.imagenes.length > 3 && <button
      className="botonX"
      onClick={(e) => handleDeleteImage(input.imagenes[3])}
      type="reset"
    >
      X
    </button>
    } 
      <img src={input.imagenes[4]} id="image4" className="image_form" />
                      {input.imagenes.length > 3 && <button
      className="botonX"
      onClick={(e) => handleDeleteImage(input.imagenes[4])}
      type="reset"
    >
      X
    </button>
    } 
                    </div>

                  </div>
                </div>
   
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
                            
                            <button id='buttonSubmitForm' classproducto="button-submit" type="submit">Create Product</button>
                            <Link to='/admin'>
                                <button id='buttonBackForm'>Back</button>
                            </Link>

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

export default AccesoriosCreate;
