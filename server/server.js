var express = require('express');
var app = express();

app.use(express.static(__dirname + '/..' + '/app')); // we'll serve just stastic resoures for now

// start the server
var server = app.listen(3000);