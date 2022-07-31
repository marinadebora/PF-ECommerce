let dotenv = require('dotenv') 

dotenv.config();

// se defines variables de entorno por defecto
module.exports = {
    MONGO_DATABASE: process.env.MONGO_DATABASE || "yatesdb",
    MONGO_USER: process.env.MONGO_USER || "admin",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
    MONGO_HOST: process.env.MONGO_HOST || "localhost",
    MONGO_USERS:process.env.MONGO_USERS||`mongodb+srv://admin:admin@cluster0.mxvbffi.mongodb.net/yatesdb`,
    PORT: process.env.PORT || 4000
    
}