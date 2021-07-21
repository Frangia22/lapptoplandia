var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', (req, res) => {
  const sql = 'Select * From products';
  db.query(sql, (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    res.render('index', { title: 'Express', data });
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
/* Login */
router.get('/login', (req, res) => {
  res.render('pages/login');
});
/* comoComprar */
router.get('/comoComprar', (req, res) => {
  res.render('pages/comoComprar');
});
/* Contacto */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});
/* Contacto post */
router.post('/contacto', (req, res) => {
  res.send('BIen');
});
/* Admin get */
/* Contacto */
router.get('/admin', (req, res) => {
  const sql = 'Select * From products';
  db.query(sql, (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    res.render('pages/admin', { data });
  });  
});
router.get('/agregar', (req, res) => {
  res.render('pages/agregar');
});
router.post('/agregar', (req, res) => {
  const productoDetalle = req.body;
  console.log('Producto detalle',productoDetalle);

  let sql = 'Insert Into products Set ?';
  db.query(sql, productoDetalle, (err, data) => {
    if (err) res.send(`Ocurrio un error ${err.code}`);
    console.log(`Producto agregado sastifactoriamente`);
  });
  res.render('pages/agregar');
});
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
