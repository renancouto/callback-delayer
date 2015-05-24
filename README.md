# CallbackDelayer
> waits before firing your callback

## Usage

```js
// this will wait 200ms before firing the callback
var cb = new CallbackDelayer(200, callback)

// this will wait at least 200ms before firing the callback
var cb = new CallbackDelayer(200, callback, true)
setTimeout(function () { cb.isCompleted() }, 250)
```

## Test
`npm test`

## TODO
- [ ] publish on NPM
- [ ] publish on Bower
- [ ] add to Travis
- [ ] support UMD
- [ ] support Browsers
- [ ] write better docs
