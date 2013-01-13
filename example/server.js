
var shoe     = require('shoe')
var ecstatic = require('ecstatic')
var http     = require('http')
var join     = require('path').join
var reloader = require('client-reloader')

var rText = require('../')()
rText.push('open in multiple tabs and start editing!')

var PORT = 3000

shoe(reloader(function (stream) {
  console.log('connection')
  //echo server
  stream.pipe(rText.createStream()).pipe(stream)
  stream.pipe(process.stderr, {end: false})
})).install(http.createServer(
  ecstatic(join(__dirname, 'static'))
).listen(PORT, function () {
  console.log( 'listening on', PORT)
}), '/shoe')
