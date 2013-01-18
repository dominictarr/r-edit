
require('rumours')({
  host: 'rumoursdb.com:4567',
  db: 'r-edit-demo'
}).open('r-edit_demo', function (err, rEdit) {
  if(err) throw err
  rEdit.wrap(document.getElementById('ta'))
})
