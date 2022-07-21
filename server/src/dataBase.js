let mongoose =require("mongoose");
let config = require("./config") ;

// conectamos nuestra base de datos
/* (async()=>{
    try {
        
        const db = await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@cluster0.mxvbffi.mongodb.net/${config.MONGO_DATABASE}`);
    console.log('conectada la db', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})() */


(async()=>{
    try {
        
        const db = await mongoose.connect(`mongodb://localhost:27017/punto-yates`);
    console.log('conectada la db', db.connection.name)
    } catch (error) {
        console.error(error)
    }
})()