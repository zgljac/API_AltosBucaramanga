const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const app = express()
const indexroute = require('./routes/index')

//! GESTION DE CABECERAS, INSTALAR npm install cors
let cors = require('cors')
app.use(cors())

//PRUEBA LA CONEXION A LA DB
// ! PARA QUE LA CONEXION FUNCIONE SE DEBE INSTALAR npm install mysql y npm install express-myconnection tambien instalar CORS npm install cors
// ? SE DEBEN VERIRIFICAR LOS DATOS DE CONEXION AL SERVIDOR, ASI SI ES LOCAL, SI ESTA EN SERVIDOR LOS DATOS DE ESTE.
const conexion = mysql.createConnection(
    {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'Chris1986*',
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
        port: '3306',
        user: 'root',
        password: 'Chris1986*',
        database: 'db_altos_bucaramanga',
    };
app.use(myconn(mysql, conexion2, 'single'))
app.use(express.json())
app.use("/", indexroute)
app.listen(3003, function ()
    {
        console.log('API en el puerto 3303')
    })

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
});