/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'outplay-dash',
    environment: environment,
    rootURL: '/',
    backend:'http://localhost:8080/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' *.google.com *.gstatic.com",
      'style-src': "'self' 'unsafe-inline' *.google.com *.googleapis.com *.gstatic.com",
      'font-src': "'self' *.gstatic.com *.googleapis.com",
      'connect-src': "'self' http://localhost:8080",
    }, 
    apollo: {
      apiURL: 'http://localhost:8080/graphql'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['ember-simple-auth'] = {
    base: {
      store: 'session-store:local-storage',
      routeAfterAuthentication: '/dashboard/overview'
    }
  };
  return ENV;
};
