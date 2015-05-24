'use strict'

/**
 * Callback Delayer Class
 * @param {number}   delay    [delay time in miliseconds]
 * @param {Function} callback [callback to fire after the delay]
 * @param {boolean}  wait     [wait to fire the callback] optional
 */
function CallbackDelayer(delay, callback, wait) {

  // properties
  this.delay    = delay
  this.callback = callback
  this.done     = !wait

  // methods
  this.checkParams()
  this.setTimer()
}

/**
 * Check parameters
 */
CallbackDelayer.prototype.checkParams = function () {
  if (!this.delay) {
    throw new Error('You must pass a delay')
  }

  if (!this.callback) {
    throw new Error('You must pass a callback')
  }

  if (typeof this.delay !== 'number') {
    throw new Error('The delay must be a number')
  }

  if (typeof this.callback !== 'function') {
    throw new Error('The callback must be a function')
  }
}

/**
 * is completed trigger
 */
CallbackDelayer.prototype.isCompleted = function () {
  this.done = true
  this.fireCallback()
}

/**
 * set the timer
 */
CallbackDelayer.prototype.setTimer = function () {
  this.timer = setTimeout(function clearTimer() {
    this.timer = null
    this.fireCallback()
  }.bind(this), this.delay)
}

/**
 * fires the callback
 */
CallbackDelayer.prototype.fireCallback = function () {
  if (this.done && !this.timer) {
    this.callback()
  }
}

/**
 * public
 */
module.exports = CallbackDelayer
