import { Router} from "express";
import embarcaciones from "./routesAll/getEmbarcaciones";
import { getEmbarcaciones } from "../controlles/barcosControlles";

const routes = Router();

// se declaran las rutas
routes.get('/embarcaciones', getEmbarcaciones)
//routes.use('/accesorios')


export default routes;