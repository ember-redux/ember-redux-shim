import { test, module } from 'qunit';

import {
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  compose,
  createStore
} from 'redux'

module('Unit | Redux | Tests');

test('exports applyMiddleware', function(assert) {
  assert.equal(typeof applyMiddleware, 'function');
});

test('exports bindActionCreators', function(assert) {
  assert.equal(typeof bindActionCreators, 'function');
});

test('exports combineReducers', function(assert) {
  assert.equal(typeof combineReducers, 'function');
});

test('exports compose', function(assert) {
  assert.equal(typeof compose, 'function');
});

test('exports createStore', function(assert) {
  assert.equal(typeof createStore, 'function');
});
