# r-edit

Collaborative Editing the EASY way.

This module uses Commutative Replicated Data Structures, NO Operational Transforms.

see [
  A commutative replicated data type for cooperative editing
](http://hal.inria.fr/docs/00/44/59/75/PDF/icdcs09-treedoc.pdf)

[Logoot: a Scalable Optimistic Replication Algorithm 
for Collaborative P2P Networks
](http://hal.archives-ouvertes.fr/docs/00/43/23/68/PDF/main.pdf)

## example

see [r-edit/example](https://github.com/dominictarr/r-edit/tree/master/example)

``` js
//client.js
var REdit = require('r-edit')

var r = REdit().wrap(textarea)

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

## License

MIT
