# r-edit

Collaborative Editing the EASY way.

This module uses Commutative Replicated Data Structures, NO Operational Transforms.

see [
  A commutative replicated data type for cooperative editing
](http://hal.inria.fr/docs/00/44/59/75/PDF/icdcs09-treedoc.pdf)

and [Logoot: a Scalable Optimistic Replication Algorithm 
for Collaborative P2P Networks
](http://hal.archives-ouvertes.fr/docs/00/43/23/68/PDF/main.pdf)

## example

see [r-edit/example](https://github.com/dominictarr/r-edit/tree/master/example)

``` js
//client.js
var REdit = require('r-edit')

var r = REdit().wrap(textarea)
// or r.widget() <-- returns a new textarea (80x24)

var stream = shoe('/redit')

stream.pipe(r.createStream()).pipe(stream)

```

```
//server.js
var REdit = require('r-edit')

var r = REdit().wrap(textarea)

var stream = shoe('/redit')

shoe(function (stream) {
  stream.pipe(r.createStream()).pipe(stream)
}).install(httpServer)
```

## markdown-widget 

Create a widget that displays text as a subset of markdown.

``` js
var widget = require('r-edit/widget')
var e = new REdit()

document.body.appendChild(widget(e))
```

So far, only a few features are supported, headers, italics, bold, code, and bullet-points.
but not syntax that must go over multiple lines, such as quotes, large code sections, or nested lists.

## License

MIT
