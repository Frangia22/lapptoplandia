var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
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
      }   
    ]
  });
});

module.exports = router;
