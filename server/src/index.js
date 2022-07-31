const app= require('./app');
const {PORT} = require("./config")


app.listen(PORT, () =>{
    console.log('server listening on port 4000')
});

