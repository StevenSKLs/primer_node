const {Router} = require('express')

const router = Router()

router.get('/users', (req, res) =>{
    res.send('Esto es un GET a users desde mi servidor')
}) 

router.post('/users', (req, res)=>{
    res.json('req.body')
})

module.exports = router


// * Crear un nuevo proyecto de node
// * Vas a poner los siguientes middlewares
// * morgan con formato tiny, express.json()
// * y tu servidor debe atender las siguietnes peticiones


// ? GET en la ruta /users y debe responder 'Esto es un GET a users desde mi servidor'
// ? POST en la ruta /users ( enviar un json en el body ) responder el mismo objeto
// TODO tienen que investigar como responder un json en express 

// ! Necesario tener tu archivo app.js
// ! crear una carpeta para las rutas con un archivo llamado user.routes.js