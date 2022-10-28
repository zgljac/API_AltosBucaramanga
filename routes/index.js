const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const urlcodeParser = bodyParser.urlencoded({extended:false })

let cors = require('cors')

var app = express()
app.use(cors());

router.get('/', function (req, res) 
    {
        res.send('Hello: soy el api_altosbucaramanga - ARRIBA')
    })


// SELECT DE LAS TABLAS USUARIOS_LOGIN, PROPIETARIOS, INMUEBLES, CUENTAS, TARIFAS, FACTURAS
// SELECT DE TODA LA TABLA USUARIOS_LOGIN
router.post('/Consultar_Usuarios_Sistema', urlcodeParser,function (req, res){
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)

        const consulta = "select * from usuarios_login"
        conn.query(consulta,[req.body], (err,result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)
            }
        })
    })
})

// SELECT DE TODA LA TABLA PROPIETARIOS
//ruta para mostrar  1 usuario  - este tipo de codigos de usa para mostrar facturas e información importantes
router.post("/showuser",urlcodeParser,function(req,res){
    //const UserName=req.body.UserName
    //const Password=req.body.Password   // aqui podemos mostrar por user y clave pero se puede sólo por ID
     const Id_reg=req.body.Numero_Identificacion


    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        const x=""
        //const consulta=x.concat('select * from usuarios where UserName="',UserName,'" and Password="',Password,'"')
        const consulta=x.concat('select * from propietarios where Numero_Identificacion=',Id_reg)
        console.log(consulta)
        conn.query(consulta,[req.body],(err,result,rows)=>{
        if(err)
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)             

            }   

        })

    })
})






// SELECT DE TODA LA TABLA INMUEBLES
router.post('/Consultar_Inmuebles', urlcodeParser,function (req, res){
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)

        const consulta = "select * from inmuebles"
        conn.query(consulta,[req.body], (err,result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)
            }
        })
    })
})
// SELECT DE TODA LA TABLA TARIFAS
router.post('/Consultar_Tarifas', urlcodeParser,function (req, res){
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)

        const consulta = "select * from tarifas"
        conn.query(consulta,[req.body], (err,result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)
            }
        })
    })
})
// SELECT DE TODA LA TABLA CEUNTAS
router.post('/Consultar_Cuentas', urlcodeParser,function (req, res){
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)

        const consulta = "select * from cuentas"
        conn.query(consulta,[req.body], (err,result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)
            }
        })
    })
})
// SELECT DE TODA LA TABLA FACTURAS
router.post('/Consultar_Facturas', urlcodeParser,function (req, res){
    req.getConnection((err,conn)=>{
        if (err) return res.send(err)

        const consulta = "select * from facturas"
        conn.query(consulta,[req.body], (err,result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)
            }
        })
    })
})

// SELECT DE UN DATO TABLA USUARIOS_LOGIN
router.post('/Consultar_Usuario_Sistema', urlcodeParser,function (req, res){
    const Numero_Identificacion = req.body.Numero_Identificacion

    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('select * from usuarios_login where Numero_Identificacion = ', Numero_Identificacion)
        conn.query(consulta,[req.body], (err,result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)
            }
        })
    })
})
// SELECT DE UN DATO TABLA PROPIETARIOS
router.post('/Consultar_Propietario', urlcodeParser,function (req, res){
    const Numero_Identificacion = req.body.Numero_Identificacion

    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('select * from propietarios where Numero_Identificacion = ', Numero_Identificacion)
        conn.query(consulta,[req.body], (err,result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)
            }
        })
    })
})
// SELECT DE UN DATO TABLA INMUEBLES
router.post('/Consultar_Inmueble', urlcodeParser,function (req, res){
    const id_inmueble = req.body.id_inmueble

    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('select * from inmuebles where id_inmueble = ', id_inmueble)
        conn.query(consulta,[req.body], (err,result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({result})
                console.log(result)
            }
        })
    })
})

