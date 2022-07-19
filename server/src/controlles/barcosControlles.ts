import { RequestHandler } from "express";
import axios from "axios";
import '../resources/products.json'
import api from '../resources/products.json'

export const getEmbarcaciones: RequestHandler = async (req, res)=>{
    interface Api{
        tipo: string;
        categoria: string;
        modelo: string;
        precio: string;
        astillero: string;
        fabricacion: string;
        localizacion: string;
        imagenes: string;
        numero_de_pasajero: number;
        eslora: string;
        manga: string;
        calado: string;
        numero_de_motores: number;
        marca_de_motores: number;
        potencial_total: number;
        descripcion: string;
        combustible: string;
    }
    const apiData: Api = api.products.venta.map((e) =>{
        return{
            tipo:e.tipo,
            categoria: e.categorias,
            modelo: e.modelo,
            precio: e.precio,
            astillero: e.astillero,
            fabricacion: e.fabricacion,
            localizacion: e.localizacion,
            imagenes: e.imagenes,
            numero_de_pasajero: e.numero_de_pasajeros,
            eslora: e.eslora,
            manga: e.manga,
            calado: e.calado,
            numero_de_motores: e.numero_de_motores,
            marca_de_motores: e.marca_de_motor,
            potencial_total: e.potencia_total,
            descripcion: e.descripcion,
            combustible: e.combustible
        }
    })
    
    /* const apidata = (await axios.get()).data;
    console.log(apidata) */
    res.json(api)
}
