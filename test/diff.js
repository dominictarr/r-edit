var diff   = require('adiff').diff
var RArray = require('..')

var a = new RArray ()

a.splice(0, 0, 'a',  'b', 'c', 'd')

var _a = a.toJSON()
console.log(_a)

_a.splice(2, 1, 'HI')
console.log(_a)

var p = diff(a.toJSON(), _a)

console.log('PATCH', p)

p.forEach(function (e) {
  a.splice.apply(a, e)
})
