const app= require('./src/app');
const {PORT}= require('./src/config')




app.listen( PORT, () =>{
    console.log(`server listening on port  ${PORT}`)
});
