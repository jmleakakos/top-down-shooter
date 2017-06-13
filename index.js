console.log("Hello, World!")

var path = require('path');
var express = require('express')
var app = express()

app.get('/', function(req, res) {
  //res.send('Hello World')
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/game/:part', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/part' + req.params['part'] + '.html'))
})

app.listen(3000)