// INSERT DE LAS TABLAS USUARIOS_LOGIN, PROPIETARIOS, INMUEBLES, CUENTAS, TARIFAS, FACTURAS
// INSERT TABLA USUARIOS_LOGIN
router.post('/Agregar_Usuario_Login', urlcodeParser, function (req, res){
        const Primer_Nombre = req.body.Primer_Nombre
        const Segundo_Nombre = req.body.Segundo_Nombre
        const Primer_Apellido = req.body.Primer_Apellido
        const Segundo_Apellido = req.body.Segundo_Apellido
        const correo = req.body.correo
        const usuario = req.body.usuario
        const contrasena = req.body.contrasena
        const Numero_Identificacion = req.body.Numero_Identificacion
        
        req.getConnection((err, conn)=>{
            if (err) return res.send(err)
            const x = ""
            const consulta = x.concat('insert into usuarios_login(Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, correo, usuario, contrasena, Numero_Identificacion) value ("',Primer_Nombre,'","',Segundo_Nombre,'","',Primer_Apellido,'","',Segundo_Apellido,'","',correo,'","',usuario,'","',contrasena,'","',Numero_Identificacion,'")')
            console.log(consulta)
            conn.query(consulta,[req.body], (err, result, rows)=>{
                if (err) 
                    {res.send(err)}
                else
                {
                    res.status(200).send({saved:1})
                    if (res.status(200))
                    {
                        console.log('Usuario del sistema Almacenado')
                        console.log(result)
                    }
                }
            })
        })
    })

// INSERT TABLA PROPIETARIOS
router.post("/insertar_User",urlcodeParser,function(req,res){
    const Numero_Identificacion=req.body.Numero_Identificacion
    const Primer_Nombre=req.body.Primer_Nombre
    const Segundo_Nombre=req.body.Segundo_Nombre
    const Primer_Apellido=req.body.Primer_Apellido
    const Segundo_Apellido=req.body.Segundo_Apellido
    const correo=req.body.correo
    const Telefono=req.body.Telefono
    const Direccion_Contacto=req.body.Direccion_Contacto

    req.getConnection((err,conn)=>{
        if (err) return res.send(err)
        const x=""
        const consulta=x.concat('insert into propietarios(Numero_Identificacion,Primer_Nombre,Segundo_Nombre,Primer_Apellido,Segundo_Apellido,correo,Telefono,Direccion_Contacto) value("',Numero_Identificacion,'","',Primer_Nombre,'","',Segundo_Nombre,'","',Primer_Apellido,'","',Segundo_Apellido,'","',correo,'","',Telefono,'","',Direccion_Contacto,'")') 
        conn.query(consulta,[req.body],(err,result,rows)=>{
            if(err)
                {res.send(err)}
            else
            {
                res.status(200).send({save:1})
                if(res.status(200))
                {
                    console.log('Usuario Almacenado')
                    console.log(result)
                }
            }
        })
    })
})

/* router.post('/Agregar_Propietarios', function (req, res){
    const Numero_Identificacion = req.body.Numero_Identificacion
    const Primer_Nombre = req.body.Primer_Nombre
    const Segundo_Nombre = req.body.Segundo_Nombre
    const Primer_Apellido = req.body.Primer_Apellido
    const Segundo_Apellido = req.body.Segundo_Apellido
    const correo = req.body.correo
    const Telefono = req.body.Telefono
    const Direccion_Contacto = req.body.Direccion_Contacto

    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
            const x = ""
            const consulta = x.concat('insert into propietarios (Numero_Identificacion, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, correo, Telefono, Direccion_Contacto) value ("',Numero_Identificacion,'","',Primer_Nombre,'","',Segundo_Nombre,'","',Primer_Apellido,'","',Segundo_Apellido,'","',correo,'","',Telefono,'","', Direccion_Contacto,'")')
            conn.query(consulta,[req.body], (err, result, rows)=>{
                if (err) 
                    {res.send(err)}
                else
                {
                    res.status(200).send({save: 1})
                    if (res.status(200))
                    {
                    console.log('Propietario Almacenado')
                    console.log(result)
                    }
                }
            })
        })
    }) */

// INSERT TABLA INMUEBLES
router.post('/Agregar_Inmueble', urlcodeParser, function (req, res){
    const id_inmueble = req.id_inmueble
    const direccion = req.body.direccion
    const Numero_Identificacion = req.body.Numero_Identificacion
    const id_tarifa = req.body.id_tarifa
    
    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('insert into inmuebles(id_inmueble, direccion, Numero_Identificacion, id_tarifa) value ("',id_inmueble,'","',direccion,'","',Numero_Identificacion,'","',id_tarifa,'")') 
        conn.query(consulta,[req.body], (err, result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({saved:1})
                if (res.status(200))
                {
                    console.log('Inmueble Almacenado')
                    console.log(result)
                }
            }
        })
    })
})

