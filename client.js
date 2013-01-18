var widget = require('./widget')

var hashChange = require('hash-change').on('change', open)

var rumours = require('rumours')({
  host: 'http://rumoursdb.com:4567',
  db: 'r-edit-demo'
})

var doc

function open(hash) {
  if(doc) doc.dispose()

  rumours.open('r-edit_' + (hash || 'demo'), function (err, rEdit) {
    doc = rEdit
    if(err) throw err
    document.body.innerHTML = ''
    document.body.appendChild(rEdit.widget())
    document.body.appendChild(widget(rEdit))
  })
}

open(hashChange.hash())

