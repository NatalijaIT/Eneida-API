var express = require('express');
var bodyParser = require('body-parser');
var http = require("http");
var app = express();
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.set('views', './views');

app.set('port', process.env.port || 4000);
app.use(require('./routes/index'));

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});


module.exports = app;