// INSERT TABLA CUENTAS
router.post('/Agregar_Cuenta', urlcodeParser, function (req, res){
    const id_inmueble = req.body.id_inmueble
    const Numero_Identificacion = req.body.Numero_Identificacion
    
    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('insert into cuentas(id_inmueble, Numero_Identificacion) value ("',id_inmueble,'","',Numero_Identificacion,'")') 
        conn.query(consulta,[req.body], (err, result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({saved:1})
                if (res.status(200))
                {
                    console.log('Cuenta creada')
                    console.log(result)
                }
            }
        })
    })
})

// INSERT TABLA TARIFAS
router.post('/Agregar_Tarifa', urlcodeParser, function (req, res){
    const id_tarifa = req.id_tarifa
    const tarifa = req.body.tarifa
    
    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('insert into tarifas(id_tarifa, tarifa) value ("',id_tarifa,'","',tarifa,'")') 
        conn.query(consulta,[req.body], (err, result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({saved:1})
                if (res.status(200))
                {
                    console.log('Tarifa creada')
                    console.log(result)
                }
            }
        })
    })
})

// INSERT TABLA FACTURAS
router.post('/Agregar_Factura', urlcodeParser, function (req, res){
    const id_factura = req.id_factura
    const Numero_Identificacion = req.body.Numero_Identificacion
    const id_inmueble = req.body.id_inmueble
    const id_cuenta = req.body.id_cuenta
    const fecha_limite = req.body.fecha_limite
    const estado_pago = req.body.estado_pago
    const fecha_pago = req.body.fecha_pago
    const observaciones = req.body.observaciones
    
    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('insert into facturas(id_factura, Numero_Identificacion, id_inmueble, id_cuenta, fecha_limite, estado_pago, fecha_pago, observaciones) value ("',id_factura,'","',Numero_Identificacion,'","',id_inmueble,'","',id_cuenta,'","',fecha_limite,'","',estado_pago,'","',fecha_pago,'","',observaciones,'")') 
        conn.query(consulta,[req.body], (err, result, rows)=>{
            if (err) 
                {res.send(err)}
            else
            {
                res.status(200).send({saved:1})
                if (res.status(200))
                {
                    console.log('Factura generada')
                    console.log(result)
                }
            }
        })
    })
})

// LOGIN
router.post('/login', urlcodeParser, function (req, res){
    const usuario = req.body.usuario
    const contrasena = req.body.contrasena

    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('select * from usuarios_login where usuario = "', usuario, '" and contrasena = "', contrasena,'"')
        console.log(consulta)
        conn.query(consulta, [req.body], (err, result, rows)=>{
            if (err)
                {res.send(err)}
            else
            {
                if (result.length > 0)
                {
                    res.status(200).send({existe: 1, usuario: result[0].Numero_Identificacion})
                    console.log(result[0].Numero_Identificacion)
                    console.log(result)
                }
                else
                {
                    res.status(200).send({existe: 0})
                }
            }
        })
    })
})

