const express = require('express')
const morgan = require('morgan')
const router_user = require('./routes/user.routes')
const app = express()


app.use(morgan("tiny"))
app.use(express.json())
app.use(router_user)

app.listen(8000, ()=>{
    console.log('server corriendo en el puerto 8000')
})


// * Crear un nuevo proyecto de node
// * Vas a poner los siguientes middlewares
// * morgan con formato tiny, express.json()
// * y tu servidor debe atender las siguietnes peticiones


// ? GET en la ruta /users y debe responder 'Esto es un GET a users desde mi servidor'
// ? POST en la ruta /users ( enviar un json en el body ) responder el mismo objeto
// TODO tienen que investigar como responder un json en express 

// ! Necesario tener tu archivo app.js
// ! crear una carpeta para las rutas con un archivo llamado user.routes.js

