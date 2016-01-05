'use strict';

angular.module( 'ngWordPressApp')
/**
 * Provides data from WordPress API
 */
.factory('WordPressApi', function WordPressApi($http, $q, Settings) {

  return {
    getPosts: function(postType, filters) {
      var params = {};
      var posts = $q.defer();

      if(typeof filters !== 'undefined') {
        angular.forEach(filters, function(filter, key) {
          params[key] = filter;
        });
      }

      $http({
        method: 'GET',
        url: Settings.ngwp.env.baseUrl + Settings.ngwp.wpApiBasePath + '/' + postType,
        params: params,
        cache: true
      })
      .success(function(data) {
        posts.resolve(data);
      });

      return posts.promise;
    },
    getPost: function(postType, slug) {

      var posts = $q.defer();

      $http({
        method: 'GET',
        url: Settings.ngwp.env.baseUrl + Settings.ngwp.wpApiBasePath + '/' + postType,
        params: { 'filter[name]' : slug },
        cache: true
      })
      .success(function(data) {
        posts.resolve(data);
      });

      return posts.promise;
    },
    getOptions: function() {
      var options = $q.defer();

      $http({
        method: 'GET',
        url: Settings.ngwp.env.baseUrl + Settings.ngwp.customApiBasePath + '/options',
        cache: true
      })
      .success(function(data) {
        options.resolve(data);
      });

      return options.promise;
    }
  };

});