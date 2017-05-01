module.exports = {
  scenarios: [
    {
      name: 'default',
      bower: {
        dependencies: { }
      }
    },
    {
      name: 'ember-1-13',
      bower: {
        dependencies: {
          'ember': '~1.13.0'
        },
        resolutions: {
          'ember': '~1.13.0'
        }
      }
    },
    {
      name: 'ember-2-4',
      bower: {
        dependencies: {
          'ember': '~2.4.0'
        },
        resolutions: {
          'ember': '~2.4.0'
        }
      }
    },
    {
      name: 'ember-2-8',
      bower: {
        dependencies: {
          'ember': '~2.8.0'
        },
        resolutions: {
          'ember': '~2.8.0'
        }
      }
    },
    {
      name: 'ember-2-10',
      bower: {
        dependencies: {
          'ember': '~2.10.0'
        },
        resolutions: {
          'ember': '~2.10.0'
        }
      }
    }
  ]
}
