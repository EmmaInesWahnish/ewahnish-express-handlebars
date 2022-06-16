var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.body = {
    nombre: 'Nazarena',
    apellido: 'Gravillon',
    edad: 30,
    email: 'nazarena.gravillon@gmail.com',
    telefono:'4666-1111'
  }  
  res.render('index', req.body);
});

module.exports = router;
