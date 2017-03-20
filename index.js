'use strict'

const EmberApp = require('ember-cli/lib/broccoli/ember-app')
const replace = require('broccoli-replace')

module.exports = {
  name: 'redux',

  options: {
    nodeAssets: {
      'redux': {
        vendor: {
          include: ['dist/redux.js'],
          processTree (tree) {
            return replace(tree, {
              files: '**/*.js',
              patterns: [
                {
                  match: /process\.env\.NODE_ENV/g,
                  replacement: `"${EmberApp.env()}"`
                },
                {
                  match: /import isPlainObject from 'lodash\/isPlainObject'/g,
                  replacement: "import lodash from 'lodash'\nconst isPlainObject = lodash.isPlainObject"
                }
              ]
            })
          }
        }
      }
    }
  },

  included () {
    this._super.included.apply(this, arguments)

    const app = this._findHost()

    app.import('vendor/redux/dist/redux.js', {
      using: [{transformation: 'amd', as: 'redux'}]
    })
  },

  /*
   This method climbs up the hierarchy of addons
   up to the host application.
   This prevents previous addons (prior to `this.import`, ca 2.7.0)
   to break at importing assets when they are used nested in other addons.
   */
  _findHost () {
    var current = this
    var app

    // Keep iterating upward until we don't have a grandparent.
    // Has to do this grandparent check because at some point we hit the project.
    do {
      app = current.app || app
    } while (current && current.parent && current.parent.parent && (current = current.parent))

    return app
  }
}
