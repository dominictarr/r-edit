
var RText     = require('..')
var reconnect = require('reconnect')
var reloader  = require('client-reloader')
var widget    = require('../widget')
var ta = document.getElementById('ta')

var rText = RTEXT = RText().wrap(ta)

reconnect(reloader(function (stream) {
  stream.pipe(rText.createStream()).pipe(stream)
})).connect('/shoe')


console.log(widget)

//using the default template...
document.body.appendChild(widget(rText))
