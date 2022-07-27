<<<<<<< HEAD
const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")


const UsuariosSchema = new Schema({
    email:{type:String,required:true,lowercase:true,unique:true},
    password:{type:String,required:true},
    nombre:{type:String,required:true,lowercase:true},
    apellido:{type:String,required:true,lowercase:true},
    carritoDeCompra:{type:Array},
    historialDeCompra:{type:Array},
    favoritos:{type:Array},
    admin:{type:Boolean,defaultValue:false}

})
// module.exports= mongoose.model('usuarios', UsuariosSchema);

const saltRounds = 10;
UsuariosSchema.pre("save",function(next){
    if(this.isNew || this.isModified("password")){
        const document= this;

        bcrypt.hash(document.password,saltRounds,(err,hashedPassword)=>{
            if(err){
                next(err);

            }else {
                document.password = hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});

UsuariosSchema.methods.isCorrectPassword= function(password,callback){
    bcrypt.compare(password,this.password,function(err,same){
        if(err){
            callback(err);
        }else{
            callback(err,same);
        }
    });

}

module.exports=mongoose.model("usuarios",UsuariosSchema)



=======
const { Schema } = require("mongoose");
const mongoose = require("mongoose")

const usuariosSchema = new Schema({
    id:{
        required:true,
        primaryKey:true   
    },
    carritoCompra:{
        type:Array,
    }
})

module.exports= mongoose.model("Usuarios",usuariosSchema)
>>>>>>> debora/carrito
