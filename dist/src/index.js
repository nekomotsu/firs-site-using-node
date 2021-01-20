//requerimos express
const express = require('express');
const app = express();
//requerimos path, nos ayudara a identificar las rutas de forma dinamica
const path = require('path')

//configuramos el puerto para el servidor
app.set('port', 3000);

// middlewares nos ayudara a procesar las solicitudes antes de responder con algo


//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join( __dirname + '/views') );

//carpeta y archivos estaticos publicos
app.use(express.static( path.join( __dirname + '/public') ));

//rutas del servidor
app.use( require('./routes/') );

//respuesta 404
app.use( (req, res, next) =>{
    res.status(404).render( '404' );
} );

//ponemos a la escucha de peticiones nuestro servidor
app.listen(app.get('port'), ()=>{
    console.log('El servidor esta a la escucha de peticiones en el puerto: ', app.get('port'));
})