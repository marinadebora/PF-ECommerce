import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {todosLosProductos} from '../actions/actions'
import { Button } from "@mui/material";
import { Box } from '@mui/system';
import logoLanding from '../imagenes/Nautical.png'
import icon1 from '../imagenes/salvavidas.png'
import icon2 from '../imagenes/bote.png'
import icon3 from '../imagenes/timon.png'
import '../styles/landingPage.css';




export default function Home()
{

	const dispatch = useDispatch();
	const newState = useSelector(state => state.products)

	//----------paginado---------//

	const [page, setPage] = useState(1);
	const [characterPerPage, setCharacterPerPage] = useState(8);
	const index = page * characterPerPage;
	const endIndex = index - characterPerPage;
	const actualPage = newState?.slice(endIndex, index);

	const paginado = (numPage) =>
	{
		setPage(numPage)
	}
    useEffect(()=>{

        dispatch(todosLosProductos())

    },[dispatch])
	

    return(
        <div>
            {/* <Navbar/> */}
            
            <Box id='boxLanding'>
                <Box id='textBoxL1'><img id='logoL' src={logoLanding} alt='imgLanding'/></Box> 
                <Box id='textBoxL2'>
                En Nautical nos dedicamos a la ventade productos de nautica desde 1988.<br/>
                A lo largo de los años y con mucho esfuerzo no hemos convertidos en referentes del sector,
                y a la fecha contamos con las siguientes areas de negocio, venta de productos,
                venta de embarcaciones y alquiler. Cubriendo todas las necesidades para nuestros clientes
                </Box>
                <Box id='buttonsLanding'>
                    <Button  variant="outlined" class='itemLanding1'>
                        <Link class='Landing'  id='LinLP' to='/accesorios'>
                            <img id='iconLanding' src={icon1} alt=''/>
                            <h4 id='titleButtonLanding'>Insumos</h4>
                        </Link>
                    </Button>
                    <Button variant="outlined" class='itemLanding1'>
                        <Link  class='Landing' id='LinkRentaLP' to='/venta'>
                            <img id='iconLanding' src={icon2} alt=''/>
                            <h4 id='titleButtonLanding'>Venta Yates</h4>
                        </Link>
                    </Button>
                    <Button variant="outlined" class='itemLanding1'>
                        <Link  class='Landing' id='LinkAccesoriosLP' to='/alquiler'>
                        <img id='iconLanding' src={icon3} alt=''/>
                            <h4 id='titleButtonLanding'>Renta Yates</h4>
                        </Link>
                    </Button>
                </Box>
            </Box>
            
        
            {/* <Footer/> */}

        </div>
    




						
					
				
		

	
	)

}


