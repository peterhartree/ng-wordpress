'use strict';

angular.module('ngWordPressApp')
  .config(function ($locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  })
  .factory('Settings', function settingsFactory($location) {
    var Settings = {};
    Settings.ngwp = {};
    Settings.ngwp.perPage = 10;
    Settings.ngwp.baseUrl = 'http://wordpress.local/wp-json';
    Settings.ngwp.wpApiBasePath = '/wp/v2';
    Settings.ngwp.customApiBasePath = '/ngwp/v1';
    Settings.ngwp.hostname = $location.protocol() + '://' + $location.host();

    return Settings;
  });