// UPDATE DE LAS TABLAS USUARIOS_LOGIN, PROPIETARIOS, INMUEBLES, CUENTAS, TARIFAS, FACTURAS
// UPTDATE TABLA USUARIOS_LOGIN 
router.post('/Actualizar_Usuario_Login', function (req, res){
    const Primer_Nombre = req.body.Primer_Nombre
    const Segundo_Nombre = req.body.Segundo_Nombre
    const Primer_Apellido = req.body.Primer_Apellido
    const Segundo_Apellido = req.body.Segundo_Apellido
    const correo = req.body.correo

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('update usuarios_login set Primer_Nombre="', Primer_Nombre,'", Segundo_Nombre="', Segundo_Nombre,'", Primer_Apellido="', Primer_Apellido,'", Segundo_Apellido="', Segundo_Apellido,'", correo="', correo,'"')
        console.log(consulta)
        conn.query(consulta, [req.body],(err, result, fields) => {
            if (err)
                {res.send(err)}
            else
            {
                res.status(200).send({save: 1 })
                if (res.status(200))
                {
                    console.log('Usuario del Login Actualizado')
                    console.log(result)
                }
            }
        })
    })
})
//Actualizar registros 
router.post("/update",urlcodeParser, function (req, res) {
  var Primer_Nombre_ = req.body.Primer_Nombre;
  var Segundo_Nombre_ = req.body.Segundo_Nombre;
  var Primer_Apellido_ = req.body.Primer_Apellido;
   var Segundo_Apellido_ = req.body.Segundo_Apellido;
  var correo_ = req.body.correo;
  var Telefono_ = req.body.Telefono;
  var Direccion_Contacto_ = req.body.Direccion_Contacto;
   const Id_reg = req.body.Numero_Identificacion;

    //console.log(Correo_)
    //console.log(Password_)
    //console.log(Id_reg)


   req.getConnection((err, conn) => {
        if (err) return res.send(err)    

           const x=""
           const consulta=x.concat('update propietarios set Primer_Nombre="',Primer_Nombre_,'", Segundo_Nombre="',Segundo_Nombre_,'", Primer_Apellido="',Primer_Apellido_,'", Segundo_Apellido="',Segundo_Apellido_,'", correo="',correo_,'", Telefono="',Telefono_,'", Direccion_Contacto="',Direccion_Contacto_,'" where Numero_Identificacion="',Id_reg,'"')
      console.log(consulta) 
        conn.query(consulta, [req.body],(err, result,fields) => {
                 if (err)
                { res.send(err)}
                else{   
                        res.status(200).send({ save:1 })               
                           if(res.status(200))
                           {
                                console.log('Registro Actualizado by Jaras Adventures')
                                console.log(result)

                  
                          }  
                     }  
            })
     }) 


});

// UPTDATE TABLA INMUEBLES 
router.post('/Actualizar_Inmueble', function (req, res){
    const direccion = req.body.direccion
    const Numero_Identificacion = req.body.Numero_Identificacion
    const id_tarifa = req.body.id_tarifa

    req.getConnection((err, conn) =>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('update inmuebles set direccion="', direccion,'", Numero_Identificacion="', Numero_Identificacion,'", id_tarifa="', id_tarifa,'"')
        console.log(consulta)
        conn.query(consulta, [req.body],(err, result, fields) => {
            if (err)
                {res.send(err)}
            else
            {
                res.status(200).send({save: 1 })
                if (res.status(200))
                {
                    console.log('Inmueble actualizado')
                    console.log(result)
                }
            }
        })
    })
})
// UPTDATE TABLA CUENTAS 
router.post('/Actualizar_Cuenta', function (req, res){
    const id_inmueble = req.body.id_inmueble
    const Numero_Identificacion = req.body.Numero_Identificacion

    req.getConnection((err, conn) =>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('update cuentas set id_inmueble="', id_inmueble,'", Numero_Identificacion="', Numero_Identificacion,'"')
        console.log(consulta)
        conn.query(consulta, [req.body],(err, result, fields) => {
            if (err)
                {res.send(err)}
            else
            {
                res.status(200).send({save: 1 })
                if (res.status(200))
                {
                    console.log('Cuenta actualizada')
                    console.log(result)
                }
            }
        })
    })
})
// UPTDATE TABLA TARIFAS 
router.post('/Actualizar_Tarifa', function (req, res){
    const tarifa = req.body.tarifa

    req.getConnection((err, conn) =>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('update tarifas set tarifa="', tarifa,'"')
        console.log(consulta)
        conn.query(consulta, [req.body],(err, result, fields) => {
            if (err)
                {res.send(err)}
            else
            {
                res.status(200).send({save: 1 })
                if (res.status(200))
                {
                    console.log('Tarifa actualizada')
                    console.log(result)
                }
            }
        })
    })
})
// UPTDATE TABLA FACTURAS 
router.post('/Actualizar_Factura', function (req, res){
    const Numero_Identificacion = req.body.Numero_Identificacion
    const id_inmueble = req.body.id_inmueble
    const id_cuenta = req.body.id_cuenta
    const fecha_limite = req.body.fecha_limite
    const estado_pago = req.body.estado_pago
    const fecha_pago = req.body.fecha_pago
    const observaciones = req.body.observaciones

    req.getConnection((err, conn) =>{
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat('update facturas set Numero_Identificacion="', Numero_Identificacion,'", id_inmueble="', id_inmueble,'", id_cuenta="', id_cuenta,'", fecha_limite="', fecha_limite,'", estado_pago="', estado_pago,'", fecha_pago="',fecha_pago,'" observaciones="', observaciones,'"')
        console.log(consulta)
        conn.query(consulta, [req.body],(err, result, fields) => {
            if (err)
                {res.send(err)}
            else
            {
                res.status(200).send({save: 1 })
                if (res.status(200))
                {
                    console.log('Factura actualizada')
                    console.log(result)
                }
            }
        })
    })
})

