import { Router } from "express";
import { getEmbarcaciones } from '../../controlles/barcosControlles'

const embarcaciones = Router();

embarcaciones.get('/', (req, res)=>{
    res.json('hola mundo')
})

export default embarcaciones;