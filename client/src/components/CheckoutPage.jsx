
import NavBar from './Navbar'
import { addToBasket, removeToBasket } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/card.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";



export default function CheckoutPage()
{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const basket=useSelector(state=>state.basket) 

    let detalles=JSON.parse(localStorage.getItem('items')!==null?localStorage.getItem('items'):'[]' )
    //console.log(detalles)
    
   //localStorage.setItem('items',JSON.stringify(detalles))
    
    const [carta, setCarta] = useState(detalles);
    //console.log(carta)

    
    useEffect(() =>
    {
        dispatch(addToBasket())
        
    }, [dispatch]);

   

    const volver = () =>
    {
        navigate(-1)
    }
    const deleteProduct = (id) =>
    {  localStorage.setItem(
        "items",
        JSON.stringify(carta.filter((e) =>e!==null&& e._id !== id))
        );
        dispatch(removeToBasket(id))
      

        setCarta(JSON.parse(localStorage.getItem('items'))!==null?JSON.parse(localStorage.getItem('items')):'[]' )
        
    }

    let pregunta;
    Array.isArray(carta)?pregunta=[...carta]:pregunta=[carta]
    console.log(pregunta)
    return (
        <div>
            <NavBar />

           {
                
                pregunta?.map(e => (
                    (e !== undefined && e !== null) &&

                    <ul id='detalleCheck'>
                        {
                            e.imagenes?.map(e =>
                                <img id='imgCheckout' src={e} alt='img' />
                            )
                        }
                        
                        {
                            e.modelo && <li><p>Modelo: {e.modelo}</p></li>
                        }
                        {
                            e.marca && <li><p>Marca: {e.marca}</p></li>
                        }
                        {
                            e.tipo && <li><p>tipo: {e.tipo}</p></li>
                        }
                        {
                            e.fabricacion && <li><p>fabricacion: {e.fabricacion}</p></li>
                        }
                        {
                            e.astillero && <li><p>astillero: {e.astillero}</p></li>
                        }
                        {
                            e.motor && <li><p>Motor: {e.motor}</p></li>
                        }
                        {
                            e.localizacion && <li><p>localizacion: {e.localizacion}</p></li>
                        }

                        {
                            e.precio && <li><p>precio: {e.precio}</p></li>
                        }
                        {
                            e.producto && <li><p>producto: {e.producto}</p></li>
                        }
                        {
                            e.descripcion && <li><p>descripcion: {e.descripcion}</p></li>
                        }

                        {
                            e.Tamaño && <li><p>Tamaño: {e.Tamaño}</p></li>
                        }
                        {
                            e._id && <button id='buttonDelete' onClick={() => deleteProduct(e._id)}>BORRAR</button>
                        }

                    </ul>

            ))} 
            <button id='buttonBack' onClick={volver}>VOLVER</button>



        </div>

    )
}
/*   const id_user = localStorage.getItem("id");
  const videogamesInCart = useSelector((state) => state.cart);

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart /* setCart ] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    if(typeof id_user === "string"){
      dispatch(getCartById(id_user));
    }
  }, [cart /* dispatch ]);

  const current_cart =
    typeof id_user === "string" ? videogamesInCart : cartFromLocalStorage;

  const handleDelete = (id) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartFromLocalStorage.filter((e) => e.id !== id))
    );
    if (typeof id_user === "string") {
      dispatch(delFromCart(id_user, id));
      
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify(cartFromLocalStorage.filter((e) => e.id !== id))
      );
    }
    navigate("/my_cart");
  }; */
