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

module.exports = router;
