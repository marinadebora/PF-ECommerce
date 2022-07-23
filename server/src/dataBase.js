
const mongoose = require("mongoose");
const config = require("./config");

// conectamos nuestra base de datos
(async()=>{
    try {
        
         const db = await mongoose.connect("mongodb+srv://alexpina:Aa.040292@cluster0.mxvbffi.mongodb.net/test");
    console.log('conectada la db', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()


/* (async()=>{
    try {
        
        const db = await mongoose.connect(`mongodb://localhost:27017/punto-yates`);
    console.log('conectada la db', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})() */