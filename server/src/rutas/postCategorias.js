const { Router } = require('express');
const Categorias = require("../modelos/Categorias")
postCategorias=Router()

postCategorias.post("/", async(req,res)  =>{
    const {nombre} = req.body;
    try{
        const cate = await Categorias.find({nombre: nombre})
        if (!cate) {
         await Categorias.create({nombre:nombre})
         res.status(200).send("se creo exitosamente")
        }
        else{
            res.status(404).send(` la categoria ${nombre} ya existe`  )
        }

    }catch(error){console.log(error)}

})
module.exports = postCategorias