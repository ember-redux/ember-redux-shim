# 1.0.2

* **Upgraded** to test against Ember 2.11.


# 1.0.1

* **Added** more Ember versions to CI builds to ensure addon is working with latest versions of Ember.
* **Upgraded** all `devDependencies` to latest versions.


# 1.0.0

* **Removed** unnecessary files from npm package so the package is slightly smaller to pull down. The package from npm will now contain the following:

  *  `blueprints/`
     * `ember-redux-shim/`
       * `index.js`
  * `CHANGELOG.md`
  * `index.js`
  * `LICENSE.md`
  * `packag.json`
  * `README.md`

# 0.0.5

* **Removed** `.pullapprove.yml` since PullApprove is not used on this repo.
* **Updated** [license](LICENSE) to attribute `ember-redux` instead of `Ciena`.

# 0.0.4

* **Updated** Travis config to publish as npm user `ember-redux`.


# 0.0.3

* **Updated** CI to work with new Github organization.


# 0.0.2

* **Fixed** tree to use consumers current Ember environment.


# 0.0.1

* Initialize addon and wire up to CI so it publishes to npm.


