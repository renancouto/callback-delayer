# CallbackDelayer
> waits before firing your callback

[![Travis](https://img.shields.io/travis/renancouto/callback-delayer.svg?style=flat-square)](https://travis-ci.org/renancouto/callback-delayer)

## Why?
Nobody likes to wait, but there are cases that some waiting makes sense. Actually the only one I can think of is on animations, and that's my motivation behind this little lib.

When you have something animating in your UI you expect it to do something or to go somewhere. Not just simply disappear. Let me give you an example: a form submit. When the user hits the submit button you might want to show some *sending message* before displaying the server response, but you don't know how long the server will take to complete the request it might be long or instantaneous.

To solve this you can use `CallbackDelayer` and make sure that your callback will only execute after an specific amount of time. So your UI will behave like you expect.

## Usage
```js
new CallbackDelayer(delay, callback, wait)
```

## Params
* `delay` *{number}* delay time in miliseconds
* `callback` *{Function}* callback to fire after the delay
* `wait` *{boolean}* wait to fire the callback (optional)

## Examples

```js
// will wait 200ms before firing the callback (pretty much like a setTimeout)
var cb = new CallbackDelayer(200, callback)

// will wait at least 200ms before firing the callback
var cb = new CallbackDelayer(200, callback, true)
setTimeout(function () { cb.isCompleted() }, 250)
```

## Test
`npm test`

# Author
Renan Couto

## TODO
- [ ] publish on NPM
- [ ] publish on Bower
- [ ] add to Travis
- [ ] support UMD
- [ ] support Browsers

# License
MIT

Built with Linux and ♥ in Londrina
