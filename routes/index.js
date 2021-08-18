var express = require('express');
var router = express.Router();
const db = require('../db');
const nodemailer = require('nodemailer');
require('dotenv').config();

/* -------------------------------------- ------------------------------------------------- */
/*   --------------------------- Router Frontend ------------------------*/
/* -------------------------------------- ------------------------------------------------- */
/* GET home page. */
router.get('/', (req, res) => {
  let logueado = req.session.loggedin; // true || undefined
  let user = req.session.user;
  const sql = 'Select * From products';
  db.query(sql, (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    console.log(data);
    res.render('index', { data, logueado, user });
  });  
});
/* Productos GET */
router.get('/productos', (req, res) => {
  let logueado = req.session.loggedin; // true || undefined
  let user = req.session.user;
  const sql = 'Select * From products';
    db.query(sql, (err, data) => {
      if (err) res.send(`Ocurrio un error ${err.code}`);
      //console.log(data);  
      res.render('pages/productos', { data, logueado, user });
    }); 
});
/* Producto GET */
router.get('/producto/:id', (req, res) => {
  const id = req.params.id;
  let logueado = req.session.loggedin; // true || undefined
  let user = req.session.user;
  const sql = 'Select * From products WHERE id = ?';
  db.query(sql, [id], (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    res.render('pages/producto', { data: data[0] , logueado, user });
  });  
});
/* Admin 
router.get('/admin', (req, res) => {
  res.render('pages/admin', {
    data: [
      {
        'id':'1',
        'nombre':'Dell',
        'imagen':'Url',
        'descripcion':'Lorem use',
        'precio':'99.99',
        'caracteristicas':'8 Gb Ram, 240 Gb SSD, Ryzen 5',
      },  
      {
        'id':'2',
        'nombre':'Asus',
        'imagen':'Url',
        'descripcion':'Lorem use',
        'precio':'149.99',
        'caracteristicas':'12 Gb Ram, 240 Gb SSD, Ryzen 7',
      }
    ]
  });
});*/
/* comoComprar GET */
router.get('/comoComprar', (req, res) => {
  let logueado = req.session.loggedin;
  let user = req.session.user;
  res.render('pages/comoComprar', { user: user, logueado: logueado});
});
/* Contacto GET */
router.get('/contacto', (req, res) => {
  let logueado = req.session.loggedin;
  let user = req.session.user;
  console.log(user);
  res.render('pages/contacto', { user: user, logueado: logueado });
});
/* Contacto POST */
router.post('/contacto', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });
  //console.log(process.env.EMAIL);
  console.log('REQ = ', req);
  console.log('REQ.BODY = ', req.body);
  let data = req.body;
  // send mail with defined transport object
  let mailOptions = {
    from: data.nombre, // sender address
    to: 'thewinesclublbye@gmail.com', // list of receivers
    subject: data.asunto, // Subject line
    text: data.mensaje, // plain text body
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500, error.message);
      res.status(500).render('contacto', {
        mensaje: `Ha ocurrido el siguiente error: ${error.message}`,
        mostrar: true
      });
    } else {
      console.log("Email enviado");
      res.redirect("/");
      
    }
  });
});
/* -------------------------------------- ------------------------------------------------- */
/*   --------------------------- Router Backend ------------------------*/
/* -------------------------------------- ------------------------------------------------- */
/* Login GET */
router.get('/login', (req, res) => {
  console.log(req.session);
  res.render('pages/login');
});
/* Login POST */
router.post('/login', (req, res) => {
  console.log(req.body.usuario);
  console.log(req.body.contraseña);
  console.log(req.session);
  const user = req.body.usuario;
  const pass = req.body.contraseña;
  
  if (user && pass) {
    let sql = 'SELECT * FROM users WHERE user = ? AND pass = ?'
    db.query(sql, [user, pass], (err, data) => {
      console.log(data);
      if(data.length > 0) {
        req.session.loggedin = true;
        req.session.user = user;
        res.redirect('/admin');
      } else {
        res.render("pages/login", { error: "Nombre de usuario o contraseña incorrecto" });
      }
    });
  } else {
    res.render("pages/login", { error: "Por favor escribe un nombre de usuario y contraseña" });
  }
});
/* Logout */
router.get('/logout', (req, res) => {
  req.session.destroy((err)=>{    
  })
  // Al finalizar sesión vuelve al inicio
  let sql='SELECT * FROM products';
  db.query(sql, (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);

      res.render('index', { 
          data
      })
  });
});
/* Admin GET */
router.get('/admin', (req, res) => {
  let logueado = req.session.loggedin; // true || undefined
  let user = req.session.user;
  if (req.session.loggedin) {
    const sql = 'Select * From products';
    db.query(sql, (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    res.render('pages/admin', { data, user, logueado });
  });
} else {
    res.render("pages/login", { error: "Por favor loguearse para ver ésta página" })
}  
});
/* Agregar GET */
router.get('/agregar', (req, res) => {
  let logueado = req.session.loggedin;
  let user = req.session.user;
  res.render('pages/agregar', { user: user, logueado: logueado });
});
/* Agregar POST */
router.post('/agregar', (req, res) => {
  let logueado = req.session.loggedin;
  let user = req.session.user;
  const productoDetalle = req.body;
  console.log('Producto detalle',productoDetalle);

  let sql = 'Insert Into products Set ?';
  db.query(sql, productoDetalle, (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    console.log(`Producto agregado sastifactoriamente`);
  });
  res.render('pages/agregar', { ok: "Producto agregado correctamente", user, logueado });
});
/* Editar GET */
router.get('/editar/:id', (req, res) => {
  const id = req.params.id;
  let sql = 'Select * From products Where id= ?';
  db.query(sql, [id], (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    if( data == ""){
      res.send(`
      <h1>no existe producto con id ${id}</h1>
      <a href="/admin">Ver listado de productos</a>    
      `);
    }else {
      res.render('pages/editar', {data:data[0]});   
    }     
  });
  
});
/* Editar POST */
router.post('/editar/:id', (req, res) => {
  const id = req.params.id;
  const productoDetalle = req.body;

  let sql = 'Update products Set ?Where id=?';
  db.query(sql, [productoDetalle, id], (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    console.log(`Producto cambiado sastifactoriamente`);
  });
  res.redirect('/admin');
});
/* Eliminar GET */
router.get('/eliminar/:id', (req, res) => {
  const id = req.params.id;

  let sql = 'Delete From products Where id= ?';
  db.query(sql, [id], (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    console.log(`${data.affectedRows} - Producto eliminado sastifactoriamente`);
  });
  res.redirect('/admin');
});

module.exports = router;
