/* eslint-env node */
'use strict'

const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const replace = require('broccoli-string-replace');

module.exports = {
  name: 'redux',

  /*
   This method climbs up the hierarchy of addons
   up to the host application.
   This prevents previous addons (prior to `this.import`, ca 2.7.0)
   to break at importing assets when they are used nested in other addons.
   */
  _findHost: function () {
    var current = this;
    var app;

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app
    } while (current && current.parent && current.parent.parent && (current = current.parent))

      return app;
  },

  treeForAddon (tree) {
    const app = this._findHost();
    const reduxPath = path.dirname(require.resolve('redux/src/index.js'));
    let reduxTree = this.treeGenerator(reduxPath);

    // Fix import paths to not include ".js" extension in name
    reduxTree = replace(reduxTree, {
      files: [ '**/*.js' ],
      patterns: [
        {
          match: /process\.env\.NODE_ENV/g,
          replacement: `"${app.env}"`
        },
        {
          match: /import isPlainObject from 'lodash\/isPlainObject'/g,
          replacement: "import lodash from 'lodash'\nconst isPlainObject = lodash.isPlainObject"
        }
      ]
    });

    let addon = this.addons.find(addon => addon.name === 'ember-cli-babel');

    reduxTree = addon.transpileTree(reduxTree, {
      babel: {
        plugins: ['babel-plugin-transform-object-rest-spread']
      },
      'ember-cli-babel': {
        compileModules: false
      }
    });

    if (!tree) {
      return this._super.treeForAddon.call(this, reduxTree);
    }

    const trees = mergeTrees([reduxTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
}
