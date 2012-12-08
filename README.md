# r-edit

Collaborative Editing the EASY way.

<img src=https://secure.travis-ci.org/dominictarr/r-edit.png?branch=master>

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
