<<<<<<< HEAD
let dotenv = require('dotenv') 

dotenv.config();

// se defines variables de entorno por defecto
module.exports = {
    MONGO_DATABASE: process.env.MONGO_DATABASE || "punto-yates",
    MONGO_USER: process.env.MONGO_USER || "admin",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
    MONGO_HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.PORT || 4000
=======
let dotenv = require('dotenv') 

dotenv.config();

// se defines variables de entorno por defecto
module.exports = {
    MONGO_DATABASE: process.env.MONGO_DATABASE || "yatesdb",
    MONGO_USER: process.env.MONGO_USER || "admin",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
    MONGO_HOST: process.env.MONGO_HOST || "localhost",
    PORT: process.env.PORT || 4000
>>>>>>> f4ce25ed315d5d7cdb681ca61547947209a15099
}