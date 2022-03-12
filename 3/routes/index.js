var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/send', function(req, res, next) {
  res.render('home', {msg: "Check /application/cache/writeme.txt"})
})

router.post('/send', function(req, res, next) {
  // menulis file di /application/writeme.txt
  const {sender} = req.body;
  fs.appendFile('./application/cache/writeme.txt', `${sender} has just sent an email\n`, function(err) {
    if (err) {
      res.redirect('/');
    };
  });
  
  return res.redirect("/");  
  // Salah satu cara untuk mengirimkan email dengan expressjs adalah dengan menggunakan library bernama 'nodemailer'
  // Caranya dapat dilihat di https://www.npmjs.com/package/nodemailer atau https://nodemailer.com/about/ 
});

module.exports = router;
