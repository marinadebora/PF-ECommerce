import { Schema, model } from "mongoose"

const usuariosSchema = new Schema({
    id:{
        
        required:true,
        primaryKey:true   
    },
})