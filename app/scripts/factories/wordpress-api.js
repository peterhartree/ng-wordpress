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
    },
    getArchive: function(postType, options) {
      var archive = $q.defer();
      var params = {};
      params.postType = postType;

      if(typeof options !== 'undefined') {
        angular.forEach(filters, function(filter, key) {
          params[key] = filter;
        });
      }

      $http({
        method: 'GET',
        url: Settings.ngwp.env.baseUrl + Settings.ngwp.customApiBasePath + '/archive',
        params: params,
        cache: true
      })
      .success(function(data) {
        archive.resolve(data);
      });

      return archive.promise;
    },

    query: function(method, params) {
      var queryResult = $q.defer();
      var basePath = null;

      if(!params.basePath) {
        console.error('params.basePath is required by WordPressApi.query()');
      }

      $http({
        method: 'GET',
        url: Settings.ngwp.env.baseUrl + params.basePath + '/' + method,
        params: params,
        cache: true
      })
      .success(function(data) {
        queryResult.resolve(data);
      });

      return queryResult.promise;
    }

  };

});