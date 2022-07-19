import {Schema,model} from "mongoose";


const categoriasAccesoriosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

export default model("categoriasAccesorios",categoriasAccesoriosSchema)