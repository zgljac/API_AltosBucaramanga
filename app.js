const express = require("express")
const mysql = require('mysql')
const myconn = require('express-myconnection')
const app = express()
const indexroute = require('./routes/index')

//! GESTION DE CABECERAS, INSTALAR npm install cors
let cors = require('cors')
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
  app.use(cors(corsOpts));

//PRUEBA LA CONEXION A LA DB
// ! PARA QUE LA CONEXION FUNCIONE SE DEBE INSTALAR npm install mysql y npm install express-myconnection tambien instalar CORS npm install cors
// ? SE DEBEN VERIRIFICAR LOS DATOS DE CONEXION AL SERVIDOR, ASI SI ES LOCAL, SI ESTA EN SERVIDOR LOS DATOS DE ESTE.
const conexion = mysql.createConnection(
    {
        host: 'localhost',
        port: 3307,
        user: 'root',
        password: 'Prueba1',
        database: 'db_altos_bucaramanga',
    });

conexion.connect(function (err)
{
    if (err)
    {
        console.log('Error de conexion: ' + err.message);
    }
    else
    {
        console.log('Conexion OK');
    }
});

//CONEXION
const conexion2 = 
    {
        host: 'localhost',
        port: 3307,
        user: 'root',
        password: 'Prueba1',
        database: 'db_altos_bucaramanga',
    };
app.use(myconn(mysql, conexion2, 'single'))
app.use(express.json())
app.use("/", indexroute)
app.listen(3000, function ()
    {
        console.log('API en el puerto 3000')
    })