
var RText     = require('..')
var reconnect = require('reconnect')
var reloader  = require('client-reloader')

var ta = document.getElementById('ta')

var rText = RTEXT = RText().wrap(ta)

reconnect(reloader(function (stream) {
  stream.pipe(rText.createStream()).pipe(stream)
})).connect('/shoe')

