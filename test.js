/*eslint-disable no-unused-vars*/
/*globals describe, it*/
'use strict'

/**
 * dependencies
 */
import assert          from 'assert'
import CallbackDelayer from './'

/**
 * tests
 */
describe('Callback Delayer Tests', () => {
  it('should check if params exists', () => {
    assert.throws(CallbackDelayer, Error)
    assert.throws(() => { return new CallbackDelayer() }, Error)
    assert.throws(() => { return new CallbackDelayer(200) }, Error)
  })

  it('should check if params are the correct type', () => {
    assert.throws(() => { return new CallbackDelayer('foo', 'bar') }, Error)
  })

  it('should fire the callback', (done) => {
    var cb = new CallbackDelayer(50, () => {
      done()
    })
  })

  it('should wait before firing the callback', (done) => {
    var cb = new CallbackDelayer(100, () => {
      done()
    }, true)

    setTimeout(() => {
      cb.isCompleted()
    }, 150)
  })
})
