
import NavBar from './Navbar'
import { addToBasket, removeToBasket,getItemsCart } from '../actions/actions'
import { useSelector, useDispatch ,} from 'react-redux'
import { useEffect ,useState,Fragment} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/card.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
import { accesorios } from '../actions/actions'
import { Grid } from '@mui/material'
import Card from './CardShop'
import {  Link } from 'react-router-dom';



export default function CheckoutPage()
{

    
  

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateBasket = useSelector((state) => state.basket)
    const accesorio = useSelector(state => state.allAccesories._id)
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("item2") || "[]");
    const [cart /* setCart */] = useState(cartFromLocalStorage);
    const[cant, /*SetCant*/]= useState(1)

    
    
    

   

  useEffect(() => {
    localStorage.setItem("item2", JSON.stringify(cart));
    dispatch(getItemsCart());
    dispatch(accesorios())
    
  }, [cart ,dispatch ]);

  const current_cart =cartFromLocalStorage;

  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};

    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}
var uniqueArray = removeDuplicates(current_cart, "_id");
console.log(uniqueArray);
  
  

    const volver = () =>
    {
        navigate(-1)
    }

    const deleteProduct=(id)=>{
        dispatch(removeToBasket(id))
     
    }

   // const precioTotal = 
 

    return (
        !uniqueArray ? 
        <>
            <div>
                <h1>LOADING</h1>
                <button id='buttonBackCheckout' onClick={volver}>Back</button>
            </div>
        </>:
        <div>
        <NavBar />
            <p id='titleCheckoutPage'>Shopping Cart</p>
            {
              uniqueArray?.map(e => (
                    e !== undefined &&
                <div id='checkoutCard'>

<<<<<<< HEAD
                    <ul id='detalleCheck'>
                        {
                            e.imagenes?.map(e =>
                                <img id='imgCheckout' src={e} alt='img' />
                            )
                        }
                        
                        {
                            e.modelo && <li><p id='listCheckout'>Modelo: {e.modelo}</p></li>
                        }
                        {
                            e.marca && <li><p id='listCheckout'>Marca: {e.marca}</p></li>
                        }
                        {
                            e.tipo && <li><p id='listCheckout'>Tipo: {e.tipo}</p></li>
                        }
                        {
                            e.fabricacion && <li><p id='listCheckout'>Fabricacion: {e.fabricacion}</p></li>
                        }
                        {
                            e.astillero && <li><p id='listCheckout'>Astillero: {e.astillero}</p></li>
                        }
                        {
                            e.motor && <li><p id='listCheckout'>Motor: {e.motor}</p></li>
                        }
                        {
                            e.localizacion && <li><p id='listCheckout'>Localizacion: {e.localizacion}</p></li>
                        }

                        {
                            e.precio && <li><p id='listCheckout'>Precio: {e.precio}</p></li>
                        }
                        {
                            e.producto && <li><p id='listCheckout'>Producto: {e.producto}</p></li>
                        }
                        {
                            e.descripcion && <li><p id='listCheckout'>Descripcion: {e.descripcion}</p></li>
                        }

                        {
                            e.Tamaño && <li><p id='listCheckout'>Tamaño: {e.Tamaño}</p></li>
                        }
                        
                    </ul>

                        {
                            e._id &&<IconButton aria-label="remove to cart" onClick={()=>deleteProduct(e._id)} >
                                    <DeleteForeverIcon id='buttonRemove' />
                                    </IconButton>
                                    
                        }   
=======
                   
                         <Grid container spacing={2}>
      {
   <Fragment>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
                    tipo={e.tipo}
                    Marca={e.Marca}
                    modelo={e.modelo}
                    Motor={e.Motor}
                    precio={e.precio}
                    astillero={e.astillero}
                    fabricacion={e.fabricacion}
                    localizacion={e.localizacion}
                    imagenes={e.imagenes[0]}
                    producto={e.producto}
                    descripcion={e.descripcion}
                    Tamaño={e.Tamaño}
                    id={e._id}
>>>>>>> 4ef4920affd3355bcdbd8720ee388694eaccb3c0
                    
                  />
                <button>Cantidad:{cant}</button>
                <button>Precio Total:{e.precio}</button>
                </Grid>
              
              </Fragment>
              
             }
               
      </Grid>
      
            </div>
                ))
                }
            <button id='buttonBackCheckout' onClick={volver}>Back</button>
        </div>
        
    )
}
