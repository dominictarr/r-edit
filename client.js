var widget = require('./widget')

var hashChange = require('hash-change').on('change', open)

var rumours = require('rumours')({
  host: 'http://rumoursdb.com:4567',
  db: 'r-edit-demo'
})

var doc

function open(hash) {
  if(doc) doc.dispose()

  rumours.open('r-edit_demo', function (err, rEdit) {
    doc = rEdit
    if(err) throw err
    document.body.innerHTML = ''
    var ta = document.createElement('textarea')
    ta.setAttribute('cols', 80)
    ts.setAttribute('rows', 24)
    document.body.appendChild(ta)
    rEdit.wrap(ta)
    document.body.appendChild(widget(rEdit))

  })
}

open(hashchange.hash())

