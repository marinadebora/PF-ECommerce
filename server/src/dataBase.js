
const mongoose = require("mongoose");
const config = require("./config");
const { MONGO_USERS,
   } = process.env;

// conectamos nuestra base de datos
(async () =>
{
    try {

        const db = await mongoose.connect(MONGO_USERS);
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