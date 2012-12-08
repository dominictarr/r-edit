
var shoe     = require('shoe')
var ecstatic = require('ecstatic')
var http     = require('http')
var join     = require('path').join
var reloader = require('client-reloader')

var text = require('../')()

var PORT = 3000

shoe(reloader(function (stream) {
  console.log('connection')
  //echo server
  stream.pipe(text.createStream()).pipe(stream)
})).install(http.createServer(
  ecstatic(join(__dirname, 'static'))
).listen(PORT, function () {
  console.log( 'listening on', PORT)
}), '/shoe')
