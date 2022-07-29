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

let agregarAlCarrito = async (req,res)=>{
    try {
        const { id } = req.params;
        const { idAccesorio} = req.body;
        let usuario = await Usuarios.findOneAndUpdate(
          { _id: id },
          { $push: { carritoDeCompra: [idAccesorio]}}
          
        );
        console.log({carritoDeCompra: [{idAccesorio}]})
        res.send("El producto se agrego correctamente" + usuario);
      } catch (err) {
       console.error(err);
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

    
        
module.exports= { agregarAlCarrito, borrarCarrito, asignarUsuarioAlCarrito } 
    
