import app from './app';



// se declara el servidor 
app.listen(app.get('port'), ()=>{
    console.log('puerto 3000')
})