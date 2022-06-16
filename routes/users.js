var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.body = {
    nombre: 'Fernando',
    apellido: 'Perez',
    edad: 30,
    email: 'fernando.perez@gmail.com',
    telefono:'4797-6173'
  }
  res.render('users', req.body);
});

module.exports = router;
