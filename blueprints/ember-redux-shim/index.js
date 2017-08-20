module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'redux', target: '3.7.2'}
    ])
      .then(() => {
        return this.addAddonsToProject({
          packages: [
            {name: 'ember-lodash-shim', target: '^2.0.0'},
            {name: 'ember-symbol-observable', target: '1.0.0'}
          ]
        })
      })
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
