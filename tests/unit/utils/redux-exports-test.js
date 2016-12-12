import {expect} from 'chai'
import {describe, it} from 'mocha'

import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  compose,
  createStore
} from 'redux'

describe('redux', function () {
  it('exports applyMiddleware', function () {
    expect(applyMiddleware).not.to.equal(undefined)
  })

  it('exports bindActionCreators', function () {
    expect(bindActionCreators).not.to.equal(undefined)
  })

  it('exports combineReducers', function () {
    expect(combineReducers).not.to.equal(undefined)
  })

  it('exports compose', function () {
    expect(compose).not.to.equal(undefined)
  })

  it('exports createStore', function () {
    expect(createStore).not.to.equal(undefined)
  })
})
