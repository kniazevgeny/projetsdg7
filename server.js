var express = require('express');
var path = require('path');
var compression = require('compression');
var serveStatic = require('serve-static');

app = express();
app.use(compression());
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);