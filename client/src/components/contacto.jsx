import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchstoken } from "./fetchmetod";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import styles from './Contacto.module.css'
import UserNavBar from "../UserNavBar/UserNavBar";
import NavBar from "../NavBar/NavBar";
import Carrousel from "../carrousel/Carrousel"
import BtnBack from "../back/BtnBack";
import { useSelector } from "react-redux";
import { constactoLang } from "./contactoLang";
import mapa from '../../images/mapa.jpg'



export default function Contacto () {
  const modo = useSelector(state => state.modo)
    const history = useHistory()
    const lan = useSelector((state) => state.language);
    const [user, setUser] = useState()

    const [correo, SetCorreo] = useState({
      contact_user: "",
      correo_user:"",
      asunto_user:"",
      descripcion_user:"",
    })

const onChangeCorreo = (e) => {
    const { name, value } = e.target;
    SetCorreo({
      ...correo,
      [name]: value,
    })
   }


const correoEmail = async(e) =>{
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) =>{
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    try{
      const resultCorreo = await fetchstoken('correo', correo , "POST");
      console.log(resultCorreo);
      if(!resultCorreo.ok){
        throw Error(resultCorreo.errors.msg);
      }
      Toast.fire({
        icon: 'success',
        title: 'El correo se envio con exito'
      });
      SetCorreo({
        contact_user: "",
        correo_user:"",
        asunto_user:"",
        descripcion_user:"", 
      });
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: error.message
      })
    }
  }

  useEffect(() => {
    verificarQueHayaUsuarioLogueado();
  }, []);

  const verificarQueHayaUsuarioLogueado = () => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        let user = await axios.get(
          `http://localhost:3001/user/${currentUser.email}`
        );
        if(user.data.banned){

          history.push("/banned")

        }
      }
    });
  };


return(
  <>
  <div className={styles.fondo}>
    
    {user ? <UserNavBar /> : <NavBar />}
  
    <BtnBack/>
    <div className={styles.containerContact}>

      <div className={styles.info}>
        <h1> {constactoLang[lan].informacionDeContacto}</h1>
        <h3>{constactoLang[lan].llamanos}</h3>
        <p>+54 9 236 470-3985</p>
        <h3>{constactoLang[lan].ubicacion}</h3>
        <p>Av. del Libertador 3724, CABA</p>
        <h3>{constactoLang[lan].horariosDeTrabajo}</h3>
        <p>{constactoLang[lan].lunesAViernes}, 8 A.M - 6 P.M</p>
        <div className={modo}>
        <img src={mapa} alt='google'  className={styles.mapa}></img>
        </div>
      </div>
      

      <form name="formulario-contacto" onSubmit={correoEmail} className={styles.formContainer}>
        <h1>{constactoLang[lan].formularioDeContacto}</h1>
        <label name='nombre'>{constactoLang[lan].nombre}</label>
        <input type='text' name="contact_user" placeholder={constactoLang[lan].ingresaTuNombre} value={correo.contact_user} onChange={onChangeCorreo} className={styles.input}/>
        <label>{constactoLang[lan].correoElectronico}</label>
        <input type='email' name="correo_user" placeholder={constactoLang[lan].ingresaTuCorreo} value={correo.correo_user} onChange={onChangeCorreo} className={styles.input}/>
        <label>{constactoLang[lan].asunto}</label>
        <input type='text' name="asunto_user" placeholder={constactoLang[lan].asunto2} value={correo.asunto_user} onChange={onChangeCorreo} className={styles.input}/>
        <label>{constactoLang[lan].descripcion}</label>
        <textarea name="descripcion_user" placeholder={constactoLang[lan].descripcion2} value={correo.descripcion_user} onChange={onChangeCorreo} className={styles.input}/>
        <button type='submit' className={styles.btn}>{constactoLang[lan].enviar}</button>
      </form>
    </div>
    </div>
    </>
)}