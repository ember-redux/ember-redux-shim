'use strict'

const mergeTrees = require('broccoli-merge-trees')
const path = require('path')
const replace = require('broccoli-replace')

module.exports = {
  name: 'redux',

  treeForAddon (tree) {
    const reduxPath = path.dirname(require.resolve('redux/src/index.js'))
    let reduxTree = this.treeGenerator(reduxPath)

    // Fix import paths to not include ".js" extension in name
    reduxTree = replace(reduxTree, {
      files: '**/*.js',
      patterns: [
        {
          match: /process\.env\.NODE_ENV/g,
          replacement: "'production'"
        }
      ]
    })

    if (!tree) {
      return this._super.treeForAddon.call(this, reduxTree)
    }

    const trees = mergeTrees([reduxTree, tree], {
      overwrite: true
    })

    return this._super.treeForAddon.call(this, trees)
  }
}
