var diff     = require('adiff').diff
var RArray   = require('r-array')
var inherits = require('util').inherits

function patch (a, changes) {
  changes.forEach(function (patch) {
    a.splice.apply(a, patch)
  })
  return a
}

function split(str) {
  return str.split('\n').map(function (l, i, a) {
    if(i != a.length - 1)
      return l + '\n'
    return l
  })
}

module.exports = REdit

inherits(REdit, RArray)

function REdit() {
  if(!(this instanceof REdit)) return new REdit()
  RArray.call(this)
}

var R = REdit.prototype

R.text  = function text (text) {
  if(!arguments.length)
    return this.toJSON().join('')
  
  var old = this.toJSON()
  text = split(text)
  //got to adjust the user's selection on the text area...
  var p = diff(old, text)
  patch(this, p)
}

R.wrap = function (ta) {
  var cursor = 0, start
  var self = this
  this.on('preupdate', function (ch) {
    //force update when recieve message.
    cursor = 0
    start = ta.selectionStart
    end   = ta.selectionEnd
    //what atom contains the cursor?
    var startKey, sum = 0
    for (var i in self.keys) {
      var key = self.keys[i]
      if((sum = self.store[key].length + sum) >= start) {
        startKey = key; break
      }
    }
    //how much will be inserted into the document?
    for(var key in ch) {
      if(key < startKey)
        cursor += 
          (ch[key] ? ch[key].length : 0)
        - (self.store[key] ? self.store[key].length : 0)
    }
    //THIS IS ACTUALLY WRONG. CAN'T insert into a selection!
    start = start + cursor
    end   = end   + cursor
  })
  this.on('_update', function (update) {
    if(update[2] !== self.id) {
      ta.value = self.toJSON().join('')
      ta.selectionStart = ta.selectionEnd = start
    }
  })
  var pending = false
  ta.addEventListener('input', function () {
    //if(pending) return
    //pending = true
    //setTimeout(function () {
    //pending = false
    self.text(ta.value)
    //}, 300)
  })
  ta.addEventListener('keydown', function () {
    start = ta.selectionStart
    end   = ta.selectionEnd
  })
  ta.addEventListener('focus', function () {
    ta.selectionStart = ta.selectionEnd = start
  })
  ta.value = this.text()

  return this
}
