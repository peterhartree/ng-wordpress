'use strict';

angular.module('ngWordPressApp')
  .config(function ($locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  })
  .factory('Environment', function environmentFactory($location) {
    var EnvironmentFactory = {};

    var environments = [
      {
        'name' : 'development',
        'hostname' : 'localhost',
        'baseUrl' : 'http://wordpress.local/wp-json'
      },
      {
        'name' : 'staging',
        'hostname' : '',
        'baseUrl' : ''
      },
      {
        'name' : 'production',
        'hostname' : '',
        'baseUrl' : ''
      }
    ];

    EnvironmentFactory.get = function() {
      var currentEnvironment = null;

      angular.forEach(environments, function(environment) {
        if($location.host() === environment.hostname) {
          currentEnvironment = environment;
        }
      });

      if(currentEnvironment) {
        return currentEnvironment;
      }
      else {
        console.error('Did not recognise environment. Check environment settings in app/scripts/settings.js.');
      }
    };

    return EnvironmentFactory;
  })
  .factory('Settings', function settingsFactory($location, Environment) {
    var Settings = {};
    Settings.ngwp = {};
    Settings.ngwp.env = Environment.get();
    Settings.ngwp.perPage = 10;
    Settings.ngwp.wpApiBasePath = '/wp/v2';
    Settings.ngwp.customApiBasePath = '/ngwp/v1';
    Settings.ngwp.hostname = $location.protocol() + '://' + $location.host();

    return Settings;
  });

