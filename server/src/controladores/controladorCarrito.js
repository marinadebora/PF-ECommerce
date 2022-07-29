const Usuarios = require("../modelos/Usuarios");



let asignarUsuarioAlCarrito = async (req,res)=> {
    const {id} = req.params;
    try {
        let usuario = await Usuarios.findOne({ _id: id }).populate("_id");
        res.send(usuario.carritoDeCompra);
      } catch (err) {
        console.log(res, "error al asignar usuario al carrito");
      }
}

let descargarElementoCarrito = async(req,res)=>{
    try{const {id} = req.params;
    const {idAccesorio} = req.body;
    let usuario = await Usuarios.find({_id:id})
    console.log(usuario)
    if(usuario){usuario[0].carritoDeCompra.deleteOne({_id:idAccesorio})}else res.send("este producto no esta en el carrito")
    console.log(usuario.carritoDeCompra)
    res.send("El producto decremento correctamente" + usuario)
    }catch(error){
        console.log(error)
    }
}

let agregarAlCarrito = async (req,res)=>{
    try {
        const { id } = req.params;
        const { idAccesorio, canti} = req.body;
        let usuario = await Usuarios.findOneAndUpdate(
          { _id: id },
          { $set : { carritoDeCompra: [idAccesorio], cantidad:[canti] }} 
        );
        console.log({carritoDeCompra: [{idAccesorio}]})
        res.send("El producto se agrego correctamente" + usuario + "                ");
      } catch (error) {
       console.error(error);
      }
    };

    const borrarCarrito = async (req, res) => {
        try {
          const { id } = req.body;
         let usuario = await Usuarios.updateOne(
            { _id: id },
            { carritoDeCompra: [], cantidad: 0 }
          );
          res.json(usuario);
        } catch (error) {
          console.log(error)
        }
      };

    
        
module.exports= { agregarAlCarrito, borrarCarrito, asignarUsuarioAlCarrito,descargarElementoCarrito } 
    
