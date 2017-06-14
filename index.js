var path = require('path');
var express = require('express')
var app = express()

app.get('/', function(req, res) {
  //res.send('Hello World')
  res.sendFile(path.join(__dirname + '/index.html'));
})

// /tutorial; /part1, /part2, ...
app.get('/game/:part', function(req, res) {
  part = '/src/' + req.params['part'] + '.html';
  res.sendFile(path.join(__dirname + part));
})

app.get('/game', function(req, res) {
  part = '/src/' + 'test.html';
  res.sendFile(path.join(__dirname + part));
})

// Used by tutorial right now
app.get('/assets/:asset', function(req, res) {
  res.sendFile(path.join(__dirname + '/assets/' + req.params['asset']));
})


  app.listen(3000)

