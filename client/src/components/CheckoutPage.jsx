
import NavBar from './Navbar'
import { addToBasket, removeToBasket,getItemsCart } from '../actions/actions'
import { useSelector, useDispatch ,} from 'react-redux'
import { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/card.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";



export default function CheckoutPage()
{

    
   /* const productsCart = useSelector((state)=> state.basket);
    
    const [user, setUser] = useState(false)


   

    useEffect(()=>{
        let localUser
        ( async() => {
        if(localStorage.getItem('userInfo')){
            localUser = JSON.parse(localStorage.getItem('userInfo'));
            setUser(localUser)
        }
        
        })()
    }, [dispatch])*/

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateBasket = useSelector((state) => state.basket)
    
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("item2") || "[]");
  const [cart /* setCart */] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("item2", JSON.stringify(cart));
    dispatch(getItemsCart());
    
  }, [cart ,dispatch ]);

  const current_cart =cartFromLocalStorage;

    const volver = () =>
    {
        navigate(-1)
    }

    const deleteProduct=(id)=>{
        dispatch(removeToBasket(id))
     
    }


    return (
        !current_cart ? 
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
              
                 
        
        current_cart?.map(e => (
                    e !== undefined &&
                <div id='checkoutCard'>

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
                        
                    </ul>

                        {
                            e._id &&<IconButton aria-label="remove to cart" onClick={()=>deleteProduct(e._id)} >
                                    <DeleteForeverIcon id='buttonRemove' />
                                    </IconButton>
                                    
                        }   
                    
                    </div>
                    ))
                
            }
            <button id='buttonBackCheckout' onClick={volver}>Back</button>
        </div>
        
    )
}