// ELIMINAR DE LAS TABLAS USUARIOS_LOGIN, PROPIETARIOS, INMUEBLES, CUENTAS, TARIFAS, FACTURAS
// ELIMINAR DE LA TABLA USUARIOS_LOGIN
router.post('/Borrar_Usuarios_Login', urlcodeParser, function (req, res) {
    const Numero_Identificacion = req.body.Numero_Identificacion

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('delete from usuarios_login where Numero_Identificacion = "' , Numero_Identificacion,'"')
        conn.query(consulta, [req.body], (err, result, fields) => {
            if (err) return res.send(err)
            res.status(200).send({eliminado: 1})
            if (res.status(200))
            {
                console.log('Usuario del sistema Eliminado')
            }
        })
    })
})

//Eliminar registro      ----->    funciona ok
router.post("/delete_propietarios", urlcodeParser,function (req, res) {
    const Numero_Id = req.body.Numero_Identificacion;

    req.getConnection((err, conn) => {
         if (err) return res.send(err)    
            const x="";
            const consulta=x.concat('delete from propietarios where Numero_Identificacion="',Numero_Id,'"')
            conn.query(consulta, [req.body],(err, result,fields) => {
                 if (err) return res.send(err)  
                    res.status(200).send({ eliminado:1 })
                      if(res.status(200))
                            {
                                 console.log('registro eliminado')                                                
                           }  
             })
      }) 
 
 })

// ELIMINAR DE LA TABLA PROPIETARIOS
/* router.post('/Borrar_Propietario', urlcodeParser, function (req, res) {
    const Numero_Identificacion = req.body.Numero_Identificacion

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('delete from propietarios where Numero_Identificacion = "' , Numero_Identificacion,'"')
        conn.query(consulta, [req.body], (err, result, fields) => {
            if (err) return res.send(err)
            res.status(200).send({eliminado: 1})
            if (res.status(200))
            {
                console.log('Propietario Eliminado')
            }
        })
    })
})*/

// ELIMINAR DE LA TABLA INMUEBLES
router.post('/Borrar_Inmueble', urlcodeParser, function (req, res) {
    const id_inmueble = req.body.id_inmueble

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('delete from inmuebles where id_inmueble = "' , id_inmueble,'"')
        conn.query(consulta, [req.body], (err, result, fields) => {
            if (err) return res.send(err)
            res.status(200).send({eliminado: 1})
            if (res.status(200))
            {
                console.log('Inmueble Eliminado')
            }
        })
    })
})
// ELIMINAR DE LA TABLA CUENTAS
router.post('/Borrar_Cuenta', urlcodeParser, function (req, res) {
    const id_cuenta = req.body.id_cuenta

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('delete from cuentas where id_cuenta = "' , id_cuenta,'"')
        conn.query(consulta, [req.body], (err, result, fields) => {
            if (err) return res.send(err)
            res.status(200).send({eliminado: 1})
            if (res.status(200))
            {
                console.log('Cuenta Eliminada')
            }
        })
    })
})
// ELIMINAR DE LA TABLA TARIFAS
router.post('/Borrar_Tarifa', urlcodeParser, function (req, res) {
    const id_tarifa = req.body.id_tarifa

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('delete from tarifas where id_tarifa = "' , id_tarifa,'"')
        conn.query(consulta, [req.body], (err, result, fields) => {
            if (err) return res.send(err)
            res.status(200).send({eliminado: 1})
            if (res.status(200))
            {
                console.log('Tarifa Eliminada')
            }
        })
    })
})
// ELIMINAR DE LA TABLA FACTURAS
router.post('/Borrar_Factura', urlcodeParser, function (req, res) {
    const id_factura = req.body.id_factura

    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        const x = ""
        const consulta = x.concat ('delete from facturas where id_factura = "' , id_factura,'"')
        conn.query(consulta, [req.body], (err, result, fields) => {
            if (err) return res.send(err)
            res.status(200).send({eliminado: 1})
            if (res.status(200))
            {
                console.log('Factura Eliminada')
            }
        })
    })
})

module.exports = router