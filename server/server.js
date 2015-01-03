var express = require('express');
var app = express();
var router = express.Router();

app.get("/", function (req, res) {
  res.redirect("/index.html");
});

app.use('/', express.static(__dirname + '/..' + '/app')); // we'll serve just stastic resoures for now
app.use('/bower_components', express.static(__dirname + '/..' + '/bower_components')); // we'll serve just stastic resoures for now

// start the server
var server = app.listen(3000);