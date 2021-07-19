var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express', data: [
    {
      'id':'1',
      'nombre':'Dell',
      'imagen':'Url',
      'descripcion':'Lorem use',
      'precio':'599.99',
      'caracteristicas':'8 Gb Ram, 240 Gb SSD, Ryzen 5',
    },  
    {
      'id':'2',
      'nombre':'Asus',
      'imagen':'Url',
      'descripcion':'Lorem use',
      'precio':'799.99',
      'caracteristicas':'12 Gb Ram, 240 Gb SSD, Ryzen 7',
    },
    {
      'id':'3',
      'nombre':'Lenovo',
      'imagen':'Url',
      'descripcion':'Lorem use',
      'precio':'1399.99',
      'caracteristicas':'16 Gb Ram, 240 Gb SSD, 1 Tb HDD, Intel i7',
    }
  ] 
  });
});
/* Admin */
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
});
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
module.exports = router;
