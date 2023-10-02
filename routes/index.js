var express = require('express');
const { routes } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Juan Ryvaldo', 'npm':202424029}
  );
});
router.get('/profil', function(reg, res){
  res.render('profil',{nama: 'Juan Ryvaldo', 'npm':202424029});
});


module.exports = router;
