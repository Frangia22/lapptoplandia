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

module.exports = router;
