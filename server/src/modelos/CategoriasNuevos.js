import {Schema,model} from "mongoose";


const categoriasNuevosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

export default model("categoriasNuevos",categoriasNuevosSchema)