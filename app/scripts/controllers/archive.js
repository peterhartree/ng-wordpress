'use strict';

/**
 * @ngdoc function
 * @name ngWordPressApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngWordPressApp
 */
angular.module('ngWordPressApp')
  .controller('ArchiveCtrl', function (WordPressApi, $scope, $sce, $location, Settings, State) {

    var currentState = State.get();


    currentState.then(function(currentState) {
      var params = {};
      params.page = currentState.page;
      params.per_page = Settings.ngwp.perPage;

      var posts = WordPressApi.getPosts(currentState.postType, params);

      posts.then(function(posts) {
        if(posts.length === 0) {
          $location.url('/404/');
        }

        angular.forEach(posts, function(post, key) {
          posts[key].content.rendered = $sce.trustAsHtml(posts[key].content.rendered);
        });

        $scope.posts = posts;

        $scope.ready = true;
      });
    });
  });
