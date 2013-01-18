
var RText     = require('..')
var reconnect = require('reconnect')
var reloader  = require('client-reloader')
var widget    = require('../widget')

var rText = RTEXT = RText()

reconnect(reloader(function (stream) {
  stream.pipe(rText.createStream()).pipe(stream)
})).connect('/shoe')

//using the default template...
document.body.appendChild(rText.widget())
document.body.appendChild(widget(rText))
