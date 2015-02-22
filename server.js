/**
 * Created by juan_laramoreno on 15-02-21.
 */
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').Server(app);
app.use('/',express.static(path.join(__dirname, '/')));
server.listen(process.env.PORT || 3000);