import {Schema,model} from "mongoose";


const categoriasUsadosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

export default model("categoriasUsados",categoriasUsadosSchema)